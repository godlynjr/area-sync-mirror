import React, { useState, useEffect } from 'react';
import { View, Switch, SafeAreaView, Text, ScrollView, Linking, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import user from '../User'

const Spotify = ({ navigation }) => {
  const iconSize = 30; // Taille de l'icône en pixels
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  }
  const toggleSwitch1 = () => {
    setIsEnabled1(previousState => !previousState);
  }
  const toggleSwitch2 = () => {
    setIsEnabled2(previousState => !previousState);
  }

  const handleLogin = async () => {
    try {
      const login = await user.loginSpotify();
      console.log('login', login);
      Linking.openURL(login);
    } catch (error) {
      console.error('Erreur lors du démarrage du service', error);
    }
  };

  const handleSpotifyFirstArea = async () => {
    try {
      const login = await user.spotifyFirstArea();
      console.log('song added');
      console.log('login', login);
    } catch (error) {
      console.error('Erreur lors du démarrage du service', error);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Ionicons style={{ position: 'absolute', top: 10, left: 10 }} name="arrow-back" size={30} color="#fff" onPress={() => navigation.goBack()} />
        <Image
          source={require('../Assets/spotify1.jpeg')}
          style={styles.Image}
        />
        <View style={styles.textBox}>
          <Text style={styles.text1}>
            Spotify
          </Text>
          <Text style={styles.text2}>
            A music streaming service that allows users to access a vast library of songs, create personalized playlists, and discover music based on their preferences.          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.bouton} onPress={handleLogin}>
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
      <ScrollView>
        <View style={styles.servicenamebox}>

          {/* <TouchableOpacity> */}
          <View style={styles.serv1} >
            <Image
              source={require('../Assets/dateservice.png')}
              style={styles.image}
            />
            <Text style={styles.Test1}>
              Suppression de chanson
            </Text>
            <Text style={styles.Test1}>
              Lorsque vous supprimez une chanson de votre playlist Spotify, une note est créée dans Notion pour suivre les chansons que vous avez supprimées
            </Text>
            <View style={styles.containerb}>
              <Switch
                trackColor={{ false: '#767577', true: 'white' }}
                thumbColor={isEnabled ? 'gray' : '#f4f3f4'}
                ios_backgroundColor="black"
                onValueChange={(value) => {
                  toggleSwitch(value);
                  if (value) {
                    handleSpotifyFirstArea();
                  }
                }}
                value={isEnabled}
                style={styles.toggleButton} // Ajout de la propriété de style
              />
            </View>
          </View>
          {/* </TouchableOpacity> */}

          {/* <TouchableOpacity> */}
          <View style={styles.serv2} >
            <Image
              source={require('../Assets/dateservice.png')}
              style={styles.image}
            />
            <Text style={styles.Test1}>
              Nouvel événement musical
            </Text>
            <Text style={styles.Test1}>
              Lorsqu'un nouvel événement est ajouté à votre Google Calendar avec un thème musical spécifique, une nouvelle playlist est créée dans Spotify avec des chansons correspondant à ce thème
            </Text>
            <View style={styles.containerb}>
              <Switch
                trackColor={{ false: '#767577', true: 'white' }}
                thumbColor={isEnabled1 ? 'gray' : '#f4f3f4'}
                ios_backgroundColor="black"
                onValueChange={toggleSwitch1}
                value={isEnabled1}
                style={styles.toggleButton} // Ajout de la propriété de style
              />
            </View>
          </View>
          {/* </TouchableOpacity> */}

          {/* <TouchableOpacity> */}
          <View style={styles.serv3} >
            <Image
              source={require('../Assets/dateservice.png')}
              style={styles.image}
            />
            <Text style={styles.Test1}>
              Chanson jouée 10 fois
            </Text>
            <Text style={styles.Test1}>
              Lorsqu'une chanson est jouée plus de 10 fois sur Spotify, une nouvelle entrée est créée dans Tally pour suivre les chansons les plus écoutées
            </Text>
          </View>
          <View style={styles.containerb}>
            <Switch
              trackColor={{ false: '#767577', true: 'white' }}
              thumbColor={isEnabled2 ? 'gray' : '#f4f3f4'}
              ios_backgroundColor="black"
              onValueChange={toggleSwitch2}
              value={isEnabled2}
              style={styles.toggleButton} // Ajout de la propriété de style
            />
          </View>
          {/* </TouchableOpacity> */}

        </View>
      </ScrollView>
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
  containerb: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleButton: {
    transform: [{ scaleX: 1.0 }, { scaleY: 1.0 }] // Appliquer une mise à l'échelle
  },
  Test1: {
    fontSize: 12,
    marginTop: 20,
    fontWeight: 'bold',
    paddingHorizontal: 22,
  },
  image: {
    // paddingVertical: 10,
    marginTop: 20,
    marginLeft: 20,
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  servicenamebox: {
    marginTop: 30,
    paddingHorizontal: 20,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  serv1: {
    backgroundColor: 'red',
    borderRadius: 15,
    width: 370,
    height: 200,
    // paddingHorizontal: 150,
    // paddingVertical: 90,
  },
  serv2: {
    borderRadius: 15,
    width: 370,
    height: 200,
    backgroundColor: 'green',
    // paddingHorizontal: 150,
    // paddingVertical: 90,
  },
  serv3: {
    borderRadius: 15,
    width: 370,
    height: 200,
    backgroundColor: 'blue',
    // paddingHorizontal: 150,
    // paddingVertical: 90,
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

export default Spotify;
