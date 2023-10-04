import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <Text style={{color: 'rgb(255,155,155)'}}>Hello World</Text>
      <View
        style={{
          backgroundColor: 'red',
          width: 100,
          height: 100,
          borderRadius: 50,
        }}>
        {/* <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          labore, dolor beatae harum recusandae aspernatur nulla velit sapiente
          maiores quasi fuga laudantium explicabo culpa voluptatibus quidem
          corporis nobis dicta autem.
        </Text> */}
      </View>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          // flex: 1,
          // justifyContent: 'center',
          // alignItems: 'center',
          // paddingTop: 50,
          // paddingBottom: 50,
          // paddingVertical: 70,
          // paddingLeft: 10,
          // paddingRight: 10,
          // paddingHorizontal: 30,
          // borderWidth: 10,
          // borderTopWidth: 10,
          borderBottomWidth: 10,
          // borderLeftWidth: 10,
          // borderRightWidth: 10,
          borderColor: '#bdbdbd',
          borderRadius: 6,
          // marginTop: 10,
          // marginBottom: 10,
          marginVertical: 20,
          marginHorizontal: 20,
          // marginLeft: 10,
          // marginRight: 10,
          elevation: 5,
        }}>
        <Text>Lorem</Text>
      </View>

      <View style={{backgroundColor: 'red', flexDirection: 'row'}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#FFFFFF'}}>Home</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#FFFFFF'}}>Kategori</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#FFFFFF'}}>Profil</Text>
        </View>
      </View>
    </View>
  );
};

export default App;
