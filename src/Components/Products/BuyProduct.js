import {Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {MainStyles} from '../../assets/styles';
import {BoxButton, ButtonLarge} from '../Reusable/';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../store/action';

export const BuyProduct = ({route, navigation}) => {
  const {item} = route.params;
  const [quantity, setQuantity] = useState(1);
  const [errorText, setErrorText] = useState(null);

  const dispatch = useDispatch();

  const changeInitial = value => {
    switch (value) {
      case '-':
        return setQuantity(quantity - 1);
      case '+':
        return setQuantity(quantity + 1);
    }
  };

  const addToCartFunction = () => {
    dispatch(addToCart({item: item, quantity: quantity}));
    alert('Added');
    navigation.goBack();
  };

  return (
    <View style={MainStyles.mainBackground}>
      <View style={MainStyles.centerView}>
        <Image
          source={{uri: item.image}}
          style={{width: 200, height: 200, marginBottom: 20}}
        />
        <Text style={[MainStyles.textLarge, {marginBottom: 20}]}>
          {item.name}
        </Text>
        {errorText && (
          <Text style={[MainStyles.textLarge, {marginBottom: 20}]}>
            {errorText}
          </Text>
        )}
        <View style={{flexDirection: 'row'}}>
          <BoxButton
            disabled={quantity <= 0 ? true : false}
            value="-"
            textStyle={{fontSize: 50}}
            style={{marginRight: 10}}
            onPress={() => changeInitial('-')}
          />
          <BoxButton value={quantity} disabled />
          <BoxButton
            disabled={quantity >= item.quantity ? true : false}
            value="+"
            style={{marginLeft: 10}}
            onPress={() => changeInitial('+')}
          />
        </View>
      </View>
      <View
        style={{
          margin: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <ButtonLarge
          text="Add to Cart"
          style={{width: 150}}
          textStyle={{fontSize: 20}}
          disabled={quantity > 0 ? false : true}
          onPress={addToCartFunction}
        />
        <ButtonLarge
          text="Checkout"
          style={{width: 150}}
          textStyle={{fontSize: 20}}
          disabled={quantity > 0 ? false : true}
          onPress={() => alert('Make Payment')}
        />
      </View>
    </View>
  );
};
