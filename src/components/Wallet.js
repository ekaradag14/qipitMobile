import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';

const Wallet = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 20}}>Wallet</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 2,
    width: '80%',
    height: '20%',
    marginLeft: 20,
  },
});

export default Wallet;
