import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const App = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.Services}>Services</Text>
      {/* ... Other existing components */}
      <DropDownPicker
        items={[
          { label: 'Options', value: 'option1' },
          { label: 'Optionss', value: 'option2' },
          { label: 'Optionsss', value: 'option3' },
        ]}
        defaultValue={selectedValue}
        containerStyle={{ height: 40 }}
        style={{ backgroundColor: '#DFE1E7', borderRadius: 20 }}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
        onChangeItem={(item) => setSelectedValue(item.value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // ... Other styles
  pickerContainer: {
    height: 40,
    width: 200,
  },
  pickerStyle: {
    backgroundColor: '#DFE1E7',
    borderWidth: 1,
    borderColor: '#DFE1E7',
    borderRadius: 20,
  },
  dropDownStyle: {
    backgroundColor: '#fafafa',
  },
  Services: {
    marginTop: 30,
    padding: 40,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: -68,
  },
});

export default App;
// export default Services;


// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AppContentScreen from './AppContentScreen';
// import OnboardingPage from './OnboardingPage'
// import ConnexionPage from './ConnexionPage'
// import LoginScreen from './LoginScreen'
// import RegisterScreen from './RegisterScreen'
// import github from './Service/github';
// import spotify from './Service/spotify';
// import discord from './Service/discord';
// import tally from './Service/tally';
// import notion from './Service/notion';
// import google from './Service/google';
// import calendar from './Service/calendar';
// import Profil from './Profil'
// import Edit_profil from './Edit_profil'

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="LoginPage" screenOptions={{ headerShown: false }}>
//         {/* <Stack.Screen name="OnboardingPage" component={OnboardingPage} />
//         <Stack.Group screenOptions={{ presentation: 'modal' }}>
//           <Stack.Screen name="ConnexionPage" component={ConnexionPage} />
//         </Stack.Group>
//         <Stack.Screen name="LoginScreen" component={LoginScreen} />
//         <Stack.Screen name="RegisterScreen" component={RegisterScreen} /> */}
//         <Stack.Screen name="AppContentScreen" component={AppContentScreen} />
//         <Stack.Screen name="github" component={github} />
//         <Stack.Screen name="google" component={google} />
//         <Stack.Screen name="calendar" component={calendar} />
//         <Stack.Screen name="notion" component={notion} />
//         <Stack.Screen name="tally" component={tally} />
//         <Stack.Screen name="spotify" component={spotify} />
//         <Stack.Screen name="discord" component={discord} />
//         <Stack.Screen name="Profil" component={Profil} />
//         <Stack.Screen name="Edit_profil" component={Edit_profil} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };


// // import React from 'react';
// // import { View, StyleSheet } from 'react-native';
// // import CreateTextPopUp from './CreateTextPopUp';

// // const App = () => {
// //   const handlePress = () => {
// //     console.log('Button pressed!');
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <CreateTextPopUp
// //         clickText="Open Modal"
// //         validate="Validate"
// //         title="Modal Title"
// //         label="Enter Text"
// //         w={100}
// //         h={50}
// //         mycontroller=""
// //         onPressed={handlePress}
// //       />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// // });

// // export default App;
