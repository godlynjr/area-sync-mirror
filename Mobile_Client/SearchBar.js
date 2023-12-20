import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MySearch = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={24} color="black" style={styles.icon} />
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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    marginTop: 0,
    marginLeft: -1,
    position: 'relative',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: "#DFE1E7",
    // width: 350,
    width: windowWidth * 0.88,
        // height: windowHeight * 0.04,
    height: 50,
    borderRadius: 50,
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