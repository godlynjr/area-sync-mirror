import React, { useState } from 'react';
import { Switch, View, StyleSheet } from 'react-native';

const ToggleButton = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: '#767577', true: 'white' }}
        thumbColor={isEnabled ? 'gray' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.toggleButton} // Ajout de la propriété de style
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleButton: {
    transform: [{ scaleX:  2.2 }, { scaleY: 2 }] // Appliquer une mise à l'échelle
  }
});

export default ToggleButton;