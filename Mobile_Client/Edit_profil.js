import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Edit_profil = ({ navigation }) => { // Ajout de la prop "navigation"
    const user = {
        name: 'Maman Jacqueline',
        age: 25,
        email: 'johndoe@example.com',
        gender: 'female' ? 'female' : 'male',
        password: 'password' // 'female' pour le genre féminin
    };
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [displayName, setDisplayName] = useState(user.name);
    const handleSave = () => {
        const updatedUser = { ...user, name, email };
        setDisplayName(name); // Met à jour le nom affiché avec la nouvelle valeur
        console.log(updatedUser);
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.profileInfo}>
                    <View style={styles.avatarContainer}>
                        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back" size={30} color="black" />
                        </TouchableOpacity>
                        <FontAwesome5
                            name={user.gender === 'female' ? 'female' : 'male'}
                            size={80}
                            color="#333"
                        />
                    </View>
                    <Text style={styles.name}>{displayName}</Text>
                </View>
                <Text style={styles.names}>Your name</Text>
                <TextInput
                    style={styles.input1}
                    placeholder="Enter Name"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input2}
                    placeholder="Enter Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <TouchableOpacity style={styles.savebutton} onPress={handleSave}>
                    <Text style={styles.save}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backButton: {
        position: 'absolute',
        top: -10,
        left: -100,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    container1: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: windowWidth * 0.05,
        marginTop: 10,
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
    names: {
        marginTop: 20,
        fontWeight: 'normal',
        fontSize: 15,
        marginLeft: -250,
    },
    emails: {
        marginTop: 20,
        fontWeight: 'normal',
        fontSize: 15,
        marginLeft: -250,
    },
    save: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    box: {
        height: 50,
        width: 300,
        backgroundColor: '#DFE1E7',
        borderRadius: 20,
        marginVertical: 20,
    },
    box1: {
        marginTop: 50,
        height: 50,
        width: 300,
        backgroundColor: '#DFE1E7',
        borderRadius: 20,
    },
    content: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileInfo: {
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#DFE1E7',
        width: 380,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -150,
        height: 300,
    },
    savebutton: {
        marginTop: 60,
        height: 50,
        width: 200,
        backgroundColor: 'black',
        borderRadius: 20,
    },
    avatarContainer: {
        marginTop: 15,
        backgroundColor: '#f2f2f2',
        width: 120,
        height: 120,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    menu: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuItem1: {
        marginTop: -70,
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#2D2D2D',
        borderRadius: 25,
        width: 300,
        height: 150,
    },
    menuItem2: {
        marginTop: 10,
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#2D2D2D',
        borderRadius: 25,
        width: 300,
        height: 220,
    },
    line: {
        marginTop: 15,
        width: '100%',
        height: 1,
        backgroundColor: '#DFE1E7',
    },
    menuText1: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'normal',
        color: '#DFE1E7',
    },
    menuText11: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'normal',
        color: '#DFE1E7',
    },
    menuText2: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'normal',
        color: '#DFE1E7',
    },
    menuText3: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'normal',
        color: '#DFE1E7',
    },
});

export default Edit_profil;
