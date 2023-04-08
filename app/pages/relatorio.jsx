import { useState, useEffect } from 'react';
import React from 'react';

import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Alert,
} from 'react-native';

import { LineChart } from 'react-native-chart-kit';

import { Stack, useRouter } from 'expo-router';

import styles from '../../styles/relatorio.style.js';
import { COLORS, icons, images, SIZES } from '../../constants';
import { ScreenHeaderBtn, GlicemicData } from '../../components';
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const screenWidth = Dimensions.get('window').width;

let STORAGE_KEY = '@user_input';

const Relatorio = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');
  const [inputArray, SetInputArray] = useState([0]);

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

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
      console.log('jasonValue1', jsonValue);

      if (jsonValue !== null) {
        console.log('jasonValue2', jsonValue);
        SetInputArray(JSON.parse(jsonValue));
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

  const showDate = () => {
    //Get Current Time Hours
    let hours = new Date().getHours();

    //Get Current Time Minutes
    let min = new Date().getMinutes();

    let finalObject = hours + ':' + min;

    console.log(finalObject);
    return finalObject;
  };

  useEffect(() => {
    readData();
  }, []);

  const onChangeText = (value) => setInputValue(value);

  const onSubmitEditing = () => {
    if (inputValue) {
      data.datasets[0].data.push(parseInt(inputValue));
      saveData(data.datasets[0].data);
    }
  };

  let data = {
    labels: [
      '00h',
      '02h',
      '04h',
      '06h',
      '08h',
      '10h',
      '12h',
      '14h',
      '16h',
      '18h',
      '20h',
      '22h',
      '24h',
    ],
    datasets: [
      {
        data: inputArray,
      },
    ],
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
            source={icons.relatorio}
            resizeMode="contain"
            style={styles.btnImg(30)}
          />
          <Text style={styles.title}>Histórico Glicêmico</Text>
        </View>

        <View style={styles.graphContainer}>
          <LineChart
            data={{
              labels: data.labels,
              datasets: data.datasets,
            }}
            width={screenWidth - 30} // from react-native
            height={240}
            yAxisInterval={0.5} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#b3ccea',
              backgroundGradientFrom: '#b3ccea',
              backgroundGradientTo: '#b3ccea',
              decimalPlaces: 0, // optional, defaults to 2dp

              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '4',
                strokeWidth: '1',
                stroke: '#ffffff',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              margin: 0,
              padding: 0,
              paddingHorizontal: 0,
              borderRadius: 16,
            }}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.dataInput}
            value={inputValue}
            onChangeText={onChangeText}
            placeholder="Medição"
            keyboardType="numeric"
          ></TextInput>
          <TouchableOpacity
            style={styles.btnInput}
            onPress={() => {
              onSubmitEditing();
              forceUpdate();
            }}
          >
            <Image
              source={icons.circleButton}
              resizeMode="contain"
              style={styles.btnImg(40)}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.subtitle}>Hoje</Text>
        </View>

        <FlatList
          data={data.datasets[0].data}
          renderItem={({ item }) => (
            <GlicemicData
              iconUrl={icons.clearIcon}
              dimension={20}
              medicao={item}
              horario={showDate()}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Relatorio;
