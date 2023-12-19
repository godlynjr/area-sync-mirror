import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Picker} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Services from './Services';
import Profil from './Profil';

const OtherPage = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [selectedValue, setSelectedValue] = useState('');

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Contenu de chaque onglet */}
        {activeTab === 'Home' && <Text>Contenu de l'onglet Home</Text>}
        {activeTab === 'Search' && <Services/>}
        {activeTab === 'Add' && <Text>Contenu de l'onglet Add</Text>}
        {activeTab === 'Layers' && <Text>Contenu de l'onglet Recent services</Text>}
        {activeTab === 'Account' && <Text> <Profil/> </Text>}
      </View>

      <View style={styles.navBar}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Home' && styles.activeTab]}
          onPress={() => handleTabPress('Home')}
        >
          <Icon name="home-outline" size={24} color={activeTab === 'Home' ? '#E0C0FC' : 'black'} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Search' && styles.activeTab]}
          onPress={() => handleTabPress('Search')}
        >
          <Icon name="search" size={24} color={activeTab === 'Search' ? '#E0C0FC' : 'black'} />
        </TouchableOpacity>
          
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Add' && styles.activeTab]}
          onPress={() => handleTabPress('Add')}
        >
          <Icon name="add" size={24} color={activeTab === 'Add' ? '#E0C0FC' : 'black'} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Layers' && styles.activeTab]}
          onPress={() => handleTabPress('Layers')}
        >
          <Icon name="layers" size={24} color={activeTab === 'Layers' ? '#E0C0FC' : 'black'} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Account' && styles.activeTab]}
          onPress={() => handleTabPress('Account')}
        >
          <Icon name="person" size={24} color={activeTab === 'Account' ? '#E0C0FC' : 'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'white',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    // borderBottomWidth: 2, // Commenter ou supprimer cette ligne
    // borderBottomColor: '#E0C0FC', // Commenter ou supprimer cette ligne
  },
  tabText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OtherPage;