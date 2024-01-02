import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import SearchBar from './SearchBar';
import DropDownPicker from 'react-native-dropdown-picker';
import { widthPercentageToDP, heightPercentageToDP, listenOrientationChange, moderateScale } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const guidelineWidth = 375; // Width of the device on which the design is based
const scale = size => (width / guidelineWidth) * size;

const Services = ({}) => {
    const navigation = useNavigation();
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
        <View style={styles.container}>
            <Text style={styles.Services}>Services</Text>
            <SearchBar />
            <DropDownPicker
                items={[
                    { label: 'Options', value: 'option1' },
                    { label: 'Optionss', value: 'option2' },
                    { label: 'Optionsss', value: 'option3' },
                ]}
                defaultValue={selectedValue}
                containerStyle={styles.pickerContainer}
                style={styles.pickerStyle}
                dropDownStyle={styles.dropDownStyle}
                onChangeItem={(item) => setSelectedValue(item.value)}
            />
            <View style={styles.container1}>
                <ScrollView style={styles.box}>
                    <TouchableOpacity onPress={handleGithub}>
                        <Image
                            source={require('./Assets/github.png')}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleGoogle}>
                        <Image
                            source={require('./Assets/google.png')}
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
                <ScrollView style={styles.box1}>
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        marginTop: scale(10),
        marginLeft: scale(10),
        width: 150,
        height: 150,
        borderRadius: 20,
    },
    image1: {
        marginTop: scale(10),
        marginLeft: scale(10),
        width: 150,
        height: 150,
        borderRadius: 20,
    },
    image2: {
        marginTop: scale(10),
        marginLeft: scale(10),
        width: 150,
        height: 150,
        borderRadius: 20,
    },
    image3: {
        marginTop: scale(10),
        marginLeft: scale(10),
        width: 150,
        height: 150,
        borderRadius: 20,
    },
    image4: {
        marginTop: scale(10),
        marginLeft: scale(10),
        width: 150,
        height: 150,
        borderRadius: 25,
    },
    container1: {
        marginTop: scale(0),
        flexDirection: 'row',
        width: scale(350),
        height: scale(360),
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        flex: 1,
        marginLeft: scale(1),
        height: heightPercentageToDP('60'),
        width: widthPercentageToDP('30'),
        backgroundColor: 'green',
        borderRadius: 20,
        backgroundColor: '#DFE1E7',
    },
    box1: {
        flex: 1,
        marginLeft: scale(8),
        height: heightPercentageToDP('60'),
        width: widthPercentageToDP('30'),
        backgroundColor: '#DFE1E7',
        borderRadius: 20,
    },

    pickerContainer: {
        height: heightPercentageToDP('30'),
        width: widthPercentageToDP('30'),
    },
    Services: {
        marginTop: scale(30),
        padding: scale(40),
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: widthPercentageToDP('-68'),
    },
    pickerStyle: {
        marginTop: scale(60),
        backgroundColor: '#DFE1E7',
        borderWidth: 1,
        width: widthPercentageToDP('88'),
        height: 50,
        borderColor: '#DFE1E7',
        marginLeft: scale(-110),
        borderRadius: 20,
    },
    dropDownStyle: {
        backgroundColor: '#fafafa',
    },
});

export default Services;
