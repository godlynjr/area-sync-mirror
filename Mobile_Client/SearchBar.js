import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Dimensions} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { widthPercentageToDP, heightPercentageToDP, listenOrientationChange, removeOrientationListener } from 'react-native-responsive-screen';

const MySearch = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="gray"
          value={searchText}
          onChangeText={handleSearchTextChange}
        />
      </View>
    </View>
  );
};

const responsiveWidth = widthPercentageToDP('50%'); // Get responsive width
const responsiveHeight = heightPercentageToDP('30%'); // Get responsive height

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  searchContainer: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    borderRadius: 10,
    color: '#DFE1E7',
    paddingHorizontal: 10,
    backgroundColor: '#DFE1E7'
  },
  icon: {
    marginTop: 10,
    position: 'absolute',
    left: 10,
  },
  input: {
    marginTop: 5,
    height: 40,
    paddingLeft: 30,
  },
});

export default MySearch;