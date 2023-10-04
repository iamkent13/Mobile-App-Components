import React, {useState, useEffect} from 'react';
import {View, StatusBar, Text} from 'react-native';

import Header from './src/screens/components/Header';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Header
        judul="Aplikasi Mencari Pekerjaan"
        subJudul="Aplikasi Baru Mudah Dipakai"
      />
      <Header judul="Aplikasi Ojek" subJudul="Aplikasi Baru Mudah Dipakai" />
    </View>
  );
};

export default App;
