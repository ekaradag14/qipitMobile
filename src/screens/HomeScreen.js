import React,{useEffect} from "react";
import { View, StyleSheet, Text, Button, FlatList, SafeAreaView } from 'react-native';
import PromiseComponent from '../components/PromiseComponent'
import dummyData from './data/dummyPromises.json'
import firestore from '@react-native-firebase/firestore';
const HomeScreen = ({ navigation }) => {



   useEffect(() => {
     // Update the document title using the browser API
     console.log('hey')
     firestore().collection('Users').add({  name: 'Ada Lovelace',  age: 30,}).then(() => {  console.log('User added!');});
   });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 48 }}>Home Screen</Text>

      <Text style={{ fontSize: 23, margin: 10 }}>Upcoming Promises</Text>
      <View style={styles.flatList}>
        <FlatList
          horizontal
          data={dummyData}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <PromiseComponent promiseProp={item} />;
          }}
        />
      </View>
      <Button
        title="New Promise"
        onPress={() => navigation.navigate('CreatePromise')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  flatList:{
    height: 100,
  }
});

export default HomeScreen;
