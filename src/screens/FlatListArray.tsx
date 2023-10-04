import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';

const App = () => {
  const [dataArray, setDataArray] = useState([1, 2, 3, 4, 5]);
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={dataArray}
        renderItem={({item}) => (
          <View style={{backgroundColor: 'blue', marginTop: 10}}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default App;
