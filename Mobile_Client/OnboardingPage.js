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
    flex: 1,
    alignItems: 'center',
    marginTop: 130,
  },
  image: {
    top: widthPercentageToDP('-20'),
    width: widthPercentageToDP('80%'),
    height: heightPercentageToDP('50%'),
  },
  texts: {
    top: widthPercentageToDP('-40'),
    marginBottom: heightPercentageToDP('3'),
    fontSize: 15,
    textAlign: 'center',
  },
  button: {
    top: widthPercentageToDP('-20'),
    backgroundColor: 'black',
    borderRadius: 20,
    padding: widthPercentageToDP('1'),
    width: widthPercentageToDP('80'),
    height: heightPercentageToDP('5'),
  },
  buttonText: {
    top: widthPercentageToDP('2'),
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',    
    color: 'white',
    fontWeight: 'bold',
  },
});

export default OnboardingPage;