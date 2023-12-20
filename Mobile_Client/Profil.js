
import React, { useState, } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import edit from './Edit_profil'
import { useNavigation } from '@react-navigation/native'; // Importer useNavigation
import Edit from './Edit_profil'

const Profil = () => {
  const navigation = useNavigation(); // Obtenir l'objet navigation

  const user = {
    name: 'Maman Jacqueline',
    age: 25,
    email: 'johndoe@example.com',
    gender: 'female',
  };

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
                <Icon name="right-outline" size={24} color='white' marginLeft={150} />
              </View>
            </TouchableOpacity>

            <View style={styles.line} />

            <TouchableOpacity>
              <View style={styles.rowContainer}>
                <Text style={styles.menuText2}> Change Password</Text>
                <Icon name="navigate-next" size={24} color='white' marginLeft={85} />
              </View>
            </TouchableOpacity>

            <View style={styles.line} />

            <TouchableOpacity>
              <View style={styles.rowContainer}>
                <Text style={styles.menuText3}> Informations</Text>
                <Icon name="navigate-next" size={24} color='white' marginLeft={130} />
              </View>

            </TouchableOpacity>
          </View>

          <View style={styles.menuItem2}>

            <TouchableOpacity>
              <View style={styles.rowContainer}>
                <Text style={styles.menuText11}> Notifications</Text>
                <Icon name="navigate-next" size={24} color='white' marginLeft={129} />
              </View>
            </TouchableOpacity>

            <View style={styles.line} />

            <TouchableOpacity>
              <View style={styles.rowContainer}>
                <Text style={styles.menuText2}> Log out</Text>
                <Icon name="navigate-next" size={24} color='white' marginLeft={172} />
              </View>
            </TouchableOpacity>

            <View style={styles.line} />

            <TouchableOpacity>
              <View style={styles.rowContainer}>
                <Text style={styles.menuText3}> Delete Account</Text>
                <Icon name="arrowdown" size={24} color='white' marginLeft={108} />
              </View>
            </TouchableOpacity>

            <View style={styles.line} />

            <TouchableOpacity>
              <View style={styles.rowContainer}>
                <Text style={styles.menuText3}> Help center</Text>
                <Icon name="navigate-next" size={24} color='white' marginLeft={138} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

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
    width: 380,
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
    width: 300,
    height: 220,
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
