import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <View>
      <Text
        style={{
          color: 'blue',
          fontWeight: 'normal',
          fontSize: 22,
          textAlign: 'right',
          marginTop: 10,
          marginRight: 20,
          marginLeft: 10,
          marginBottom: 20,
        }}>
        Nama <Text style={{color: 'black', fontSize: 32}}>Saya</Text>
      </Text>
      <Text
        style={{
          textDecorationLine: 'underline',
          fontSize: 22,
          textTransform: 'none',
        }}>
        Rp89000
      </Text>
      <Text style={{fontSize: 18}}>Rp49000</Text>
      <Text
        style={{
          color: 'blue',
          fontWeight: 'normal',
          fontSize: 22,
          textAlign: 'right',
          marginTop: 10,
          marginRight: 20,
          marginLeft: 10,
          marginBottom: 20,
        }}>
        Nama Saya
      </Text>
      <Text
        style={{
          marginHorizontal: 10,
          marginVertical: 10,
          letterSpacing: 1,
          lineHeight: 40,
        }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        sapiente maxime vel atque esse quisquam, quidem tenetur soluta deleniti
        aspernatur provident ea expedita aliquam, quod consequatur? In nisi
        ullam neque.
      </Text>
    </View>
  );
};

export default App;
