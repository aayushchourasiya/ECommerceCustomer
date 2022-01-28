import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {MainStyles} from '../../assets/styles';
import {ButtonLarge} from '../Reusable/';

export const ProductDetails = ({route}) => {
  const {item} = route.params;
  return (
    <View style={MainStyles.mainBackground}>
      <View style={styles.productDetails}>
        <Image source={{uri: item.image}} style={{width: 200, height: 200}} />
        <ButtonLarge text="Buy Now" style={{width: '40%', height: 60}} />
      </View>
      <View>
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
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
