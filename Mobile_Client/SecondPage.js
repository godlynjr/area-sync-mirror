import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const SecondPage = ({ navigation }) => {
    const PressGoogle = () => {
        navigation.navigate('LoginScreen');
    };
    const PressFacebook = () => {
        navigation.navigate('LoginScreen');
    };
    const PressMail = () => {
        navigation.navigate('LoginScreen');
    };
    return (
        <View style={styles.container}>
            <Image
                source={require('./Assets/area_logo.jpeg')}
                style={styles.image}
            />
            <Text style={styles.texts}>
                The NAS that does it all. Connect, automate, and sync your apps and data with ease.
            </Text>

            <View style={styles.line} />

            <TouchableOpacity style={styles.googlebutton} onPress={PressGoogle}>
                <Text style={styles.googletext}>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.facebookbutton} onPress={PressFacebook}>
                <Text style={styles.facebooktext}>Continue with Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.mailbutton} onPress={PressMail}>
                <Text style={styles.mailtext}>Continue with Mail</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
