import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {MainStyles} from '../../assets/styles';
import {ButtonLarge} from '../Reusable/';

export const Home = () => {
  const categories = [
    {name: 'Technology', image: require('../../assets/images/technology.png')},
    {name: 'Kitchen', image: require('../../assets/images/kitchen.png')},
    {name: 'Furniture', image: require('../../assets/images/furniture.png')},
  ];
  return (
    <View style={MainStyles.mainBackground}>
      <View>
        <Text style={MainStyles.textLarge}>Categories</Text>
        <FlatList
          horizontal
          data={categories}
          style={{marginTop: 20}}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={[
                  MainStyles.buttonLarge,
                  {
                    marginHorizontal: 20,
                    width: 300,
                    height: 200,
                    justifyContent: 'space-between',
                  },
                ]}
                key={index}>
                <Image source={item.image} style={{width:300,height:150}} />
                <Text style={[MainStyles.textMedium,{textAlign:'right',marginRight:10}]}>{item.name}</Text>
              </TouchableOpacity>
              // <ButtonLarge
              //   style={{
              //     alignSelf: 'center',
              //     justifyContent: 'center',
              //     marginTop: 10,
              //     height: 140,
              //     width: '95%',
              //   }}
              //   text={item}
              //   onPress={() => alert('abc')}
              //   key={index}
              // />
            );
          }}
        />
      </View>
    </View>
  );
};
