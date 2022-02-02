import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Styles} from '../../assets/styles';
import {ButtonLarge} from '../Reusable/';
import {StylesLight} from '../../assets/stylesLight';
import {useSelector} from 'react-redux';
import {colors} from '../../assets/constants';

export const ProductDetails = ({route, navigation}) => {
  const theme = useSelector(state => state.theme);
  const cart = useSelector(state => state.cart);
  const MainStyles = theme ? Styles : StylesLight;

  const {item} = route.params;

  const quantityCheck = () => {
    let outOfStock = 0;
    cart.filter(cartObject => {
      if (cartObject.item.id === item.id) {
        if (cartObject.quantity < item.quantity && item.quantity > 0) {
          
        } else {
          outOfStock++;
        }
      }
      else if(item.quantity <= 0){
        outOfStock++;
      }
    });
    if (outOfStock>0) {
      return true;
    } else {
      return false;
    }
  };

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
          {quantityCheck() && (
            <Text style={[MainStyles.textMedium, {color: colors.red}]}>
              Out of stock!
            </Text>
          )}
          <ButtonLarge
            disabled={quantityCheck()}
            text="Buy Now"
            style={{padding: 10}}
            onPress={() => navigation.navigate('BuyProduct', {item: item})}
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
