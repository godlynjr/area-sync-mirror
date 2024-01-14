import React, { useState, useEffect } from 'react';
import { View, Switch, SafeAreaView, ScrollView, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP, heightPercentageToDP, listenOrientationChange, moderateScale } from 'react-native-responsive-screen';
const { width, height } = Dimensions.get('window');
const guidelineWidth = 375; // Width of the device on which the design is based
import { Ionicons } from '@expo/vector-icons';
const scale_y = size => (height / guidelineWidth) * size;

const Google = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);

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
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Ionicons style={{position: 'absolute', top: 10, left: 10}} name="arrow-back" size={30} color="#fff" onPress={() => navigation.goBack()} />
        <Image
          source={require('../Assets/google.png')}
          style={styles.Image}
        />
        <View style={styles.textBox}>
          <Text style={styles.text1}>
            Google
          </Text>
          <Text style={styles.text2}>
            The NAS that does it all. Connect, automate, and sync your apps and data with ease.
          </Text>
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
  bottomContainer: {
    marginTop: 20,
    gap: 20,
    flexDirection: 'row',
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
  textBox: {
    gap: 15,
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
  backButton: {
    position: 'absolute',
    top: 30,
    left: 20,
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

export default Google;
