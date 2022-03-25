import React, { useState } from 'react';
import { StyleSheet, View, Button, Image } from 'react-native';

import TextComponent from './components/TextComponent';

export default function App() {
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  console.log("Rendering");

  const btnClickHandler = () => {
    let state=isBtnClicked ^ 1;
    if(state){
      setIsBtnClicked(true);
    }else{
      setIsBtnClicked(false);
    }
    // console.log("test", isBtnClicked);
  };

  return (
    <View style={styles.screen}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://images.oyoroomscdn.com/uploads/hotel_image/878/medium/d552811989ff7d77.jpg',
        }}
      />
      <Button title="Show Message" onPress={() => btnClickHandler()} />
      {isBtnClicked && <TextComponent/>}

    </View>
  );
}


const styles = StyleSheet.create({
  screen: {
    padding: 50,
    flex: 1
  },
  image: {
    width: '100%',
    height: '50%'
  }
});
