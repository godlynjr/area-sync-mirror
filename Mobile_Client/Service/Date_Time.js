import React, { useState, useEffect } from 'react';
import { View, Switch, SafeAreaView, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP, heightPercentageToDP, listenOrientationChange, moderateScale } from 'react-native-responsive-screen';
const { width, height } = Dimensions.get('window');
const guidelineWidth = 375; // Width of the device on which the design is based
import { Ionicons } from '@expo/vector-icons';
const scale_y = size => (height / guidelineWidth) * size;
import User from '../User'

const Date_Time = ({ navigation }) => {
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
  // const [prayerMessages, setPrayerMessages] = useState([]);
  const api = 'https://area-sync-stagging.onrender.com';

  const PrayerService = {
    startPrayerService: async () => {
      try {
        // const token = 'votre_token'; // Remplacez par votre token d'authentification
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + undefined,
        };
        const response = await fetch(api + '/users//datetime/sendprayertime', {
          method: 'GET',
          headers: headers,
        });
        if (response.ok) {
          const data = await response.json();
          // console.log(data);
          return data;
        } else {
          console.error('Erreur lors de la requête GET 4587:', response.status);
        }
      } catch (error) {
        console.error('Erreur lors de la requête GET :', error);
      }
    }
  };

  const MotivationService = {
    startMotivationService: async () => {
      try {
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + undefined,
        };
        const response = await fetch(api + '/datetime/sendprayertime', {
          method: 'GET',
          headers: headers,
        });
        if (response.ok) {
          console.log('Service de prière démarré avec succès');
        } else {
          throw new Error('La requête a échoué motivation');
        }
      } catch (error) {
        console.error('Erreur lors du démarrage du service de prière', error);
        throw error;
      }
    }
  };

  const WeatherService = {
    startWeatherService: async () => {
      try {
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + undefined,
        };
        const response = await fetch(api + '/users/datetime/sendweather', {
          method: 'GET',
          headers: headers,
        });
        if (response.ok) {
          console.log('Service de prière démarré avec succès');
        } else {
          throw new Error('La requête a échoué weather');
        }
      } catch (error) {
        console.error('Erreur lors du démarrage du service de prière', error);
        throw error;
      }
    }
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await user.getPrayerMessages();
  //       setPrayerMessages(data);
  //       console.log('data is now', data);
  //     } catch (error) {
  //       console.error('Erreur lors de la récupération des données :', error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  const handleStartPrayerService = async () => {
    try {
      await PrayerService.startPrayerService();
    } catch (error) {
      console.error('Erreur lors du démarrage du service de prière', error);
    }
  };

  const handleStartMotivationService = async () => {
    try {
      await MotivationService.startMotivationService();
    } catch (error) {
      console.error('Erreur lors du démarrage du service de motivation', error);
    }
  };
  
  const handleStartweatherService = async () => {
    try {
      await WeatherService.startWeatherService();
    } catch (error) {
      console.error('Erreur lors du démarrage du service de température', error);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Ionicons style={{ position: 'absolute', top: 10, left: 10 }} name="arrow-back" size={30} color="#fff" onPress={() => navigation.goBack()} />
        <Image
          source={require('../Assets/date.png')}
          style={styles.Image}
        />
        <View style={styles.textBox}>
          <Text style={styles.text1}>
            Date and Time
          </Text>
          <Text style={styles.text2}>
            The NAS that does it all. Connect, automate, and sync your apps and data with ease.
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.bouton} onPress={handleStartMotivationService}>
            <Text style={styles.Text}>
              Create
            </Text>
          </TouchableOpacity>
          {/* <View>
            {prayerMessages.map((message, index) => (
              <Text key={index}>{message}</Text>
            ))}
          </View> */}
          {/* <View style={styles.containerb}>
            <Switch
              trackColor={{ false: '#767577', true: 'white' }}
              thumbColor={isEnabled ? 'gray' : '#f4f3f4'}
              ios_backgroundColor="black"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={styles.toggleButton} // Ajout de la propriété de style
            />
          </View> */}
          {/* <TouchableOpacity style={styles.bouton}>
            <Text style={styles.Text}>
              Visit
            </Text>
          </TouchableOpacity> */}
        </View>
      </View>
      <ScrollView>
        <View style={styles.servicenamebox}>

          <TouchableOpacity onPress={handleStartPrayerService}>
            <View style={styles.serv2} >
              <Image
                source={require('../Assets/dateservice.png')}
                style={styles.image}
              />
              <Text style={styles.Test1}>
                Start service2
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

          <TouchableOpacity onPress={handleStartMotivationService}>
            <View style={styles.serv1} >
              <Image
                source={require('../Assets/dateservice.png')}
                style={styles.image}
              />
              <Text style={styles.Test1}>
                Start service1
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

          <TouchableOpacity onPress={handleStartweatherService}>
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
    paddingHorizontal: 38,
  },
  Test1: {
    fontSize: 18,
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
  containerb: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleButton: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] // Appliquer une mise à l'échelle
  },
  bottomContainer: {
    marginTop: 20,
    gap: 50,
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
    width: 120,
    height: 120,
    borderRadius: 30,
  },
  Text: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Date_Time;
