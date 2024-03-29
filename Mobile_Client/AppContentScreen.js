import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Services from './Services';
import Profil from './Profil';
import { Ionicons } from '@expo/vector-icons';
import HomePage from './HomePage';

const AppContentScreen = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Contenu de chaque onglet */}
        {activeTab === 'Home' && <HomePage/>}
        {activeTab === 'Search' && <Services/>}
        {/* {activeTab === 'Add' && <Text>Contenu de l'onglet Add</Text>}
        {activeTab === 'Layers' && <Text>Contenu de l'onglet Recent services</Text>} */}
        {activeTab === 'Account' && <Profil/>}
      </View>

      <View style={styles.navBar}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Home' && styles.activeTab]}
          onPress={() => handleTabPress('Home')}
        >
          <Ionicons name="home-outline" size={24} color={activeTab === 'Home' ? '#E0C0FC' : 'black'} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Search' && styles.activeTab]}
          onPress={() => handleTabPress('Search')}
        >
          <Ionicons name="search" size={24} color={activeTab === 'Search' ? '#E0C0FC' : 'black'} />
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Add' && styles.activeTab]}
          onPress={() => handleTabPress('Add')}
        >
          <Ionicons name="add" size={24} color={activeTab === 'Add' ? '#E0C0FC' : 'black'} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Layers' && styles.activeTab]}
          onPress={() => handleTabPress('Layers')}
        >
          <Ionicons name="layers" size={24} color={activeTab === 'Layers' ? '#E0C0FC' : 'black'} />
        </TouchableOpacity> */}

        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Account' && styles.activeTab]}
          onPress={() => handleTabPress('Account')}
        >
          <Ionicons name="person" size={24} color={activeTab === 'Account' ? '#E0C0FC' : 'black'} />
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
    marginTop: -20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
  },
  tabText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
});

export default AppContentScreen;
