import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  SafeAreaView,
} from 'react-native';
import PartnerArticle from './PartnerArticle';
import dummyArticles from '../screens/data/dummyArticles.json';

const PartnerNews = () => {
  useEffect(() => {
    //Get Articles
  });
  return (
    <SafeAreaView>
      <Text style={{fontSize: 23, margin: 10}}>
        See How Your Losses Gained To Other People
      </Text>
      <View style={styles.flatList}>
        <FlatList
          horizontal
          data={dummyArticles}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <PartnerArticle articleProp={item} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flatList: {
    height: '100%',
  },
});

export default PartnerNews;
