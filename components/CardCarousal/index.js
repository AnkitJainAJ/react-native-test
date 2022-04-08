import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, ScrollView, Image } from 'react-native';
import { styles } from './CardCarousalcss';

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
        {/* <View style={styles.cardTitleClass}>{item.title}</View> */}
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

const flattenStyle = StyleSheet.flatten([
  styles.cardContainer,
  styles.cardWrapper,
  styles.cardOuter,
  styles.textClass
]);

console.log(flattenStyle);

export default CardCarousel;
