import React, {useEffect, useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  SafeAreaView,
} from 'react-native';
import PromiseComponent from './PromiseComponent';
import dummyPromises from '../screens/data/dummyPromises.json';
import {DimensionsContext} from '../Context/DimensionsProvider';

const UpcomingPromises = () => {
  const dimensions = useContext(DimensionsContext);
  console.log(dimensions);
  useEffect(() => {
    //Get Promises
  });
  return (
    <SafeAreaView>
      <Text style={{fontSize: 23, margin: 10}}>Upcoming Promises</Text>
      <View style={styles.flatList}>
        <FlatList
          horizontal
          data={dummyPromises}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <PromiseComponent promiseProp={item} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flatList: {
    height: 100,
  },
});

export default UpcomingPromises;
