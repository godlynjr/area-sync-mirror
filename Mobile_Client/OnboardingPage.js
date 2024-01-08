import React, { useState, } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP, listenOrientationChange, removeOrientationListener } from 'react-native-responsive-screen';

const OnboardingPage = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('ConnexionPage');
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

const responsiveWidth = widthPercentageToDP('50%'); // Get responsive width
const responsiveHeight = heightPercentageToDP('30%'); // Get responsive height

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginTop: 50,
    width: 400,
    height:400,
  },
  texts: {
    marginTop: -80,
    fontSize: 15,
    textAlign: 'center',
  },
  button: {
    marginTop: 40,
    backgroundColor: 'black',
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 100,
  },
  buttonText: {
    justifyContent: 'center',
    textAlign: 'center',    
    color: 'white',
    fontWeight: 'bold',
  },
});

export default OnboardingPage;