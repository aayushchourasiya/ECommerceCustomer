import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import {MainStyles} from '../../assets/styles';
import {useDispatch, useSelector} from 'react-redux';
import {ButtonLarge} from '../Reusable';
import {removeFromCart} from '../../store/action';
import {colors} from '../../assets/constants';
import Icon from 'react-native-vector-icons/AntDesign';

export const CartHome = () => {
  const data = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const removeFromCartFunction = index => {
    dispatch(removeFromCart({index: index}));
  };

  return (
    <View style={[MainStyles.mainBackground]}>
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
                  <View style={{alignItems: 'center'}}>
                    <ButtonLarge
                      text="Remove from Cart"
                      style={{width: '50%'}}
                      textStyle={{fontSize: 15}}
                      onPress={() => removeFromCartFunction(index)}
                    />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
          <View style={{alignItems: 'center'}}>
            <ButtonLarge
              style={{backgroundColor: colors.lightWhite}}
              textStyle={{color: colors.black}}
              text='Checkout'
              iconName='doubleright'
              iconColor={colors.black}
              onPress={()=>alert("YO")}
            />
          </View>
        </View>
      ) : (
        <Text style={[MainStyles.textLarge, {marginTop: 50}]}>
          Your Cart is Empty!
        </Text>
      )}
    </View>
  );
};
