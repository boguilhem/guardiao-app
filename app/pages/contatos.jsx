import { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import { Button, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Stack } from 'expo-router';

import { COLORS, icons, images } from '../../constants';
import { ScreenHeaderBtn } from '../../components';
import styles from '../../styles/contatos.styles.js';

const savedContacts = [];

let STORAGE_KEY = '@user_contacts';

const Contatos = () => {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState(['', '']);
  const [textInputName, setTextInputName] = useState('');
  const [textInputEmail, setTextInputEmail] = useState('');

  const saveData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
      alert('Failed to save the data to the storage');
    }
  };

  const readData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      if (jsonValue !== null) {
        await setContacts(JSON.parse(jsonValue));
      }
    } catch (e) {
      alert('Failed to fetch the input from storage');
    }
  };

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      alert('Storage successfully cleared!');
    } catch (e) {
      alert('Failed to clear the async storage.');
    }
  };

  useEffect(() => {
    readData();
  }, []);

  const nameInputHandler = (enteredContact) => {
    setTextInputName(enteredContact);
    setContact([enteredContact, textInputEmail]);
    // console.log('Salvando Nome...');
  };
  const emailInputHandler = (enteredContact) => {
    setTextInputEmail(enteredContact);
    setContact([textInputName, enteredContact]);
    // console.log('Salvando Email...');
  };

  const addContactHandler = () => {
    if (checkTextInput()) {
      if (!contacts.some((item) => item.key == contact) && contact[0] != '') {
        setContacts((currentContacts) => [
          ...currentContacts,
          { key: contact[0], value: contact[1] },
        ]);

        saveData([...contacts, { key: contact[0], value: contact[1] }]);
        savedContacts.push(contact);
      }
      setContact(['', '']);
      setTextInputName('');
      setTextInputEmail('');
    }
  };

  const removeContactHandler = (contactId) => {
    savedContacts.splice(savedContacts.indexOf(contactId), 1);
    setContacts((currentContacts) => {
      return currentContacts.filter((contact) => contact.key !== contactId);
    });
    saveData([...contacts].filter((contact) => contact.key !== contactId));
  };

  const checkTextInput = () => {
    //Check for the Name TextInput
    if (!textInputName.trim()) {
      alert('Please Enter Name');
      return false;
    }
    //Check for the Email TextInput
    if (!textInputEmail.trim()) {
      alert('Please Enter Email');
      return false;
    }
    //Checked Successfully
    // alert('Success');
    return true;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightBlue },
          headerShadowVisible: false,
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: '',
        }}
      />

      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image
            source={icons.alarmeNoturno}
            resizeMode="contain"
            style={styles.btnImg(30)}
          />
          <Text style={styles.title}>Alarme Noturno</Text>
        </View>

        <View style={styles.cardsContainer}>
          <View style={styles.headerContainer}>
            <Image
              source={icons.avatarUser}
              resizeMode="contain"
              style={styles.btnImg(30)}
            />
            <Text style={styles.title}>Contatos</Text>
          </View>

          <TextInput
            style={{
              width: '80%',
              marginBottom: 20,
              borderColor: 'black',
              borderRadius: 5,
              backgroundColor: '#ededed',
              borderWidth: 1,
            }}
            dense
            type="flat"
            label="Nome do Contato"
            value={textInputName}
            onChangeText={nameInputHandler}
          />

          <TextInput
            style={{
              width: '80%',
              borderColor: 'black',
              borderRadius: 5,
              backgroundColor: '#ededed',
              borderWidth: 1,
            }}
            dense
            type="flat"
            label="Email do Contato"
            value={textInputEmail}
            onChangeText={emailInputHandler}
          />

          <Button
            style={{ marginTop: 40 }}
            buttonColor="#866bcf"
            mode="elevated"
            textColor="white"
            onPress={addContactHandler}
          >
            Adicionar Contato
          </Button>
          {/* <Button
            style={{ marginTop: 40 }}
            buttonColor="#866bcf"
            mode="elevated"
            textColor="white"
            onPress={() => {
              console.log('Contact: ', contact);
              console.log('Contacts: ', contacts);
              console.log('savedContacts: ', savedContacts);
              // clearStorage();
            }}
          >
            Console
          </Button> */}
        </View>

        <View style={styles.savedContactsContainer}>
          <Image
            source={icons.avatarUser}
            resizeMode="contain"
            style={styles.btnImg(30)}
          />
          <Text style={styles.title}>Contatos Salvos</Text>
        </View>

        <FlatList
          data={contacts}
          renderItem={(contactData) =>
            contacts[0] === 0 ? (
              <></>
            ) : (
              <View style={styles.dataContainer}>
                <Text style={styles.dataName}>{contactData.item.key}</Text>
                <Text style={styles.dataEmail}>{contactData.item.value}</Text>
                <TouchableOpacity
                  onPress={() => removeContactHandler(contactData.item.key)}
                >
                  <Image
                    source={icons.clearIcon}
                    resizeMode="contain"
                    style={styles.btnImg(20)}
                  />
                </TouchableOpacity>
              </View>
            )
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Contatos;
