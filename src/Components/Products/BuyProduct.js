import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {MainStyles} from '../../assets/styles';
import {BoxButton, ButtonLarge} from '../Reusable/';

export const BuyProduct = () => {
  const [quantity, setQuantity] = useState(1);

  const changeInitial = value => {
    switch (value) {
      case '-':
        quantity <= 0 ? setQuantity(0) : setQuantity(quantity - 1);
        return;
      case '+':
        return setQuantity(quantity + 1);
    }
  };

  return (
    <View style={MainStyles.mainBackground}>
      <View style={[MainStyles.centerView, {flexDirection: 'row'}]}>
        <BoxButton
          value="-"
          textStyle={{fontSize: 50}}
          style={{marginRight: 10}}
          onPress={() => changeInitial('-')}
        />
        <BoxButton value={quantity} disabled />
        <BoxButton
          value="+"
          style={{marginLeft: 10}}
          onPress={() => changeInitial('+')}
        />
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
          onPress={()=>alert("Added")}
        />
        <ButtonLarge
          text="Checkout"
          style={{width: 150}}
          textStyle={{fontSize: 20}}
          disabled={quantity > 0 ? false : true}
          onPress={()=>alert("Make Payment")}
        />
      </View>
    </View>
  );
};
