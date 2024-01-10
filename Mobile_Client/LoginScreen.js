import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet, Image } from 'react-native';
import User from "./User"
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [isEnteringEmail, setIsEnteringEmail] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const hangleConnexion = async () => {
    if (isEnteringEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(email)) {
        const isValidEmail = await User.checkMail(email);
        try {
          if (isValidEmail === 200) {
            setIsEnteringEmail(false);
          } else if (isValidEmail === 201) {
            setIsRegistering(true);
            setIsEnteringEmail(false);
          }
        } catch (error) {
          console.error('Erreur de connexion :', error);
        }
      } else {
        Alert.alert('Invalid email format');
      }
    } else if (password.trim() === '') {
      Alert.alert('Empty Password', 'Please enter your password.');
    } else {
      const loginResponse = await User.login(email, password);
      try {
        if (loginResponse === 200) {
          navigation.navigate('AppContentScreen');
        }
      } catch (error) {
        console.error('Erreur de connexion :', error);
      }
    }
  };

  const handleRegister = async () => {
    const loginResponse = await User.login(email, password);
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
      {isEnteringEmail ? (
        <View>
          <Text style={styles.text}>
            What's your email?
          </Text>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
          />
          <TouchableOpacity style={styles.button} onPress={hangleConnexion}>
            <Text style={styles.buttonText}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        isRegistering ? (
          <View>
            <Text style={styles.text}>Create your password</Text>
            <View>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Password"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                style={styles.eyeButton}
                onPress={togglePasswordVisibility}
              >
                <Ionicons
                  name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={handleRegister}
            >
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            {errorMessage ? (
              <Text style={styles.errorMessage}>{errorMessage}</Text>
            ) : null}
          </View>
        ) : (
          <View>
            <Text style={styles.text}>Enter your password</Text>
            <View>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Password"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                style={styles.eyeButton}
                onPress={togglePasswordVisibility}
              >
                <Ionicons
                  name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={hangleConnexion}>
              <Text style={styles.buttonText}>
                Sign In
              </Text>
            </TouchableOpacity>
            {errorMessage ? (
              <Text style={styles.errorMessage}>{errorMessage}</Text>
            ) : null}
          </View>
        )
      )}
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
    marginTop: -32,
    marginLeft: 320,
  },
  image: {
    width: 350,
    height: 350,
    marginTop: -200,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: -70,
    textAlign: 'center',
  },
  label: {
    fontWeight: 'normal',
    fontSize: 15,
    marginBottom: 5,
    marginTop: 30,
  },
  input: {
    width: 350,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
  },
  button: {
    width: 250,
    backgroundColor: 'black',
    marginLeft: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default LoginScreen;
