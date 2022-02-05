import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {Styles} from '../../assets/styles';
import {useDispatch, useSelector} from 'react-redux';
import {BoxButton, ButtonLarge} from '../Reusable';
import {changeQuantityOfItem, removeFromCart, emptyCart} from '../../store/action';
import {colors} from '../../assets/constants';
import {StylesLight} from '../../assets/stylesLight';
import firestore from '@react-native-firebase/firestore';

export const CartHome = () => {
  const theme = useSelector(state => state.theme);
  const MainStyles = theme ? Styles : StylesLight;
  const data = useSelector(state => state.cart);
  const user = useSelector(state => state.user);
  console.log('>>>>>.', user);
  const [oldQuantity, setOldQuantity] = useState(0);
  const [newQuantity, setNewQuantity] = useState(0);
  const [modalItem, setModalItem] = useState([]);
  const [indexForChangeQuantity, setIndexForChangeQuantity] = useState(null);

  const [buttonState,setButtonState] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const removeFromCartFunction = index => {
    dispatch(removeFromCart({index: index}));
  };

  const changeQuantity = (item, index) => {
    setOldQuantity(item.quantity);
    setNewQuantity(item.quantity);
    setModalItem(item.item);
    setIndexForChangeQuantity(index);
    setShowModal(true);
  };

  const changeQuantityDone = () => {
    if (oldQuantity !== newQuantity) {
      dispatch(
        changeQuantityOfItem({
          index: indexForChangeQuantity,
          newQuantity: newQuantity,
        }),
      );
      setOldQuantity(0);
      setNewQuantity(0);
      setModalItem(0);
      setIndexForChangeQuantity(null);
      setShowModal(false);
    }
  };

  const closeModal = () => {
    setOldQuantity(0);
    setNewQuantity(0);
    setModalItem(0);
    setIndexForChangeQuantity(null);
    setShowModal(false);
  };

  const changeInitial = value => {
    switch (value) {
      case '-':
        return setNewQuantity(newQuantity - 1);
      case '+':
        return setNewQuantity(newQuantity + 1);
    }
  };

  const filterFunction = query => {
    query?.filter(serverItem => {
      let newProductsArray = [...serverItem._data.myProducts];
      serverItem._data.myProducts.filter(
        (serverProduct, serverProductIndex) => {
          data.filter((cartItem, cartIndex) => {
            if (serverProduct.id === cartItem.item.id) {
              newProductsArray[serverProductIndex].quantity =
                Number(serverProduct.quantity) - Number(cartItem.quantity);
              firestore()
                .collection('Users')
                .doc(serverItem.id)
                .update({
                  myProducts: [...newProductsArray],
                })
                .then(() => {
                  setButtonState(false);
                  // let soldProductsArray = [...serverItem.soldProducts]
                  // firestore().collection('Users').doc(serverItem.id).update({
                  //   soldProducts : [...soldProductsArray,...user , newQuantity,serverProduct]
                  // });
                })
                .catch(e => {
                  alert(e);
                  setButtonState(false);
                });
            }
          });
        },
      );
    });
  };

  const checkOutFunction = () => {
    setButtonState(true);
    firestore()
      .collection('Users')
      .where('role', '==', 'admin')
      .get()
      .then(query => {
        filterFunction(query._docs);
        dispatch(emptyCart());
        alert('Thank you for shopping with us!');
      })
      .catch(e => {
        alert(e);
        setButtonState(false)
      });
  };

  return (
    <View
      style={[
        MainStyles.mainBackground,
        {opacity: showModal ? (theme ? 0.5 : 0.1) : 1},
      ]}>
      {data.length > 0 ? (
        <View style={{width: '100%', marginTop: 5, flex: 1}}>
          <FlatList
            data={data}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={[
                    MainStyles.buttonLarge,
                    {
                      width: '80%',
                      padding: 10,
                      marginTop: 10,
                      alignSelf: 'center',
                    },
                  ]}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      margin: 10,
                    }}>
                    <Image
                      source={{uri: item.item.image}}
                      style={{width: 60, height: 60}}
                    />
                    <View>
                      <Text style={MainStyles.textLarge}>{item.item.name}</Text>
                      <Text style={MainStyles.textMedium}>
                        Quantity : {item.quantity}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{justifyContent: 'center', flexDirection: 'row'}}>
                    <ButtonLarge
                      text="Change quantity"
                      style={{width: '50%'}}
                      textStyle={{fontSize: 25}}
                      onPress={() => changeQuantity(item, index)}
                    />
                    <ButtonLarge
                      text="Remove from Cart"
                      style={{width: '50%'}}
                      textStyle={{fontSize: 25}}
                      onPress={() => removeFromCartFunction(index)}
                    />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
          <View style={{alignItems: 'center'}}>
            <ButtonLarge
              style={{backgroundColor: colors.lightWhite, borderWidth: 0}}
              textStyle={{color: colors.black}}
              text="CHECKOUT"
              iconName="doubleright"
              iconColor={colors.black}
              disabled={buttonState}
              onPress={() => checkOutFunction()}
            />
          </View>
          <Modal
            presentationStyle="overFullScreen"
            visible={showModal}
            transparent={true}
            animationType="slide"
            onRequestClose={closeModal}>
            <View
              style={{
                flex: 1,
                // flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: theme ? colors.black : colors.white,
                  borderColor: theme ? colors.lightWhite : colors.black,
                  borderWidth: 2,
                  borderRadius: 20,
                  width: 300,
                  height: 300,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: '100%',
                    flex: 1,
                    alignItems: 'flex-end',
                    marginRight: 10,
                    marginTop: 10,
                  }}>
                  <BoxButton
                    style={{width: 40, height: 40}}
                    value="X"
                    onPress={closeModal}
                  />
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <Text style={MainStyles.textLarge}>Change Quantity</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                  }}>
                  <BoxButton
                    disabled={newQuantity <= 1 ? true : false}
                    value="-"
                    textStyle={{fontSize: 50}}
                    style={{marginRight: 10}}
                    onPress={() => changeInitial('-')}
                  />
                  <BoxButton value={newQuantity} disabled />
                  <BoxButton
                    disabled={newQuantity >= modalItem.quantity ? true : false}
                    value="+"
                    style={{marginLeft: 10}}
                    onPress={() => changeInitial('+')}
                  />
                </View>
                <View style={{width: '100%', alignItems: 'center'}}>
                  <ButtonLarge
                    text="Done"
                    disabled={oldQuantity === newQuantity}
                    onPress={changeQuantityDone}
                  />
                </View>
              </View>
            </View>
          </Modal>
        </View>
      ) : (
        <Text style={[MainStyles.textLarge, {marginTop: 50}]}>
          Your Cart is Empty!
        </Text>
      )}
    </View>
  );
};
