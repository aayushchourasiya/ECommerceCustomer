import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Styles} from '../../assets/styles';
import {ButtonLarge} from '../Reusable/';
import firestore from '@react-native-firebase/firestore';
import {StylesLight} from '../../assets/stylesLight';
import {useSelector} from 'react-redux';

export const Home = ({navigation}) => {
  const categories = [
    {name: 'Technology', image: require('../../assets/images/technology.png')},
    {name: 'Kitchen', image: require('../../assets/images/kitchen.png')},
    {name: 'Furniture', image: require('../../assets/images/furniture.png')},
  ];
  const [data, setData] = useState([]);
  const showProducts = name => {
    navigation.navigate('ProductCategory', {name: name});
  };
  const theme = useSelector(state => state.theme);

  const MainStyles = theme ? Styles : StylesLight;
  const filterFunction = query => {
    let arr = [];
    query?.filter(item => {
      const check = item._data.myProducts.filter(object => {
        arr = [...arr, object];
        // setData([...data, object]);
        return;
      });
      // console.log();
      // setData([...data,...check]);
    });
    setData(arr);
  };
  useEffect(() => {}, [data]);

  useEffect(() => {
    firestore()
      .collection('Users')
      .where('role', '==', 'admin')
      .get()
      .then(query => {
        filterFunction(query._docs);
      })
      .catch(e => {
        alert(e);
      });
  }, []);

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
      <View style={{flex: 1}}>
        <Text
          style={[
            MainStyles.textLarge,
            {alignSelf: 'flex-start', marginLeft: 20, marginTop: 20},
          ]}>
          Latest Products
        </Text>
        {data.length > 0 ? (
          <FlatList
            data={data.reverse().slice(0, 10)}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ProductDetails', {item: item})
                  }
                  key={index}
                  style={[
                    MainStyles.buttonLarge,
                    {
                      marginTop: 20,
                      alignSelf: 'center',
                      width: '90%',
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingHorizontal: 10,
                    },
                  ]}>
                  <Image
                    source={{uri: item.image}}
                    style={{width: 100, height: 100}}
                  />
                  <View style={{width: '70%', justifyContent: 'center'}}>
                    <Text style={MainStyles.textLarge}>{item.name}</Text>
                    <Text style={[MainStyles.textSmall, {textAlign: 'center'}]}>
                      {item.description.length > 80
                        ? item.description.slice(0, 80) + '...'
                        : item.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        ) : (
          <Text style={[MainStyles.textLarge, {marginTop: 50}]}>
            No Products to show!
          </Text>
        )}
      </View>
    </View>
  );
};
