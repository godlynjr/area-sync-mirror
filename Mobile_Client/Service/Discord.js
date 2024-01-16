import React, { useState } from 'react';
import { View, Switch, SafeAreaView, ScrollView, Linking, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import user from '../User'

const Discord = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);

  const handleLogin = async () => {
    try {
      const login = await user.loginDiscord();
      // console.log('login', login);
      Linking.openURL(login);
    } catch (error) {
      console.error('Erreur lors du démarrage du service', error);
    }
  };

  const handleAreaCalendar = async () => {
    try {
      const login = await user.discord_calendar();
    } catch (error) {
      console.error('Erreur lors du démarrage de l\'AREA calendar de discord', error);
    }
    // navigation.navigate('Service/AreaCalendar');
  };
  const handleAreaAirtable = async () => {
    try {
      const login = await user.discord_airtable();
    } catch (error) {
      console.error('Erreur lors du démarrage de l\'AREA airtable de discord', error);
    }    // navigation.navigate('Service/AreaAirtable');
  };
  const handleAreaTodoist = async () => {
    try {
      console.log('its start');
      const login = await user.discord_todoist();
      console.log('its finish');
    } catch (error) {
      console.error('Erreur lors du démarrage de l\'AREA todoist de discord', error);
    }    // navigation.navigate('Service/AreaTodoist');
  };
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };
  const toggleSwitch1 = () => {
    setIsEnabled1(previousState => !previousState);
  };
  const toggleSwitch2 = () => {
    setIsEnabled2(previousState => !previousState);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Ionicons style={{ position: 'absolute', top: 10, left: 10 }} name="arrow-back" size={30} color="#fff" onPress={() => navigation.goBack()} />
        <Image
          source={require('../Assets/discord.png')}
          style={styles.Image}
        />
        <View style={styles.textBox}>
          <Text style={styles.text1}>
            Discord
          </Text>
          <Text style={styles.text2}>
            A voice and text communication application primarily used by gaming communities to chat, coordinate, and share real-time information.                 </Text>
        </View>
        <View style={styles.bottomContainer}>
          {/* <WebView source={{ uri: login }} style={{ flex: 1 }} onPress={handleLogin} />; */}
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

          {/* <TouchableOpacity > */}
          <View style={styles.serv1} >
            <Image
              source={require('../Assets/dateservice.png')}
              style={styles.image}
            />
            <Text style={styles.Test1}>
              Message épinglé
            </Text>
            <Text style={styles.Test1}>
              Chaque fois qu'un message est épinglé dans le serveur, un évenement est créer dans google calendar            </Text>
            <View style={styles.containerb}>
              <Switch
                trackColor={{ false: '#767577', true: 'white' }}
                thumbColor={isEnabled ? 'gray' : '#f4f3f4'}
                ios_backgroundColor="black"
                onValueChange={(value) => {
                  toggleSwitch(value);
                  if (value) {
                    handleAreaCalendar();
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
              Écoute de playlist
            </Text>
            <Text style={styles.Test1}>
              Lorsque vous commencez à écouter une playlist spécifique sur Spotify, un message est posté dans un canal Discord pour partager la playlist avec les autres            </Text>
            <View style={styles.containerb}>
              <Switch
                trackColor={{ false: '#767577', true: 'white' }}
                thumbColor={isEnabled1 ? 'gray' : '#f4f3f4'}
                ios_backgroundColor="black"
                onValueChange={(value) => {
                  toggleSwitch1(value);
                  if (value) {
                    handleAreaAirtable();
                  }
                }}
                value={isEnabled1}
                style={styles.toggleButton} // Ajout de la propriété de style
              />
            </View>
          </View>
          {/* </TouchableOpacity> */}

          {/* <TouchableOpacity > */}
          <View style={styles.serv3} >
            <Image
              source={require('../Assets/dateservice.png')}
              style={styles.image}
            />
            <Text style={styles.Test1}>
              Nouvelle tâche
            </Text>
            <Text style={styles.Test1}>
              Lorsqu'une nouvelle tâche est ajoutée à une liste de tâches dans Notion, un message est posté dans un canal Discord pour informer les autres de la nouvelle tâche            </Text>
            <View style={styles.containerb}>
              <Switch
                trackColor={{ false: '#767577', true: 'white' }}
                thumbColor={isEnabled2 ? 'gray' : '#f4f3f4'}
                ios_backgroundColor="black"
                onValueChange={(value) => {
                  toggleSwitch2(value);
                  if (value) {
                    handleAreaTodoist();
                  }
                }}
                value={isEnabled2}
                style={styles.toggleButton} // Ajout de la propriété de style
              />
            </View>
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
  servicenamebox: {
    marginTop: 30,
    paddingHorizontal: 20,
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
