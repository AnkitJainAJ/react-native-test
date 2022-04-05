import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, ScrollView, Image } from 'react-native';

const data = [
  {
    title: 'Central London',
    imgUrl: 'https://picsum.photos/id/11/200/300',
  },
  {
    title: 'New Castle',
    imgUrl: 'https://picsum.photos/id/10/200/300',
  },
  {
    title: 'Brighton',
    imgUrl: 'https://picsum.photos/id/12/200/300',
  },
  {
    title: 'North Ormesby',
    imgUrl: 'https://picsum.photos/id/11/200/300',
  },
  {
    title: 'Great Yarmouth',
    imgUrl: 'https://picsum.photos/id/10/200/300',
  },
  {
    title: 'Winterville',
    imgUrl: 'https://picsum.photos/id/12/200/300',
  },
];

const CardCarousel = (props) => {

  const renderItem = (item) => {
    return (
      <View>
        <View style={styles.cardContainer}>
          <Image
            source={{ uri: item.imgUrl }}
            style={styles.image}
          />
        </View>
        <View style={styles.cardTitleClass}>{item.title}</View>
      </View>
    );
  };

  return (
    <View style={styles.cardWrapper}>
      <View style={styles.cardOuter}>
        <Text style={styles.textClass}>Places to explore in UK</Text>
        <FlatList
          horizontal
          data={data}
          renderItem={({ item }) => renderItem(item)}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    overflow: 'hidden',
    paddingTop: '20px'
  },
  image: {
    height: '100%',
    width: '100%',
    paddingTop: '20px',
    borderRadius: '8px'
  },
  cardOuter: {
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  cardContainer: {
    width: 140,
    height: 250,
    borderWidth: 0.5,
    borderColor: 'grey',
    overflow: 'scroll',
    borderRadius: '8px',
    marginLeft: '16px',
    marginTop: '16px'
  },
  textClass: {
    fontWeight: 700,
    paddingLeft: '16px',
    fontSize: '18px'
  },
  cardTitleClass: {
    textAlign: 'center',
    marginLeft: '16px',
    marginTop: '8px'
  }
});

export default CardCarousel;
