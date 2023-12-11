import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/FontAwesome';

const OtherPage = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Contenu de chaque onglet */}
        {activeTab === 'Home' && <Text>Contenu de l'onglet Home</Text>}
        {activeTab === 'Search' && <Text>Contenu de l'onglet Search</Text>}
        {activeTab === 'Add' && <Text>Contenu de l'onglet Add</Text>}
        {activeTab === 'Services' && <Text>Contenu de l'onglet Services</Text>}
        {activeTab === 'Services' && <Text>Contenu de l'onglet Services</Text>}
      </View>

      <View style={styles.navBar}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Home' && styles.activeTab]}
          onPress={() => handleTabPress('Home')}
        >
          <Icon name="home-outline" size={24} color={activeTab === 'Home' ? 'blue' : 'black'} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Search' && styles.activeTab]}
          onPress={() => handleTabPress('Search')}
        >
          <Icon name="search" size={24} color={activeTab === 'Search' ? 'blue' : 'black'} />
        </TouchableOpacity>
          
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Add' && styles.activeTab]}
          onPress={() => handleTabPress('Add')}
        >
          <Icon name="add" size={24} color={activeTab === 'Add' ? 'blue' : 'black'} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Services' && styles.activeTab]}
          onPress={() => handleTabPress('Services')}
        >
          <Icon name="business-outline" size={24} color={activeTab === 'Services' ? 'blue' : 'black'} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Services' && styles.activeTab]}
          onPress={() => handleTabPress('Services')}
        >
          <Icon name="mdi-account" size={24} color={activeTab === 'Services' ? 'blue' : 'black'} />
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
    backgroundColor: '#f2f2f2',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    // borderBottomWidth: 2, // Commenter ou supprimer cette ligne
    // borderBottomColor: 'blue', // Commenter ou supprimer cette ligne
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