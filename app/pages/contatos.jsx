import { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import { Stack, useRouter } from 'expo-router';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Audio } from 'expo-av';

import { Button, Switch, TextInput } from 'react-native-paper';
import { COLORS, icons, images, SIZES } from '../../constants';
import { ScreenHeaderBtn } from '../../components';
import styles from '../../styles/contatos.styles.js';

const savedContacts = [];
// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: false,
//     shouldPlaySound: false,
//     shouldSetBadge: false,
//   }),
// });

const Contatos = () => {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState(['', '']);
  // const [expoPushToken, setExpoPushToken] = useState('');
  // const [notification, setNotification] = useState(false);
  // const notificationListener = useRef();
  // const responseListener = useRef();
  // const [date, setDate] = useState(new Date());
  // const [active, setActive] = useState(false);
  // const [show, setShow] = useState(false);
  // const [sound, setSound] = useState();
  // const [showCancel, setShowCancel] = useState(false);

  // useEffect(() => {
  //   registerForPushNotificationsAsync().then((token) => setExpoPushToken(token));

  //   notificationListener.current = Notifications.addNotificationReceivedListener(
  //     (notification) => {
  //       setNotification(notification);
  //       //aqui recebe notificacao
  //       alarmPlaying = true;
  //       playSound();
  //       setShowCancel(true);
  //       setTimeout(() => {
  //         if (alarmPlaying) {
  //           fetch('http://192.168.25.4:3000/', {
  //             method: 'POST',
  //             headers: {
  //               Accept: 'application/json',
  //               'Content-Type': 'application/json',
  //             },
  //             body: JSON.stringify({
  //               names: savedContacts,
  //             }),
  //           });
  //           console.log('sent:');
  //           console.log(savedContacts);
  //         }
  //       }, 5000);
  //     }
  //   );

  //   responseListener.current = Notifications.addNotificationResponseReceivedListener(
  //     (response) => {
  //       console.log(response);
  //     }
  //   );

  //   return () => {
  //     Notifications.removeNotificationSubscription(notificationListener.current);
  //     Notifications.removeNotificationSubscription(responseListener.current);
  //   };
  // }, []);

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate;
  //   setDate(currentDate);
  // };

  // const showMode = (currentMode) => {
  //   DateTimePickerAndroid.open({
  //     value: date,
  //     onChange,
  //     mode: currentMode,
  //     is24Hour: true,
  //     display: 'spinner',
  //   });
  // };

  // async function schedulePushNotification() {
  //   console.log(date.getHours());
  //   console.log(date.getMinutes());
  //   await Notifications.scheduleNotificationAsync({
  //     content: {
  //       title: '',
  //       body: '',
  //       data: { data: '' },
  //     },
  //     trigger: { hour: date.getHours(), minute: date.getMinutes(), repeats: true },
  //   });
  // }

  // async function registerForPushNotificationsAsync() {
  //   let token;

  //   if (Platform.OS === 'android') {
  //     await Notifications.setNotificationChannelAsync('default', {
  //       name: 'default',
  //       importance: Notifications.AndroidImportance.MAX,
  //       vibrationPattern: [0, 250, 250, 250],
  //       lightColor: '#FF231F7C',
  //     });
  //   }

  //   if (Device.isDevice) {
  //     const { status: existingStatus } = await Notifications.getPermissionsAsync();
  //     let finalStatus = existingStatus;
  //     if (existingStatus !== 'granted') {
  //       const { status } = await Notifications.requestPermissionsAsync();
  //       finalStatus = status;
  //     }
  //     if (finalStatus !== 'granted') {
  //       alert('Failed to get push token for push notification!');
  //       return;
  //     }
  //     token = (await Notifications.getExpoPushTokenAsync()).data;
  //     console.log(token);
  //   } else {
  //     alert('Must use physical device for Push Notifications');
  //   }

  //   return token;
  // }

  const contactInputHandler = (enteredContact) => {
    if (checkTextInput()) {
      setContact([textInputName, textInputEmail]);
      console.log('Salvando Contatos...');

      //
      addContactHandler();
    }
  };
  const nameInputHandler = (enteredContact) => {
    setTextInputName(enteredContact);
    setContact([textInputName, textInputEmail]);
    console.log('Salvando Contatos...');

    addContactHandler();
  };
  const emailInputHandler = (enteredContact) => {
    setTextInputEmail(enteredContact);
    setContact([textInputName, textInputEmail]);
    console.log('Salvando Contatos...');

    addContactHandler();
  };

  const addContactHandler = () => {
    console.log('Chegou aqui 1');
    if (!contacts.some((item) => item.key == contact) && contact[0] != '') {
      console.log('Chegou aqui 2');
      setContacts((currentContacts) => [
        ...currentContacts,
        { key: contact, value: contact },
      ]);
      savedContacts.push(contact);
      console.log('SavedContacts:', savedContacts);
    }
    // setContact('');
    setContact(['', '']);
  };

  const removeContactHandler = (contactId) => {
    savedContacts.splice(savedContacts.indexOf(contactId), 1);
    console.log(savedContacts);
    setContacts((currentContacts) => {
      return currentContacts.filter((contact) => contact.key !== contactId);
    });
  };

  const [textInputName, setTextInputName] = useState('');
  const [textInputEmail, setTextInputEmail] = useState('');

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
    //Do whatever you want
    alert('Success');
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
            // value={contact}
            value={textInputName}
            // onChangeText={contactInputHandler}
            onChangeText={setTextInputName}
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
            // value={contact}
            // onChangeText={contactInputHandler}
            onChangeText={setTextInputEmail}
          />

          <Button
            style={{ marginTop: 40 }}
            buttonColor="#866bcf"
            mode="elevated"
            textColor="white"
            // onPress={addContactHandler}
            onPress={contactInputHandler}
          >
            Adicionar Contato
          </Button>
          <Button
            style={{ marginTop: 40 }}
            buttonColor="#866bcf"
            mode="elevated"
            textColor="white"
            // onPress={addContactHandler}
            onPress={() => {
              console.log(contact, contacts);
            }}
          >
            Console
          </Button>

          {/* TESTE */}
          {/* <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />
          {!!this.state.nameError && (
            <Text style={{ color: 'red' }}>{this.state.nameError}</Text>
          )}
          <Button
            onPress={() => {
              if (this.state.text.trim() === '') {
                this.setState(() => ({ nameError: 'First name required.' }));
              } else {
                this.setState(() => ({ nameError: null }));
              }
            }}
            title="Login"
          /> */}
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
          data={['joao', 'jose', 'ronaldo', 'amauri']}
          renderItem={({ item }) =>
            contacts[0] === 0 ? (
              <></>
            ) : (
              <View style={styles.dataContainer}>
                <Text style={styles.dataText}>{item}</Text>
                <Text style={styles.dataText}>email</Text>
                <TouchableOpacity onPress={() => {}}>
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
