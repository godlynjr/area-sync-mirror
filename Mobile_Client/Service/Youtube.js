import React, { useState, useEffect } from 'react';
import { View, Switch, SafeAreaView, ScrollView, Modal, TextInput, Button, Text, Linking, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import user from '../User';

const Youtube = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);
    const [inputText, setInputText] = useState('');
    const [loading, setLoading] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    }
    const toggleSwitch1 = () => {
        setIsEnabled1(previousState => !previousState);
    }
    const toggleSwitch2 = () => {
        setIsEnabled2(previousState => !previousState);
    }

    const handleLogin = async () => {
        try {
            const login = await user.loginYoutube();
            console.log('login', login);
            Linking.openURL(login);
        } catch (error) {
            console.error('Erreur lors du démarrage du service', error);
        }
    };

    const handleYoutubeFirstArea = async () => {
        try {
            const login = await user.youtubeFirstArea();
            console.log('login', login);
            //   Linking.openURL(login);
        } catch (error) {
            console.error('Erreur lors du démarrage du service', error);
        }
    };

    const handleYoutubeSecondeArea = async () => {
        try {
            const login = await user.youtubeSecondeArea();
            console.log('login', login);
            //   Linking.openURL(login);
        } catch (error) {
            console.error('Erreur lors du démarrage du service', error);
        }
    };

    // const handleYoutubeThirdArea = async () => {
    //     try {
    //         const login = await user.youtubeFirstArea();
    //         console.log('login', login);
    //         //   Linking.openURL(login);
    //     } catch (error) {
    //         console.error('Erreur lors du démarrage du service', error);
    //     }
    // };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Ionicons style={{ position: 'absolute', top: 10, left: 10 }} name="arrow-back" size={30} color="#fff" onPress={() => navigation.goBack()} />
                <Image
                    source={require('../Assets/youtube.png')}
                    style={styles.Image}
                />
                <View style={styles.textBox}>
                    <Text style={styles.text1}>
                        Youtube
                    </Text>
                    <Text style={styles.text2}>
                        An online video-sharing platform where users can watch, upload, and share videos. YouTube offers a wide range of content, including music videos, tutorials, vlogs, documentaries, and much more.                  </Text>
                </View>
                <View style={styles.bottomContainer}>
                    <TouchableOpacity style={styles.bouton} onPress={handleLogin}>
                        <Text style={styles.Text}>
                            Connect
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bouton}>
                        <Text style={styles.Text}>
                            Visit
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View style={styles.servicenamebox}>

                    {/* <TouchableOpacity>/ */}
                    <View style={styles.serv1} >
                        <Image
                            source={require('../Assets/dateservice.png')}
                            style={styles.image}
                        />
                        <Text style={styles.Test1}>
                            Start service3
                        </Text>
                        <Text style={styles.Test1}>
                            by AREASYNC
                        </Text>
                        <View style={styles.containerb}>
                            <Switch
                                trackColor={{ false: '#767577', true: 'white' }}
                                thumbColor={isEnabled ? 'gray' : '#f4f3f4'}
                                ios_backgroundColor="black"
                                onValueChange={(value) => {
                                    toggleSwitch(value);
                                    if (value) {
                                        setModalVisible(true);
                                        // handleYoutubeFirstArea();
                                    }
                                }}
                                value={isEnabled}
                                style={styles.toggleButton} // Ajout de la propriété de style
                            />
                        </View>
                    </View>
                    {/* </TouchableOpacity> */}

                    {/* <TouchableOpacity> */}
                    <View style={styles.serv2} >
                        <Image
                            source={require('../Assets/dateservice.png')}
                            style={styles.image}
                        />
                        <Text style={styles.Test1}>
                            Start service3
                        </Text>
                        <Text style={styles.Test1}>
                            by AREASYNC
                        </Text>
                        <View style={styles.containerb}>
                            <Switch
                                trackColor={{ false: '#767577', true: 'white' }}
                                thumbColor={isEnabled1 ? 'gray' : '#f4f3f4'}
                                ios_backgroundColor="black"
                                onValueChange={(value) => {
                                    toggleSwitch1(value);
                                    if (value) {
                                        handleYoutubeSecondeArea();
                                    }
                                }}
                                // onValueChange={toggleSwitch1}
                                value={isEnabled1}
                                style={styles.toggleButton} // Ajout de la propriété de style
                            />
                        </View>
                    </View>
                    {/* </TouchableOpacity> */}

                    {/* <TouchableOpacity> */}
                    <View style={styles.serv3} >
                        <Image
                            source={require('../Assets/dateservice.png')}
                            style={styles.image}
                        />
                        <Text style={styles.Test1}>
                            Start service3
                        </Text>
                        <Text style={styles.Test1}>
                            by AREASYNC
                        </Text>
                        <View style={styles.containerb}>
                            <Switch
                                trackColor={{ false: '#767577', true: 'white' }}
                                thumbColor={isEnabled2 ? 'gray' : '#f4f3f4'}
                                ios_backgroundColor="black"
                                onValueChange={(value) => {
                                    toggleSwitch2(value);
                                    if (value) {
                                        // handleYoutubeThirdArea();
                                    }
                                }}
                                value={isEnabled2}
                                style={styles.toggleButton} // Ajout de la propriété de style
                            />
                        </View>
                    </View>
                    {/* </TouchableOpacity> */}
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(!modalVisible)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text>Enter Text:</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={text => setInputText(text)}
                                value={inputText}
                            />
                            <Button
                                title="Send"
                                onPress={async () => {
                                    setLoading(true);
                                    try {
                                        const login = await user.youtubeFirstArea(inputText);
                                        console.log('logins', login);
                                        // Ajouter d'autres logiques si nécessaire
                                    } catch (error) {
                                        console.error('Erreur lors du démarrage du service', error);
                                    } finally {
                                        setLoading(false);
                                        setModalVisible(false);
                                    }
                                }}
                                disabled={loading}
                            />

                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        elevation: 5,
    },
    input: {
        height: 50,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 10,
        paddingHorizontal: 10,
    },


    container: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#494949',
        paddingVertical: 40,
        paddingHorizontal: 20
    },
    bottomContainer: {
        marginTop: 20,
        gap: 20,
        flexDirection: 'row',
    },
    containerb: {
        paddingVertical: 20,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    toggleButton: {
        transform: [{ scaleX: 1.0 }, { scaleY: 1.0 }] // Appliquer une mise à l'échelle
    },
    textBox: {
        gap: 15,
    },
    Test1: {
        fontSize: 12,
        marginTop: 20,
        fontWeight: 'bold',
        paddingHorizontal: 22,
    },
    image: {
        // paddingVertical: 10,
        marginTop: 20,
        marginLeft: 20,
        width: 30,
        height: 30,
        borderRadius: 50,
    },
    backButton: {
        position: 'absolute',
        top: 30,
        left: 20,
    },
    servicenamebox: {
        marginTop: 30,
        paddingHorizontal: 20,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    serv1: {
        backgroundColor: 'red',
        borderRadius: 15,
        width: 370,
        height: 200,
        // paddingHorizontal: 150,
        // paddingVertical: 90,
    },
    serv2: {
        borderRadius: 15,
        width: 370,
        height: 200,
        backgroundColor: 'green',
        // paddingHorizontal: 150,
        // paddingVertical: 90,
    },
    serv3: {
        borderRadius: 15,
        width: 370,
        height: 200,
        backgroundColor: 'blue',
        // paddingHorizontal: 150,
        // paddingVertical: 90,
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center',
    },
    bouton: {
        width: 150,
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: 'white',
        borderRadius: 50,
    },
    text1: {

        color: 'white',
        marginTop: 8,
        fontSize: 20,
        textAlign: 'center',
    },
    text2: {

        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
    Image: {
        width: 100,
        height: 100,
        borderRadius: 30,
    },
    Text: {
        fontSize: 18,
        textAlign: 'center',
    },
});

export default Youtube;
