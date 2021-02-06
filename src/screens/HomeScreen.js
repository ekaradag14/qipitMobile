import React, {useEffect, useContext} from 'react';
import {View, StyleSheet, Text, Button, SafeAreaView} from 'react-native';
import UpcomingPromises from '../components/UpcomingPromises';
import Wallet from '../components/Wallet';
import PartnerNews from '../components/PartnerNews';
import {UserContext} from '../Context/UserContext'

const HomeScreen = ({navigation}) => {
    const user = useContext(UserContext);
  useEffect(() => {
    // console.log(value)
    // const getDimensions = async () => {
    //   const window = Dimensions.get('window');
    //   setDimensionsContext(window)
    // }
    // getDimensions();
console.log(user)
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 48}}>Home Screen</Text>
      <UpcomingPromises />
      <Button
        title="New Promise"
        onPress={() => navigation.navigate('CreatePromise')}
      />
      <View style={styles.hr} />
      <Wallet />
      <View style={styles.hr} />
      <PartnerNews />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    margin: '5%',
  },
});

export default HomeScreen;
