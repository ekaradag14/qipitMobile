import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const PartnerArticle = ({articleProp}) => {
  return (
    <View style={styles.container}>
      <View style={{display: 'flex'}}>
        <Text>hiısudhfıus</Text>
      </View>

      <View style={{display: 'flex', height: '30%', flexDirection: 'row'}}>
        <Text style={{fontSize: 13, margin: 0, flexWrap: 'wrap'}}>
          {articleProp.Title}
        </Text>
        <Text style={{fontSize: 7, flexWrap: 'wrap', flexDirection: 'row'}}>
          {articleProp.Summary}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  borderRadius: 10,
  width: '10%',
  display: 'flex',
  flexDirection: 'row',
  borderRadius: 10,
  position: 'relative'
  },
});

export default PartnerArticle;
