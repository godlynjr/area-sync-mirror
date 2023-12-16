import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const Password = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Vérifier l'e-mail et le mot de passe
    if (password === 'P') {
      // Connexion réussie, rediriger vers la page précédente (OtherPage)
      navigation.navigate('OtherPage');
      // Réinitialiser les valeurs des champs e-mail et mot de passe
      setPassword('');
      setErrorMessage('');
    } else {
      Alert.alert('Erreur de connexion', 'Le mot de passe est incorrect', [{ text: 'OK' }]);
    }
    axios.post('https://example.com/api/login', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        // Traitement de la réponse du serveur
        console.log(response.data);
      })
      .catch((error) => {
        // Gestion des erreurs
        console.error(error);
      });
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
      <Text style={styles.Text}>
        Welcome back! Enter</Text>
      <Text style={styles.Text1}>your password</Text>
      <Text style={styles.password}>
        Password
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input2}
          placeholder="Enter Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.eyeButton} onPress={togglePasswordVisibility}>
          <Icon name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={24} color="black" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Sign In</Text>
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
  image: {
    marginTop: -200,
    width: 350,
    height: 350,
  },
  Text: {
    marginTop: -110,
    fontWeight: 'bold',
    fontSize: 20,
  },
  Text1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -110,
    marginTop: 5,
  },
  password: {
    marginTop: 30,
    fontWeight: 'normal',
    fontSize: 15,
    marginLeft: -250,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  eyeButton: {
    position: 'absolute',
    right: 0,
    padding: 10,
    marginTop: -10,
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

export default Password;