import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import user from '../User'

const AreaTodoist = ({ navigation }) => {
  const handleTodoist = async () => {
    try {
      const login = await user.discord_calendar();
      console.log(login);
    } catch (error) {
      console.error('Erreur lors du démarrage de l\'area calendar de discord', error);
    }
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={handleTodoist}>
        <View style={styles.container}>
          <Text>
            Textsssssssssss todoist
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AreaTodoist;
