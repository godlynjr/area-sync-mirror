import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CreateTextPopUp = ({
  clickText,
  validate,
  title,
  label,
  w,
  h,
  mycontroller,
  onPressed,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handlePress = () => {
    closeModal();
    onPressed();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, { width: w, height: h }]} onPress={openModal}>
        <Text style={styles.buttonText}>{clickText}</Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Icon name="close" size={40} color='green' />
            </TouchableOpacity>
            <TextInput
              style={styles.textInput}
              value={mycontroller}
              onChangeText={text => mycontroller = text}
              placeholder={label}
              placeholderTextColor="#888"
              underlineColorAndroid="green"
            />
            <TouchableOpacity
              style={[styles.button, { backgroundColor: 'red' }]}
              onPress={handlePress}
            >
              <Text style={styles.buttonText}>{validate}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'red',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  modalContent: {
    backgroundColor: 'red',
    borderRadius: 25,
    padding: 20,
    width: '80%',
  },
  title: {
    fontSize: 25,
    fontWeight: 'normal',
    textAlign: 'left',
    marginBottom: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  textInput: {
    width: '100%',
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default CreateTextPopUp;
