import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextComponent = () => {

  return (
      <View style={styles.inputContainer}>
        <Text style={styles.text}> Hello, I am a sweet & simple Text</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {

    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid blue',
    padding: '8px',
    "margin-top": '4px'
  },
  text: {
    color: 'green'
  }
});

export default TextComponent;
