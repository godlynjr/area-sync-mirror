import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  PaperProvider,
} from 'react-native-paper';
import AppContentScreen from './AppContentScreen';
import OnboardingPage from './OnboardingPage'
import ConnexionPage from './ConnexionPage'
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'
import Github from './Service/Github';
import Spotify from './Service/Spotify';
import Discord from './Service/Discord';
import Tally from './Service/Tally';
import Notion from './Service/Notion';
import Google from './Service/Google';
import Calendar from './Service/Calendar';
import Profil from './Profil'
import Edit_profil from './Edit_profil'
import TestScreen from './TestScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginPage" screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="OnboardingPage" component={OnboardingPage} />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="ConnexionPage" component={ConnexionPage} />
        </Stack.Group>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} /> */}
          <Stack.Screen name="AppContentScreen" component={AppContentScreen} />
          <Stack.Screen name="TestScreen" component={TestScreen} />
          <Stack.Screen name="Service/Github" component={Github} />
          <Stack.Screen name="Service/Google" component={Google} />
          <Stack.Screen name="Service/Calendar" component={Calendar} />
          <Stack.Screen name="Service/Notion" component={Notion} />
          <Stack.Screen name="Service/Tally" component={Tally} />
          <Stack.Screen name="Service/Spotify" component={Spotify} />
          <Stack.Screen name="Service/Discord" component={Discord} />
          <Stack.Screen name="Profil" component={Profil} />
          <Stack.Screen name="Edit_profil" component={Edit_profil} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
};

export default App;
