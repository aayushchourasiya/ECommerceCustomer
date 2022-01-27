import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {MainStyles} from '../../assets/styles';
import {ButtonLarge} from '../Reusable/';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Home = () => {
  const categories = ['Technology', 'Kitchen', 'Furniture'];
  return (
    <View style={MainStyles.mainBackground}>
      <View>
        <Text style={MainStyles.textLarge}>Categories</Text>
        <FlatList
          horizontal
          data={categories}
          style={{marginTop:20}}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={[
                  MainStyles.buttonLarge,
                  {
                    marginHorizontal: 20,
                    width: 300,
                    height: 150,
                    justifyContent: 'center',
                  },
                ]}>
                <Text style={MainStyles.textLarge}>{item}</Text>
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
