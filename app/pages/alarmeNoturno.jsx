import { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  // Button,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import { Stack, useRouter } from 'expo-router';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Audio } from 'expo-av';

import { Button, Switch } from 'react-native-paper';
import { COLORS, icons, images } from '../../constants';
import { ScreenHeaderBtn, SwitchComponent, PaperButton } from '../../components';
import styles from '../../styles/alarmeNoturno.style.js';

const savedContacts = [];
alarmPlaying = false;
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: false,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const AlarmeNoturno = () => {
  const router = useRouter();
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState('');
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const [date, setDate] = useState(new Date());
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const [sound, setSound] = useState();
  const [showCancel, setShowCancel] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(
      (notification) => {
        setNotification(notification);
        //aqui recebe notificacao
        alarmPlaying = true;
        playSound();
        setShowCancel(true);
        setTimeout(() => {
          if (alarmPlaying) {
            fetch('http://192.168.25.4:3000/', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                names: savedContacts,
              }),
            });
            console.log('sent:');
            console.log(savedContacts);
          }
        }, 5000);
      }
    );

    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log(response);
      }
    );

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);

    {
      active ? disableTimer() : enableTimer();
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
      display: 'spinner',
    });
  };

  const showTimepicker = () => {
    showMode('time');
  };
  const disableTimer = () => {
    setActive(false);
    Notifications.cancelAllScheduledNotificationsAsync();
  };
  const enableTimer = () => {
    Notifications.cancelAllScheduledNotificationsAsync();
    setActive(true);
    schedulePushNotification();
  };

  async function schedulePushNotification() {
    console.log(date.getHours());
    console.log(date.getMinutes());
    await Notifications.scheduleNotificationAsync({
      content: {
        title: '',
        body: '',
        data: { data: '' },
      },
      trigger: { hour: date.getHours(), minute: date.getMinutes(), repeats: true },
    });
  }

  async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }

    return token;
  }

  const contactInputHandler = (enteredContact) => {
    setContact(enteredContact);
  };

  const addContactHandler = () => {
    if (!contacts.some((item) => item.key == contact) && contact != '') {
      setContacts((currentContacts) => [
        ...currentContacts,
        { key: contact, value: contact },
      ]);
      savedContacts.push(contact);
      console.log(savedContacts);
    }
    setContact('');
  };

  const removeContactHandler = (contactId) => {
    savedContacts.splice(savedContacts.indexOf(contactId), 1);
    console.log(savedContacts);
    setContacts((currentContacts) => {
      return currentContacts.filter((contact) => contact.key !== contactId);
    });
  };

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/sounds/alarm.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.setIsLoopingAsync(true);
    await sound.playAsync();
  }
  const stopAlarm = () => {
    alarmPlaying = false;
    setShowCancel(false);
    sound.unloadAsync();
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
          <View style={styles.cardBtn}>
            <View>
              <Text style={styles.hourText}>
                {date.getHours().toString().padStart(2, '0')}:
                {date.getMinutes().toString().padStart(2, '0')}
              </Text>
              <View style={styles.alarmContainer}>
                <Text>Todos os Dias</Text>
                {/* <SwitchComponent
                  pressHandler={() => {
                    enableTimer;
                  }}
                /> */}
                <Switch
                  value={isSwitchOn}
                  onValueChange={onToggleSwitch}
                  color={'lightgreen'}
                  style={styles.alarmContainerSpacing}
                />
                {/* <TouchableOpacity onPress={() => {}} style={styles.alarmContainerSpacing}>
                  <Image
                    source={icons.clearIcon}
                    resizeMode="contain"
                    style={styles.btnImg(20)}
                  />
                </TouchableOpacity> */}
                {/* <TouchableOpacity onPress={handlePress}>
                  <Image
                    source={iconUrl}
                    resizeMode="contain"
                    style={styles.btnImg(dimension)}
                  />
                </TouchableOpacity> */}
              </View>
            </View>
          </View>
        </View>

        <Button
          icon="clock"
          mode="elevated"
          buttonColor="#0077e0"
          textColor="white"
          onPress={showTimepicker}
        >
          SELECIONAR UM HORÁRIO
        </Button>

        {/* <Button mode="contained" textColor="white" onPress={enableTimer}>
          Ativar Alarme
        </Button>

        {active ? (
          <Button mode="contained" textColor="white" onPress={disableTimer}>
            Desativar Alarme
          </Button>
        ) : (
          ''
        )} */}

        {/* {active ? (
          <Text>
            Alarme ativado para: {date.getHours().toString().padStart(2, '0')}:
            {date.getMinutes().toString().padStart(2, '0')}
          </Text>
        ) : (
          <Text>Alarme Desativado</Text>
        )} */}
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
        {/* <TextInput
          style={{
            width: '80%',
            borderColor: 'black',
            borderWidth: 1,
            padding: 10,
          }}
          placeholder=""
          onChangeText={contactInputHandler}
          value={contact}
        /> */}

        {/* <Button title="Adicionar Contato" onPress={addContactHandler} /> */}
        {/* <Button mode="contained" textColor="white" onPress={addContactHandler}>
          Adicionar Contato
        </Button> */}

        {/* <Text>Seus contatos:</Text> */}

        <FlatList
          data={contacts}
          renderItem={(contactData) => (
            <View>
              <Text>{contactData.item.value}</Text>
              {/* <Button
                title="remover"
                onPress={() => removeContactHandler(contactData.item.key)}
              /> */}
              <Button
                mode="contained"
                textColor="white"
                onPress={() => removeContactHandler(contactData.item.key)}
              >
                Remover Contato
              </Button>
            </View>
          )}
        />

        {showCancel ? (
          <Button
            icon="clock"
            mode="elevated"
            buttonColor="red"
            textColor="white"
            onPress={stopAlarm}
          >
            PARAR ALARME
          </Button>
        ) : (
          ''
        )}

        <View>
          <Button
            mode="elevated"
            buttonColor="#D9D9D9"
            textColor="black"
            icon={'contacts'}
            onPress={() => {
              router.push(`/pages/contatos`);
            }}
            style={{ height: '30%', justifyContent: 'center' }}
          >
            Contatos
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AlarmeNoturno;
