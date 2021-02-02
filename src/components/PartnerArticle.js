import React, {useContext} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
// import DimensionsContext from '../Context/DimensionsProvider'

const PartnerArticle = ({articleProp}) => {
  // const [dimensionsContext] = useContext(DimensionsContext);
  // console.log(dimensionsContext || 'hey')
  return (
    <View style={styles.card}>
      <View style={styles.avatar} />
      <View style={styles.cardText}>
        <View style={styles.portada}></View>
        <View style={styles.titleTotal}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    width: '10%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  avatar: {
    width: 20,
    height: '5%',
    position: 'absolute',
    borderRadius: 50,
    borderWidth: 5,
    backgroundColor: 'red',
    top: 10,
    left: 25,
    zIndex: 1,
  },
  cardText: {
    flex: 1,
    flexDirection: 'row',
    width: 400,
  },
  portada: {
    flex: 1,
    height: 150,
    backgroundColor: 'skyblue',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  titleTotal: {
    flex: 2,
    height: '30%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'black',
  },
});

export default PartnerArticle;

//   <View style={{display: 'flex', height: '30%', flexDirection: 'row'}}>
//     <Text style={{fontSize: 13, margin: 0, flexWrap: 'wrap'}}>
//       {articleProp.Title}
//     </Text>
//     <Text style={{fontSize: 7, flexWrap: 'wrap', flexDirection: 'row'}}>
//       {articleProp.Summary}
//     </Text>
//   </View>;
