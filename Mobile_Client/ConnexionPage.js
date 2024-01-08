// web 765291059536-m6hgu83bi3oj5n63167lj72i670e3jaj.apps.googleusercontent.com
// ios 765291059536-cj3pldn7bkb2g6fs8csdnn7njbs4ogtl.apps.googleusercontent.com
// android 765291059536-64vlhi5oo0vhc2nsbcqln27jidknf643.apps.googleusercontent.com

import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from "expo-web-browser";
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();

const SecondPage = ({ navigation }) => {
    const [userInfo, setUserInfo] = React.useState(null);
    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: "765291059536-64vlhi5oo0vhc2nsbcqln27jidknf643.apps.googleusercontent.com",
        iosClientId: "765291059536-cj3pldn7bkb2g6fs8csdnn7njbs4ogtl.apps.googleusercontent.com",
        webClientId: "765291059536-m6hgu83bi3oj5n63167lj72i670e3jaj.apps.googleusercontent.com",
    });

    React.useEffect(() => {
        handleSignInWithGoogle();
    }, [response]);

    const storeUserCredentials = async (user) => {
        try {
            await AsyncStorage.setItem("@user", JSON.stringify(user));
        } catch (error) {
            // Gérer les erreurs de stockage
        }
    };

    async function handleSignInWithGoogle() {
        const user = await AsyncStorage.getItem("@user");
        if (!user) {
            if (response?.type === 'success') {
                const userInfo = await getUserInfo(response.authentication.accessToken);
                await storeUserCredentials(userInfo);
                navigation.navigate('AppContentScreen'); // Rediriger vers la page AppContentScreen
            }
        } else {
            setUserInfo(JSON.parse(user));
        }
    };

    const getUserInfo = async (token) => {
        if (!token) return;
        try {
            const response = await fetch("https://www.googleapis.com/userinfo/v2/me",
                {
                    headers: { Authorisation: `Bearer ${token}` },
                }
            );
            const user = await response.JSON();
            await AsyncStorage.setItem("@user", JSON.stringify(user));
            setUserInfo(user);
        } catch (error) {

        }
    }

    const pressMail = () => {
        navigation.goBack(); // Fermer la modal
        navigation.navigate('LoginScreen', { provider: 'mail' }); // Rediriger vers la page souhaitée avec le fournisseur 'mail'
    };

    return (
        <View style={styles.container}>
            <View style={styles.line} />
            <Text>
                {JSON.stringify(userInfo, null, 2)}
            </Text>
            <TouchableOpacity style={styles.googlebutton} onPress={() => promptAsync()}>
                <View style={styles.container1}>
                    <Ionicons name="logo-google" size={24} color='white' style={styles.icon} />
                    <Text style={styles.googletext}> Continue with google</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.facebookbutton}>
                <View style={styles.container1}>
                    <Ionicons name="logo-facebook" size={24} color="white" style={styles.icon} />
                    <Text style={styles.facebooktext}>Continue with Facebook</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.mailbutton} onPress={pressMail}>
                <View style={styles.container1}>
                    <Ionicons name="mail" size={24} color="white" style={styles.icon} />
                    <Text style={styles.mailtext}>Continue with Mail</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    container1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
    },
    line: {
        marginTop: 40,
        width: 100,
        height: 10,
        borderRadius: 10,
        backgroundColor: 'black',
        borderWidth: 1,
        borderColor: 'black',
    },
    googletext: {
        color: 'white',
        fontSize: 15,
        marginLeft: 30,
    },
    facebooktext: {
        color: 'white',
        fontSize: 15,
        marginLeft: 30,
    },
    mailtext: {
        color: 'white',
        fontSize: 15,
        marginLeft: 30,
    },
    googlebutton: {
        marginTop: 20,
        width: 300,
        backgroundColor: 'black',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    facebookbutton: {
        width: 300,
        marginTop: 20,
        backgroundColor: 'black',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    mailbutton: {
        width: 300,
        marginTop: 20,
        backgroundColor: 'black',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    icon: {
        marginRight: 50,
    }
});

export default SecondPage;
