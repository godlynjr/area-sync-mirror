import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Dimensions, Image } from 'react-native';
import SearchBar from './SearchBar';
import DropDownPicker from 'react-native-dropdown-picker';

const Services = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = useState('');

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
                    <Image
                        source={require('./Assets/github.png')}
                        style={styles.image}
                    />
                    <Image
                        source={require('./Assets/google.png')}
                        style={styles.image}
                    />
                </ScrollView>
                <ScrollView style={styles.box1}>
                    <Image
                        source={require('./Assets/spotify1.jpeg')}
                        style={styles.image}
                    />
                    <Image
                        source={require('./Assets/tally.png')}
                        style={styles.image}
                    />
                </ScrollView>
            </View>
        </View>
    );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        marginTop: 2,
        width: 150,
        height: 150,
        borderRadius: 20,
    },
    container1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: windowWidth * 0.05,
        marginTop: windowHeight * 0.05,
    },
    box: {
        flex: 1,
        height: windowHeight * 0.6,
        backgroundColor: '#DFE1E7',
        borderRadius: 20,
        marginHorizontal: windowWidth * 0.02,
    },
    box1: {
        flex: 1,
        height: windowHeight * 0.6,
        backgroundColor: '#DFE1E7',
        borderRadius: 20,
        marginHorizontal: windowWidth * 0.02,
    },
    pickerContainer: {
        height: windowHeight * 0.04,
        width: windowWidth * 0.8,
    },
    Services: {
        marginTop: windowHeight * 0.05,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: -240,
    },
    pickerStyle: {
        marginTop: -(windowHeight * 0.01),
        backgroundColor: '#DFE1E7',
        borderWidth: 1,
        width: windowWidth * 0.88,
        height: windowHeight * 0.04,
        borderColor: '#DFE1E7',
        marginLeft: -15,
        borderRadius: 10,
    },
    dropDownStyle: {
        backgroundColor: '#fafafa',
    },
});

export default Services;
