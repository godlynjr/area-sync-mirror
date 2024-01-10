import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet, Image } from 'react-native';
import User from "./User"
import { Ionicons } from '@expo/vector-icons';

const RegisterScreen = ({ navigation }) => {
  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async (password) => {
    const mail =  navigation.getParams('mail');
    const loginResponse = await User.login(mail, pass);
      try {
        if (loginResponse === 200) {
          navigation.navigate('AppContentScreen');
        }
      } catch (error) {
        console.error('Erreur de connexion register', error);
      }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./Assets/area_logo.jpeg')}
        style={styles.image}
      />
      <Text style={styles.text}>
        Create your password
      </Text>
      <View>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.eyeButton} onPress={togglePasswordVisibility}>
          <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={24} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={ () => {handleRegister(password)}}>
        <Text style={styles.buttonText}>
          Register
        </Text>
      </TouchableOpacity>
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyeButton: {
    position: 'absolute',
    right: 0,
    padding: 10,
    marginTop: 20,
  },
  image: {
    width: 350,
    height: 350,
    marginTop: -200,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: -90,
    marginBottom: 20,
  },
  label: {
    fontWeight: 'normal',
    fontSize: 15,
    marginBottom: 5,
  },
  input: {
    width: 320,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  button: {
    width: 250,
    height: 40,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RegisterScreen;
