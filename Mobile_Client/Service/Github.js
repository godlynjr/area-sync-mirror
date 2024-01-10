import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Discord = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Ionicons style={{position: 'absolute', top: 10, left: 10}} name="arrow-back" size={30} color="#fff" onPress={() => navigation.goBack()} />
        <Image
          source={require('../Assets/github.png')}
          style={styles.Image}
        />
        <View style={styles.textBox}>
          <Text style={styles.text1}>
            Github
          </Text>
          <Text style={styles.text2}>
          GitHub is a collaborative development platform based on Git, a decentralized version control system. It allows developers to work together on projects, manage issue tracking, share source code, and collaborate on Git repositories.</Text>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.bouton}>
            <Text style={styles.Text}>
              Connect
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bouton}>
            <Text style={styles.Text}>
              Visit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#494949',
    paddingVertical: 40,
    paddingHorizontal: 20
  },
  bottomContainer: {
    marginTop: 20,
    gap: 20,
    flexDirection: 'row',
  },
  textBox: {
    gap: 15,
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
  },
  bouton: {
    width: 150,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  text1: {

    color: 'white',
    marginTop: 8,
    fontSize: 20,
    textAlign: 'center',
  },
  text2: {

    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  Image: {
    width: 100,
    height: 100,
    borderRadius: 30,
  },
  Text: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Discord;
