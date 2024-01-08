import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Discord = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Ionicons style={{position: 'absolute', top: 10, left: 10}} name="arrow-back" size={30} color="#fff" onPress={() => navigation.goBack()} />
        <Image
          source={require('../Assets/spotify1.jpeg')}
          style={styles.Image}
        />
        <View style={styles.textBox}>
          <Text style={styles.text1}>
            Spotify
          </Text>
          <Text style={styles.text2}>
          Spotify is a leading music streaming platform that offers a vast library of songs, albums, playlists, and podcasts. With Spotify's mobile app, users can discover new music, create personalized playlists, follow their favorite artists, and enjoy high-quality audio streaming.</Text>
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
