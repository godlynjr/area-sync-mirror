import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

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
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Ionicons style={{ position: 'absolute', top: 10, left: 10 }} name="arrow-back" size={30} color="#fff" onPress={() => navigation.goBack()} />
                <View style={styles.content}>
                    <View style={styles.avatarContainer}>
                        <FontAwesome5
                            name={user.gender === 'female' ? 'female' : 'male'}
                            size={80}
                            color="#333"
                        />
                    </View>
                </View>
                <Text style={styles.name}>{displayName}</Text>
            </View>
            <Text style={styles.names}> Your name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Name"
                value={name}
                onChangeText={setName}
            />
            <Text style={styles.emails}> Your email</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Email"
                value={email}
                onChangeText={setEmail}
            />
            <TouchableOpacity style={styles.savebutton} onPress={handleSave}>
                <Text style={styles.save}>Save</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#494949',
        paddingVertical: 80,
        paddingHorizontal: 20
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
        marginHorizontal: 10,
        marginTop: 10,
    },
    input: {
        paddingVertical: 10,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 5,
        borderWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    names: {
        marginTop: 40,
        paddingHorizontal: 10,
        fontWeight: 'normal',
        fontSize: 15,
    },
    emails: {
        marginTop: 40,
        paddingHorizontal: 10,
        fontWeight: 'normal',
        fontSize: 15,
    },
    save: {
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
        marginRight: 80,
        marginLeft: 80,
        paddingVertical: 10,
        marginTop: 40,
        backgroundColor: 'black',
        borderRadius: 20,
    },
    avatarContainer: {
        backgroundColor: '#DFE1E7',
        width: 120,
        height: 120,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        color: 'white',
        marginTop: 60,
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
