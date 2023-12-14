import React, { useState, } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const FirstPage = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('SecondPage');
  };
  return (
      <View style={styles.container}>
        <Image
          source={require('./Assets/area_logo.jpeg')}
          style={styles.image}
        />
        <Text style={styles.texts}>
          The NAS that does it all. Connect, automate, and sync your apps and data with ease.
        </Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 130,
  },
  image: {
    marginTop: 10,
    width: 350,
    height: 350,
  },
  texts: {
    marginTop: -90,
    fontSize: 15,
    textAlign: 'center',
  },
  button: {
    marginTop: 60,
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 10,
    width: 300,
    height: 50,
  },
  buttonText: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 90,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FirstPage;