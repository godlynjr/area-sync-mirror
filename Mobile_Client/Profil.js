
import React, { useState, } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, SafeAreaViewBase } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Importer useNavigation
import { widthPercentageToDP, heightPercentageToDP, listenOrientationChange, removeOrientationListener } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');
const guidelineWidth = 375; // Width of the device on which the design is based
const scale = size => (width / guidelineWidth) * size;

const Profil = () => {
  const navigation = useNavigation(); // Obtenir l'objet navigation
  const [isEditing, setIsEditing] = useState(true);

  const user = {
    name: 'Maman Jacqueline',
    age: 25,
    email: 'johndoe@example.com',
    gender: 'female',
  };
  const iconSize = 30;
  const PressEdit = () => {
    navigation.navigate('Edit_profil');
    setIsEditing(true)
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
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
      </View>

      <View style={styles.menu}>
        <View style={styles.menuItem1}>
          <TouchableOpacity onPress={PressEdit}>
            <View style={styles.rowContainer}>
              <Text style={styles.menuText}>Edit profile</Text>
              <Ionicons name="pencil" size={20} color='white' />
            </View>
          </TouchableOpacity>

          <View style={styles.line} />

          <TouchableOpacity>
            <View style={styles.rowContainer}>
              <Text style={styles.menuText}> Change Password</Text>
              <Ionicons name="key" size={20} color='white' />
            </View>
          </TouchableOpacity>

          <View style={styles.line} />

          <TouchableOpacity>
            <View style={styles.rowContainer}>
              <Text style={styles.menuText}> Informations</Text>
              <Ionicons name="information-circle" size={20} color='white' />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.menuItem2}>

          <TouchableOpacity>
            <View style={styles.rowContainer}>
              <Text style={styles.menuText11}> Notifications</Text>
              <Ionicons name="notifications" size={20} color='white' marginTop={20} />
            </View>
          </TouchableOpacity>

          <View style={styles.line} />

          <TouchableOpacity>
            <View style={styles.rowContainer}>
              <Text style={styles.menuText}> Log out</Text>
              <Ionicons name="log-out" size={20} color='white' marginTop={10} />
            </View>
          </TouchableOpacity>

          <View style={styles.line} />

          <TouchableOpacity>
            <View style={styles.rowContainer}>
              <Text style={styles.menuText}> Delete Account</Text>
              <Ionicons name="trash" size={20} color='white' marginTop={10} />
            </View>
          </TouchableOpacity>

          <View style={styles.line} />

          <TouchableOpacity>
            <View style={styles.rowContainer}>
              <Text style={styles.menuText}> Help center</Text>
              <Ionicons name="help-circle" size={20} color='white' marginTop={10} />
            </View>
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
    paddingVertical: 80,
    paddingHorizontal: 20
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarContainer: {
    backgroundColor: '#f2f2f2',
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: 'white',
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  menu: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItem1: {
    marginTop: -30,
    backgroundColor: '#2D2D2D',
    borderRadius: 25,
    width: 300,
    height: 150,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  menuItem2: {
    marginTop: 30,
    marginBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: '#2D2D2D',
    borderRadius: 25,
    width: 350,
    height: 200,
  },
  line: {
    marginTop: 15,
    width: '100%',
    height: 1,
    backgroundColor: '#DFE1E7',
  },
  menuText: {
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

});

export default Profil;
