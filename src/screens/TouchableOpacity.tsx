import React, {useState, useEffect} from 'react';
import {View, StatusBar, Text, Image, TouchableOpacity} from 'react-native';

import Header from './src/screens/components/Header';

const App = () => {
  function beli() {
    console.log('produk sudah dibeli');
  }

  return (
    <View style={{flex: 1}}>
      <Header
        judul="Aplikasi Mencari Pekerjaan"
        subJudul="Aplikasi Baru Mudah Dipakai"
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          marginTop: 20,
          marginHorizontal: 20,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 15,
          borderRadius: 6,
          elevation: 2,
        }}
        onPress={() => beli()}>
        <Text style={{color: '#FFFFFF', fontSize: 18}}>Beli</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
