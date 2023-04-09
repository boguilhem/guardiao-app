import { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, FlatList, Button } from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Audio } from 'expo-av';

const savedContacts = []
alarmPlaying = false;
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: false,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const AlarmeNoturno = () => {
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
  useEffect(() => {

    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
      //aqui recebe notificacao
      alarmPlaying = true;
      playSound()
      setShowCancel(true)
      setTimeout(() => {
        if (alarmPlaying) {
          fetch('http://192.168.0.4:3000/', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              names: savedContacts
            }),
          });
          console.log("sent:");
          console.log(savedContacts);
        }
      }
        , 5000);

    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);

    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);

    };
  }, []);


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate)

  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
      display: 'spinner'
    });
  };


  const showTimepicker = () => {
    showMode('time');

  };
  const disableTimer = () => {
    setActive(false);
    Notifications.cancelAllScheduledNotificationsAsync()
  };
  const enableTimer = () => {
    Notifications.cancelAllScheduledNotificationsAsync()
    setActive(true);
    schedulePushNotification();
  };

  async function schedulePushNotification() {
    console.log(date.getHours())
    console.log(date.getMinutes())
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "",
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
    if (!(contacts.some(item => item.key == contact)) && contact != "") {
      setContacts(currentContacts => [...currentContacts, { key: contact, value: contact }]);
      savedContacts.push(contact);
      console.log(savedContacts)
    }
    setContact('');
  };

  const removeContactHandler = (contactId) => {
    savedContacts.splice(savedContacts.indexOf(contactId), 1)
    console.log(savedContacts)
    setContacts(currentContacts => {
      return currentContacts.filter((contact) => contact.key !== contactId);
    });

  };

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require('../../assets/sounds/alarm.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.setIsLoopingAsync(true)
    await sound.playAsync();
    
  }
const stopAlarm = ()=>{
  alarmPlaying =false;
  setShowCancel(false);
  sound.unloadAsync()
}

  return (
    <View>

      <Button onPress={showTimepicker} title="Selecionar Horario" />
      <Button onPress={enableTimer} title="Ativar Alarme" />
      {active ? <Button onPress={disableTimer} title="Desativar Alarme" /> : ""}
      <Text>{date.getHours().toString().padStart(2, '0')}:{date.getMinutes().toString().padStart(2, '0')}</Text>

      {active ? <Text>Alarme ativado para: {date.getHours().toString().padStart(2, '0')}:{date.getMinutes().toString().padStart(2, '0')}</Text> : <Text>Alarme Desativado</Text>}
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
      <Text>Your expo push token: {expoPushToken}</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Title: {notification && notification.request.content.title} </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
      </View>
      <TextInput style={{
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
      }}
        placeholder=""
        onChangeText={contactInputHandler}
        value={contact}
      />
      <Button title="Adicionar Contato" onPress={addContactHandler} />
      <Text>Seus contatos:</Text>
      <FlatList
        data={contacts}
        renderItem={contactData => (
          <View>
            <Text>{contactData.item.value}</Text>
            <Button title="remover" onPress={() => removeContactHandler(contactData.item.key)} />
          </View>
        )}
      />
      {showCancel ? <Button onPress={stopAlarm} title="OK" /> : ""}
    </View>

  );
};



export default AlarmeNoturno;
