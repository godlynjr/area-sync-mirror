import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, Image } from 'react-native';

const Email = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleLogin = () => {
    if (email === 'C') {
      navigation.navigate('Password');
      setEmail('');
      setErrorMessage('');
    } else {
      Alert.alert('Erreur de connexion', "L'e-mail est incorrect", [{ text: 'OK' }]);
    }
    
    const data = {
      email: email,
      password: password
    };
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./Assets/area_logo.jpeg')}
        style={styles.image}
      />
      <Text style={styles.Text}>
        What's your email?
      </Text>
      <Text style={styles.mail}>
        Email      </Text>
      <TextInput
        style={styles.input1}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Continue</Text>
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
  container1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: -200,
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

export default Email;