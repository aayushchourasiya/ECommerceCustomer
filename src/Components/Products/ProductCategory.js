import {View, Text, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {MainStyles} from '../../assets/styles';
import {useDispatch} from 'react-redux';
import {productCategory} from '../../store/action';
import firestore from '@react-native-firebase/firestore';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const ProductCategory = ({route}) => {
  const {name} = route.params;
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [state, setState] = useState(false);
  const filterFunction = query => {
    query?.filter(item => {
      const check = item._data.myProducts.filter(object => {
        return object.category === name;
      });
      setData(data.concat(check));
    });
    setState(prev => !prev);
  };
  useEffect(() => {}, [state]);
  useEffect(() => {
    dispatch(productCategory(name));
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
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              key={index}
              style={[
                MainStyles.buttonLarge,
                {
                  marginTop:20,
                  alignSelf: 'center',
                  width: '80%',
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
              <View style={{width:"70%",justifyContent:'center'}}>
                <Text style={MainStyles.textLarge}>{item.name}</Text>
                <Text style={[MainStyles.textSmall,{textAlign:'center'}]}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
