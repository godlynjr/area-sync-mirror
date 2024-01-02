
import React, { useState, } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Importer useNavigation
import { widthPercentageToDP, heightPercentageToDP, listenOrientationChange, removeOrientationListener } from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');
const guidelineWidth = 375; // Width of the device on which the design is based
const scale = size => (width / guidelineWidth) * size;

const Profil = () => {
  const navigation = useNavigation(); // Obtenir l'objet navigation

  const user = {
    name: 'Maman Jacqueline',
    age: 25,
    email: 'johndoe@example.com',
    gender: 'female',
  };
  const iconSize = 30;

  const PressEdit = () => {
    navigation.navigate('Edit_profil');
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.profileInfo}>
          <View style={styles.avatarContainer}>
            <FontAwesome
              name={user.gender === 'female' ? 'female' : 'male'}
              size={80}
              color="#333"
            />
          </View>
          <Text style={styles.name}>{user.name}</Text>
        </View>
        <View style={styles.menu}>
          <View style={styles.menuItem1}>
            <TouchableOpacity onPress={PressEdit}>
              <View style={styles.rowContainer}>
                <Text style={styles.menuText1}>Edit profile</Text>
                <Ionicons name="pencil" size={20} color='white' marginLeft={150}/>
              </View>
            </TouchableOpacity>

            <View style={styles.line} />

            <TouchableOpacity>
              <View style={styles.rowContainer}>
                <Text style={styles.menuText2}> Change Password</Text>
                <Ionicons name="key" size={20} color='white' marginLeft={85} />
              </View>
            </TouchableOpacity>

            <View style={styles.line} />

            <TouchableOpacity>
              <View style={styles.rowContainer}>
                <Text style={styles.menuText3}> Informations</Text>
                <Ionicons name="information-circle" size={20} color='white' marginLeft={129}/>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.menuItem2}>

            <TouchableOpacity>
              <View style={styles.rowContainer}>
                <Text style={styles.menuText11}> Notifications</Text>
                <Ionicons name="notifications" size={20} color='white' marginLeft={135} marginTop={20} />
              </View>
            </TouchableOpacity>

            <View style={styles.line} />

            <TouchableOpacity>
              <View style={styles.rowContainer}>
                <Text style={styles.menuText2}> Log out</Text>
                <Ionicons name="log-out" size={20} color='white' marginLeft={172} marginTop={10}/>
              </View>
            </TouchableOpacity>

            <View style={styles.line} />

            <TouchableOpacity>
              <View style={styles.rowContainer}>
                <Text style={styles.menuText3}> Delete Account</Text>
                <Ionicons name="trash" size={20} color='white' marginLeft={108} marginTop={10} />
              </View>
            </TouchableOpacity>

            <View style={styles.line} />

            <TouchableOpacity>
              <View style={styles.rowContainer}>
                <Text style={styles.menuText3}> Help center</Text>
                <Ionicons name="help-circle" size={20} color='white' marginLeft={138} marginTop={10}/>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const responsiveWidth = widthPercentageToDP('50%'); // Get responsive width
const responsiveHeight = heightPercentageToDP('30%'); // Get responsive height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#DFE1E7',
    width: 5000,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -40,
    height: 300,
  },
  avatarContainer: {
    marginTop: 15,
    backgroundColor: '#f2f2f2',
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  menu: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItem1: {
    marginTop: -70,
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#2D2D2D',
    borderRadius: 25,
    width: 300,
    height: 150,
  },
  menuItem2: {
    marginTop: 10,
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#2D2D2D',
    borderRadius: 25,
    width: widthPercentageToDP('80%'),
    height: widthPercentageToDP('55%'),
  },
  line: {
    marginTop: 15,
    width: '100%',
    height: 1,
    backgroundColor: '#DFE1E7',
  },
  menuText1: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'normal',
    color: '#DFE1E7',
  },
  menuText11: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'normal',
    color: '#DFE1E7',
  },
  menuText2: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'normal',
    color: '#DFE1E7',
  },
  menuText3: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'normal',
    color: '#DFE1E7',
  },
});

export default Profil;
