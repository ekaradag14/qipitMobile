import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const PromiseComponent = ({promiseProp}) => {

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>{promiseProp.Title}</Text>
        <Text>My ${promiseProp.Amount} is at stake.</Text>
        <Text style={{ color: 'red',textAlign: 'right' }}>until {new Date(promiseProp.ExpirationDate).toLocaleDateString()}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'space-between',
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 2,
        width: 150,
        height: 70,
        marginLeft: 20 
    }
});

export default PromiseComponent;
