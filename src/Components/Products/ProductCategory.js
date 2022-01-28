import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {MainStyles} from '../../assets/styles';
import firestore from '@react-native-firebase/firestore';

export const ProductCategory = ({route,navigation}) => {
  const {name} = route.params;
  const [data, setData] = useState([]);
  const [state, setState] = useState(false);
  const filterFunction = query => {
    let arr = [];
    query?.filter(item => {
      const check = item._data.myProducts.filter(object => {
        if (object.category === name) {
          arr = [...arr, object];
          // setData([...data, object]);
          return;
        }
        return;
      });
      // console.log();
      // setData([...data,...check]);
    });
    setData(arr);
    setState(prev => !prev);
  };
  useEffect(() => {}, [state]);
  // useEffect(() => {
  //   // console.log(">>>>>>>>>",data);
  // }, [data]);

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
    <View style={[MainStyles.mainBackground]}>
      {data.length>0 ? <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
            onPress={()=>navigation.navigate("ProductDetails",{item:item})}
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
      />: <Text style={[MainStyles.textLarge,{marginTop:50}]}>No Products to show!</Text>}
    </View>
  );
};
