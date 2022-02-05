import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Styles} from '../../assets/styles';
import {ButtonLarge} from '../Reusable/';
import {StylesLight} from '../../assets/stylesLight';
import {useSelector} from 'react-redux';
import {colors} from '../../assets/constants';
import firestore from '@react-native-firebase/firestore';

export const ProductDetails = ({route, navigation}) => {
  const theme = useSelector(state => state.theme);
  const cart = useSelector(state => state.cart);
  const MainStyles = theme ? Styles : StylesLight;
  const [outOfStock, setOutOfStock] = useState(false);
  const [quantityNotLessThanCart, setQuantityNotLessThanCart] = useState(false);
  const [serverItem, setServerItem] = useState(null);

  const {item} = route.params;

  useEffect(() => {
    navigation.addListener('focus', () => {
      quantityCheck();
    });
    const quantityCheck = () => {
      setOutOfStock(true);
      firestore()
        .collection('Users')
        .where('role', '==', 'admin')
        .get()
        .then(query => {
          query._docs?.filter(serverItem => {
            serverItem._data.myProducts.filter(serverProduct => {
              if (serverProduct.id === item.id) {
                if (serverProduct.quantity <= 0) {
                  setOutOfStock(true);
                } else {
                  setOutOfStock(false);
                  setServerItem(serverProduct);
                }
              }
            });
          });
        })
        .catch(e => {
          alert(e);
        });

      cart.filter(cartObject => {
        if (cartObject.item.id === item.id) {
          if (cartObject.quantity < item.quantity && item.quantity > 0) {
            setQuantityNotLessThanCart(false);
          } else {
            setQuantityNotLessThanCart(true);
          }
        } else if (item.quantity <= 0) {
            setQuantityNotLessThanCart(true);
        } else {
            setQuantityNotLessThanCart(false);
        }
      });
    };
  }, [cart]);

  return (
    <View style={MainStyles.mainBackground}>
      <View style={styles.productDetails}>
        <Image source={{uri: item.image}} style={{width: 200, height: 200}} />
        <View
          style={{
            flexDirection: 'column',
            marginRight: 40,
            alignItems: 'center',
          }}>
          <Text style={[MainStyles.textLarge, {marginBottom: 10}]}>
            {item.price}
          </Text>
          {outOfStock ||
            (quantityNotLessThanCart && (
              <Text style={[MainStyles.textMedium, {color: colors.red}]}>
                Out of stock!
              </Text>
            ))}
          <ButtonLarge
            disabled={outOfStock || quantityNotLessThanCart}
            text="Buy Now"
            style={{padding: 10}}
            onPress={() =>
              navigation.navigate('BuyProduct', {item: item , itemWithNewQuantity: serverItem})
            }
          />
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <Text style={MainStyles.textLarge}>Category : {item.category}</Text>
        <Text style={[MainStyles.textMedium, {marginTop: 10}]}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  productDetails: {
    margin: 10,
    marginTop: 20,
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
