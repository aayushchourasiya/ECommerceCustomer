import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {MainStyles} from '../../assets/styles';
import {ButtonLarge} from '../Reusable/';

export const ProductDetails = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <View style={MainStyles.mainBackground}>
      <View style={styles.productDetails}>
        <Image source={{uri: item.image}} style={{width: 200, height: 200}} />
        <View style={{flexDirection: 'column', marginRight: 20}}>
          <Text style={[MainStyles.textLarge, {marginBottom: 10}]}>
            {item.price}
          </Text>
          <ButtonLarge
            text="Buy Now"
            style={{width: '100%', height: 60}}
            onPress={() => navigation.navigate('BuyProduct',{item:item})}
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
