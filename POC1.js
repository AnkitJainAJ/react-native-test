import React, { useState } from 'react';
import { StyleSheet, View, Button, Image, FlatList } from 'react-native';
import CardCarousal from './components/CardCarousal';

import { data } from './components/ListingCard/hotelData';
import ListingCard from './components/ListingCard'


export default function App() {

  const renderItem = (item) => {
    return (
      <ListingCard data={item}/>
    );
  };

  return (
    <View>
      <CardCarousal />

      <FlatList
        data={data}
        renderItem={({ item }) => renderItem(item)}
      />
    </View>
  );
}
