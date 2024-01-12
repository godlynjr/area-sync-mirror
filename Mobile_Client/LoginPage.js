// import React, { useState } from 'react';
// import { View, TextInput, Button } from 'react-native';

// const LoginPage = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Vérification du login ici (par exemple, avec une API)
//     // Si les informations de connexion sont valides, vous pouvez rediriger vers une autre page
//     // En utilisant "navigation.navigate('OtherPage')" par exemple
//     navigation.navigate('OtherPage');
//   };

//   return (
//     <View>
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         placeholder="Mot de passe"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <Button title="Connexion" onPress={handleLogin} />
//     </View>
//   );
// };

// export default LoginPage;