import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text, Dimensions, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import SearchBar from './SearchBar';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';
import { Menu, Divider, Button } from 'react-native-paper';
import user from './User'
import notionImage from './Assets/notion.png';
import tallyImage from './Assets/tally.png';

const Services = ({ }) => {
    const navigation = useNavigation();
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    const [selectedValue, setSelectedValue] = useState('');
    const handleGithub = async () => {
        navigation.navigate('Service/Github');
    };
    const handleGoogle = async () => {
        navigation.navigate('Service/Google');
    };
    const handleYoutube = async () => {
        navigation.navigate('Service/Youtube');
    };
    const handleCalendar = async () => {
        navigation.navigate('Service/Calendar');
    };
    const handleQuote = async () => {
        navigation.navigate('Service/Quote');
    };
    const handleSpotify = async () => {
        navigation.navigate('Service/Spotify');
    };
    const handleDiscord = async () => {
        navigation.navigate('Service/Discord');
    };
    const handleDateTime = async () => {
        navigation.navigate('Service/Date_Time');
    };

    const [aboutData, setAboutData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await user.fetchAboutData();
                setAboutData(data);
                // console.log('data is now', data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
            }
        };
        fetchData();
    }, []);
    const services = aboutData?.server.services;
    const images = [notionImage, tallyImage]; // Remplacez par vos propres images

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.Services}>Services</Text>
            <SearchBar />
            {/* <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<Button onPress={openMenu}>Show menu</Button>}>
                <Menu.Item onPress={() => { }} title="Item 1" />
                <Menu.Item onPress={() => { }} title="Item 2" />
                <Divider />
                <Menu.Item onPress={() => { }} title="Item 3" />
            </Menu> */}
            {/* <View>
                {aboutData ? (
                    aboutData.server.services.map((service, index) => (
                        <View key={index}>
                            <Text>{service.name}</Text>
                            {service.imagePath && (
                                <Image
                                    source={require('./Assets/notion.png')}
                                    style={styles.serviceImage}
                                />
                            )}
                        </View>
                    ))
                ) : (
                    <Text style={styles.text}>Chargement des données...</Text>
                )}
            </View> */}
            {/* <View>
                {aboutData ? (
                    aboutData.server.services.map((service, index) => (
                        <View key={index}>
                            <Text>{service.name}</Text>
                        </View>
                    ))
                ) : (
                    <Text style={styles.text}>Chargement des données...</Text>
                )}
            </View> */}
            {/* <ScrollView>
                <View >
                    {services && images && services.length === images.length ? (
                        services.map((service, index) => (
                            <View key={index} style={styles.serviceItem}>
                                {service.imagePath && (
                                    <Image
                                        source={images[index]}
                                        style={styles.serviceImage}
                                    />
                                )}
                                <Text style={styles.serviceName}>{service.name}</Text>
                            </View>
                        ))
                        
                    ) : (
                        <Text style={styles.loadingText}>Chargement des données...</Text>
                    )}
                </View>
            </ScrollView> */}
            {/* <ScrollView>
                <View>
                    {services && images && services.length === images.length ? (
                        services.map((service, index) => (
                            <ServiceComponent
                                key={index}
                                service={service}
                                imageSource={images[index]}
                            />
                        ))
                    ) : (
                        <Text style={styles.text}>Chargement des données...</Text>
                    )}
                </View>
            </ScrollView> */}
            <View style={styles.serviceContainer}>
                <ScrollView contentContainerStyle={styles.appletsListContainer} style={styles.box}>
                    <TouchableOpacity onPress={handleGithub}>
                        <Image
                            source={require('./Assets/github.png')}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleGoogle}>
                        <Image
                            source={require('./Assets/google1.png')}
                            style={styles.image1}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleYoutube}>
                        <Image
                            source={require('./Assets/youtube.png')}
                            style={styles.image1}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleCalendar}>
                        <Image
                            source={require('./Assets/calendar.png')}
                            style={styles.image4}
                        />
                    </TouchableOpacity>
                </ScrollView>
                <ScrollView contentContainerStyle={styles.appletsListContainer} style={styles.box}>
                    <TouchableOpacity onPress={handleSpotify}>
                        <Image
                            source={require('./Assets/spotify1.jpeg')}
                            style={styles.image2}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleQuote}>
                        <Image
                            source={require('./Assets/quote.png')}
                            style={styles.image3}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleDiscord}>
                        <Image
                            source={require('./Assets/discord.png')}
                            style={styles.image1}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleDateTime}>
                        <Image
                            source={require('./Assets/date.png')}
                            style={styles.image1}
                        />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    dataStyle: {
        color: 'red',
        fontWeight: 'bold',
    },
    Services: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    serviceContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: 20,
        paddingHorizontal: 10
    },
    box: {
        borderRadius: 20,
        backgroundColor: '#DFE1E7',
    },
    image: {
        width: 130,
        height: 130,
        borderRadius: 20,
    },
    image1: {
        width: 130,
        height: 130,
        borderRadius: 20,
    },
    image2: {
        width: 130,
        height: 130,
        borderRadius: 20,
    },
    image3: {
        width: 130,
        height: 130,
        borderRadius: 20,
    },
    image4: {
        width: 130,
        height: 130,
        borderRadius: 25,
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginTop: 50,
    },
    appletsListContainer: { alignItems: 'center', paddingVertical: 20, gap: 20 }
});

export default Services;
