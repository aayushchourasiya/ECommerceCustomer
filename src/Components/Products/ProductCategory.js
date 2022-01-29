import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {MainStyles} from '../../assets/styles';
import firestore from '@react-native-firebase/firestore';
import {TextInputCustom} from '../Reusable';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../assets/constants';

export const ProductCategory = ({route, navigation}) => {
  const {name} = route.params;
  const [data, setData] = useState([]);
  const [oldData, setOldData] = useState([]);
  const [state, setState] = useState(false);
  const [search, setSearch] = useState('');
  const searchRef = useRef();
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
    setOldData(arr);
    setState(prev => !prev);
  };
  useEffect(() => {
    if (search.length > 0) {
      const arr = [];
      oldData.map(item => {
        if (item.name.toLowerCase().includes(search.toLowerCase())) {
          arr.push(item);
        }
      });
      if (arr.length > 0) {
        setData(arr);
      } else {
        setData([]);
      }
    } else {
      return setData(oldData);
    }
  }, [state, search]);
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 10,
        }}>
        <TextInputCustom
          placeholder="Search Products"
          value={search}
          onChangeText={text => setSearch(text)}
          style={{width: '80%'}}
          customRef={searchRef}
        />
        <TouchableOpacity onPress={() => searchRef.current.focus()}>
          <Icon name="search1" size={40} color={colors.lightWhite} />
        </TouchableOpacity>
      </View>
      {data.length > 0 ? (
        <FlatList
          data={data}
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
  );
};
