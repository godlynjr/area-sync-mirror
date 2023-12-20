import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppContentScreen from './AppContentScreen';
import OnboardingPage from './OnboardingPage'
import ConnexionPage from './ConnexionPage'
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'
import Profil from './Profil'
import Edit_profil from './Edit_profil'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnboardingPage" component={OnboardingPage} />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="ConnexionPage" component={ConnexionPage} />
        </Stack.Group>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="AppContentScreen" component={AppContentScreen} />
        <Stack.Screen name="Profil" component={Profil} />
        <Stack.Screen name="Edit_profil" component={Edit_profil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
