import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StatusBar, TouchableOpacity} from 'react-native';

const App = () => {
  const [dataArray, setDataArray] = useState([1, 2, 3, 4, 5]);
  const [keranjangBelanja, setKeranjangBelanja] = useState([
    {produk: 'smartphone keren', harga: 1200000, qty: 22},
    {produk: 'smartphone keren 2', harga: 1200000, qty: 22},
    {produk: 'smartphone keren 3', harga: 1200000, qty: 22},
    {produk: 'smartphone keren 4', harga: 1200000, qty: 22},
    {produk: 'smartphone keren 5', harga: 1200000, qty: 22},
  ]);
  return (
    <View style={{flex: 1, backgroundColor: '#272727'}}>
      <StatusBar barStyle="light-content" backgroundColor="#272727" />
      {/* <FlatList
        data={dataArray}
        renderItem={({item}) => (
          <View style={{backgroundColor: 'blue', marginTop: 10}}>
            <Text>{item}</Text>
          </View>
        )}
      /> */}
      <FlatList
        data={keranjangBelanja}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{
              backgroundColor: '#303030',
              marginTop: 10,
              marginHorizontal: 20,
              padding: 10,
              borderRadius: 8,
              elevation: 3,
            }}
            onPress={() => console.log(item)}>
            <Text style={{color: '#FFFFFF'}}>{item.produk}</Text>
            <Text style={{color: '#FFFFFF'}}>Rp {item.harga}</Text>
            <Text style={{color: '#FFFFFF'}}>{item.qty}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default App;
