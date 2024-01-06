import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SecondPage = ({ navigation }) => {
    const PressMail = (provider) => {
        navigation.navigate('LoginScreen', { provider }); // Redirect to the desired page
    };

    return (
        <View style={styles.container}>
            <View style={styles.line} />
            <TouchableOpacity style={styles.googlebutton}>
                <View style={styles.container1}>
                    <Ionicons name="logo-google" size={24} color="white" style={styles.icon} />
                    <Text style={styles.googletext}>Continue with Google</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.facebookbutton}>
                <Text style={styles.facebooktext}>Continue with Facebook</Text>
                <Ionicons name="logo-facebook" size={24} color="white" style={styles.icon1} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.mailbutton} onPress={PressMail}>
                <Text style={styles.mailtext}>Continue with Mail</Text>
                <Ionicons name="mail" size={24} color="white" style={styles.icon2} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    icon: {
        marginTop: 0,
        position: 'absolute',
        left: 10,
    },
    icon1: {
        marginTop: 10,
        marginLeft: 10,
        position: 'absolute',
        left: 10,
    },
    icon2: {
        marginTop: 10,
        marginLeft: 10,
        position: 'absolute',
        left: 10,
    },
    container1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        marginTop: 10,
        width: 350, // Spécifiez la largeur souhaitée
        height: 350, // Spécifiez la hauteur souhaitée
    },
    texts: {
        marginTop: -90,
        fontSize: 15,
        textAlign: 'center',
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
        marginTop: 5,
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
    facebooktext: {
        marginTop: 5,
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
    mailtext: {
        marginTop: 5,
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
    googlebutton: {
        marginTop: 20,
        backgroundColor: 'black',
        borderRadius: 20,
        padding: 10,
        width: 300,
        height: 50,
    },
    facebookbutton: {
        marginTop: 20,
        backgroundColor: 'black',
        borderRadius: 20,
        padding: 10,
        width: 300,
        height: 50,
    },
    mailbutton: {
        marginTop: 20,
        backgroundColor: 'black',
        borderRadius: 20,
        padding: 10,
        width: 300,
        height: 50,
    },
});

export default SecondPage;
