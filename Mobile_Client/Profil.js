import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profil = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Icon name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <View style={styles.header}>
                    <View style={styles.circle}></View>
                    <Icon name="facebook" size={80} color="black" style={styles.Icon} />
                    <Text style={styles.username}>Jacqueline</Text>
                    <View style={styles.box}>
                        <View style={styles.line1}></View>
                        <View style={styles.line2}></View>
                        <View style={styles.line3}></View>
                    </View>
                </View>
                <View style={styles.box1}>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    line1: {
        width: '100%',
        height: 2,
        marginTop: 40,
        backgroundColor: 'red',
    },
    line2: {
        width: '100%',
        height: 2,
        marginTop: 40,
        backgroundColor: 'red',
    },
    line3: {
        width: '100%',
        height: 2,
        marginTop: 40,
        backgroundColor: 'red',
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1,
    },
    header: {
        width: 375,
        height: 350,
        marginTop: -80,
        borderRadius: 10,
        borderRadius: 1,
        backgroundColor: '#DFE1E7',
    },
    circle: {
        marginTop: 150,
        marginLeft: 130,
        width: 120,
        height: 120,
        borderRadius: 100,
        backgroundColor: 'white', // Couleur du cercle
    },
    Icon: {
        marginTop: -110,
        marginLeft: 160,
        left: 10,
    },
    username: {
        marginTop: 30,
        marginLeft: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: 280,
        height: 150,
        marginTop: 20,
        marginLeft: 50,
        borderRadius: 15,
        backgroundColor: '#2D2D2D',
    },
    box1: {
        marginTop: 140,
        width: 280,
        height: 150,
        borderRadius: 15,
        backgroundColor: '#2D2D2D',
    }
});

export default Profil;