import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  BackHandler,
} from 'react-native';
import React, { useEffect } from 'react';
import {MainStyles} from '../../assets/styles';
import {ButtonLarge} from '../Reusable/';

export const Home = ({navigation}) => {
  const categories = [
    {name: 'Technology', image: require('../../assets/images/technology.png')},
    {name: 'Kitchen', image: require('../../assets/images/kitchen.png')},
    {name: 'Furniture', image: require('../../assets/images/furniture.png')},
  ];

  const showProducts = name => {
    navigation.navigate('ProductCategory', {name: name});
  };

  useEffect(()=>{
    BackHandler.addEventListener('hardwareBackPress',()=>{
      alert("abc");
    })
  },[])

  return (
    <View style={MainStyles.mainBackground}>
      <View>
        <Text
          style={[
            MainStyles.textLarge,
            {alignSelf: 'flex-start', marginLeft: 20, marginTop: 20},
          ]}>
          Categories
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={categories}
          style={{marginTop: 20}}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => showProducts(item.name)}
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
                <Image
                  source={item.image}
                  style={{width: 280, height: 150, alignSelf: 'center'}}
                />
                <Text
                  style={[
                    MainStyles.textMedium,
                    {textAlign: 'right', marginRight: 10},
                  ]}>
                  {item.name}
                </Text>
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
