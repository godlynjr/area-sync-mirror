import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (email === 'C' && password === 'P') {
      navigation.navigate('OtherPage');
      setEmail('');
      setPassword('');
      setErrorMessage('');
    } else {
      Alert.alert('Erreur de connexion', 'L\'e-mail ou le mot de passe est incorrect', [{ text: 'OK' }]);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./Assets/area_logo.jpeg')}
        style={styles.image}
      />
      <Text style={styles.Text}>
        Ready to Dive Back In?
      </Text>
      <Text style={styles.Text1}>
        Log in to get all features
      </Text>
      <Text style={styles.mail}>
        Email      </Text>
      <TextInput
        style={styles.input1}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.password}>
        Password
      </Text>
      <TextInput
        style={styles.input2}
        placeholder="Enter Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.forgot}>
        Forgot password ?
      </Text>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
      <View style={styles.container1}>
        <Text style={styles.lastext}>Don't have an account?</Text>
        <Text style={styles.last}>Sign Up</Text>
      </View>
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
  container1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: -100,
    width: 350, // Spécifiez la largeur souhaitée
    height: 350, // Spécifiez la hauteur souhaitée
  },
  Text: {
    marginTop: -110,
    fontWeight: 'bold',
    fontSize: 20,
  },
  lastext: {
    marginTop: 20,
    fontWeight: 'normal',
    fontSize: 12,
    marginRight: 10,
  },
  last: {
    marginTop: 20,
    fontWeight: 'normal',
    fontSize: 12,
    color: 'red',
  },
  Text1: {
    color: 'gray',
    marginTop: 5,
  },
  mail: {
    marginTop: 50,
    fontWeight: 'normal',
    fontSize: 15,
    marginLeft: -250,
  },
  forgot: {
    color: 'gray',
    fontSize: 12,
    marginRight: -210,
  },
  password: {
    marginTop: 30,
    fontWeight: 'normal',
    fontSize: 15,
    marginLeft: -250,
  },
  input1: {
    marginTop: 5,
    width: 320,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  input2: {
    marginTop: 10,
    width: 320,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  loginButton: {
    width: 250,
    height: 40,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 30
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  errorMessage: {
    color: 'lightgray',
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;