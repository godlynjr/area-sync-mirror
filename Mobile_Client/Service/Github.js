import React, { useState, useEffect } from 'react';
import { View, Switch, SafeAreaView, ScrollView, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import user from '../User'
import { WebView } from 'react-native-webview';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

  // Endpoint
const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint: `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_REDIRECT_URI}&scope=repo`,
};

const Github = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [accessToken, setAccessToken] = useState(null);

  const iconSize = 30; // Taille de l'icône en pixels
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  }
  const toggleSwitch1 = () => {
    setIsEnabled1(previousState => !previousState);
  }
  const toggleSwitch2 = () => {
    setIsEnabled2(previousState => !previousState);
  }

    const [request, response, promptAsync] = useAuthRequest(
      {
        clientId: 'b2ee2cb6c81a5d28e59c',
        scopes: ['repo'],
        redirectUri: 'https://area-sync-stagging.onrender.com/users/github/callback',
        clientSecret: 'a3eb2a70249b5fc3d628fdefc97bef4a45105f83'
      },
      discovery
    );

    React.useEffect(() => {
      console.log('React: ', response);
      if (response?.type === 'success') {
        const token = response.params.access_token;
        console.log('Access Token:', token);
        setAccessToken(txoken);
      } else if (response?.type === 'error') {
        console.error(response.error);
      } else {
        console.log(response?.type);
      }
    }, [response])
    console.log('reponse: ', response);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Ionicons style={{ position: 'absolute', top: 10, left: 10 }} name="arrow-back" size={30} color="#fff" onPress={() => navigation.goBack()} />
        <Image
          source={require('../Assets/github.png')}
          style={styles.Image}
        />
        <View style={styles.textBox}>
          <Text style={styles.text1}>
            Github
          </Text>
          <Text style={styles.text2}>
            The NAS that does it all. Connect, automate, and sync your apps and data with ease.
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.bouton}>
            <Text style={styles.Text} onPress={async () => {await promptAsync();}}>
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

          <TouchableOpacity>
            <View style={styles.serv1} >
              <Image
                source={require('../Assets/dateservice.png')}
                style={styles.image}
              />
              <Text style={styles.Test1}>
                Start service3
              </Text>
              <Text style={styles.Test1}>
                by AREASYNC
              </Text>
              <View style={styles.containerb}>
                <Switch
                  trackColor={{ false: '#767577', true: 'white' }}
                  thumbColor={isEnabled ? 'gray' : '#f4f3f4'}
                  ios_backgroundColor="black"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  style={styles.toggleButton} // Ajout de la propriété de style
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.serv2} >
              <Image
                source={require('../Assets/dateservice.png')}
                style={styles.image}
              />
              <Text style={styles.Test1}>
                Start service3
              </Text>
              <Text style={styles.Test1}>
                by AREASYNC
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
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.serv3} >
              <Image
                source={require('../Assets/dateservice.png')}
                style={styles.image}
              />
              <Text style={styles.Test1}>
                Start service3
              </Text>
              <Text style={styles.Test1}>
                by AREASYNC
              </Text>
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
            </View>
          </TouchableOpacity>

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
  Test1: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
    paddingHorizontal: 22,
  },
  containerb: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleButton: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] // Appliquer une mise à l'échelle
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

export default Github;
