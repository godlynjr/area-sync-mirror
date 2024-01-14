import React from 'react';
import { View, Image, Text } from 'react-native';

const ServiceComponent = ({ service, imageSource }) => {
  return (
    <View>
      <Image source={imageSource} style={styles.serviceImage} />
      <Text>{service.name}</Text>
    </View>
  );
};

export default ServiceComponent;