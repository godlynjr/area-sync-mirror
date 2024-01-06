import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Dimensions, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import SearchBar from './SearchBar';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';
import { Menu, Divider, Button } from 'react-native-paper';

// const { width, height } = Dimensions.get('window');
// const guidelineWidth = 375; // Width of the device on which the design is based
// const scale = size => (width / guidelineWidth) * size;

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
    const handleNotion = async () => {
        navigation.navigate('Service/Notion');
    };
    const handleCalendar = async () => {
        navigation.navigate('Service/Calendar');
    };
    const handleTally = async () => {
        navigation.navigate('Service/Tally');
    };
    const handleSpotify = async () => {
        navigation.navigate('Service/Spotify');
    };
    const handleDiscord = async () => {
        navigation.navigate('Service/Discord');
    };
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.Services}>Services</Text>
            <SearchBar />
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<Button onPress={openMenu}>Show menu</Button>}>
                <Menu.Item onPress={() => { }} title="Item 1" />
                <Menu.Item onPress={() => { }} title="Item 2" />
                <Divider />
                <Menu.Item onPress={() => { }} title="Item 3" />
            </Menu>
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
                    <TouchableOpacity onPress={handleNotion}>
                        <Image
                            source={require('./Assets/notion.png')}
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
                    <TouchableOpacity onPress={handleTally}>
                        <Image
                            source={require('./Assets/tally.png')}
                            style={styles.image3}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleDiscord}>
                        <Image
                            source={require('./Assets/discord.png')}
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
        // borderRadius: 20,
        // backgroundColor: 'red',
        paddingHorizontal: 10
    },
    box: {
        // paddingHorizontal: 25,
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
    appletsListContainer: { alignItems: 'center', paddingVertical: 20, gap: 20 }
});

export default Services;
