import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { widthPercentageToDP, heightPercentageToDP, listenOrientationChange, moderateScale } from 'react-native-responsive-screen';

import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
const guidelineWidth = 375; // Width of the device on which the design is based
const scale = size => (width / guidelineWidth) * size;
const { width, height } = Dimensions.get('window');

const HomePage = () => {
  const navigation = useNavigation();
  const iconSize = 30;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.headerLabel} onPress={() => navigation.navigate('TestScreen')}>
          Let’s Start
        </Text>
        <TouchableOpacity style={styles.box}>
          <Ionicons name="notifications" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {/* <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
      Press me
    </Button> */}
      <View style={styles.bigBox}>
        <View style={styles.welcomeBox}>
          <View style={styles.textsBox}>
            <Text style={styles.textBox1}>
              Welcome
            </Text>
            <Text style={styles.textBox2}>
              Let’s schedule yourself
            </Text>
          </View>
          <Image
            source={require('./Assets/calendar.png')}
            style={styles.imageBox}
          />
        </View >
      </View>
      <View style={styles.void1}>
        <View style={styles.Box1}>
          <Text style={styles.textBox}>
            Welcome
          </Text>
        </View>
        <View style={styles.Box1}>
          <Text style={styles.textBox}>
            Welcome
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  headerBox: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerLabel: {
    fontSize: 20,
    fontWeight: 600,
  },
  welcomeBox: {
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 30,
    gap: 40,
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
  },
  bigBox: {
    padding: 30,
  },
  textBox1: {
    fontSize: 15,
    gap: 15,
    fontWeight: '800'
  },
  textBox2: {
    fontSize: 15,
    gap: 15,
  },
  textBox: {
    fontSize: 15,
    gap: 15,
  },
  textsBox: {
    fontSize: 15,
    gap: 15,
  },
  imageBox: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  void1: {
    paddingHorizontal: 30,
    gap: 30,
  },
  Box1: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 20,
  },
  Box2: {
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
  },
  box: {
    backgroundColor: '#F0F0F0',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginTop: 10,
    marginLeft: 11,
  },
});

export default HomePage;
