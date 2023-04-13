import { useState, useEffect } from 'react';

import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import { Stack, useRouter, useSearchParams, Link } from 'expo-router';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Searchbar } from 'react-native-paper';
import { useIsFocused, useRoute } from '@react-navigation/native';

import { COLORS, SIZES, icons, images } from '../../constants';
import { ScreenHeaderBtn } from '../../components';
import styles from '../../styles/carboidratos.style.js';

let STORAGE_KEY = '@user_food';
let STORAGE_KEY2 = '@food_list';

let savedFood = [];

const alimentos = [
  {
    nome: 'Suco de Laranja',
    recipiente: 'Copo (250ml)',
    quantidadeCarb: 25,
  },
  {
    nome: 'Arroz Cozido',
    recipiente: 'Colher de Sopa (20g)',
    quantidadeCarb: 23,
  },
  {
    nome: 'Feijão Preto Cozido',
    recipiente: 'Concha Média (80g)',
    quantidadeCarb: 13,
  },
  {
    nome: 'Pão Francês',
    recipiente: 'Unidade (25g)',
    quantidadeCarb: 13,
  },
  {
    nome: 'Mortadela',
    recipiente: 'Fatia (15g)',
    quantidadeCarb: 0.5,
  },
  {
    nome: 'Muçarela',
    recipiente: 'Fatia (28g)',
    quantidadeCarb: 0.9,
  },
];

const Carboidratos = () => {
  const router = useRouter();
  const isFocused = useIsFocused();

  const [date, setDate] = useState(new Date());
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const [sound, setSound] = useState();
  const [showCancel, setShowCancel] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [foodList, setFoodList] = useState([{}]);
  const [totalCarbs, setTotalCarbs] = useState(0);

  const saveData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
      alert('Failed to save the data to the storage');
    }
  };
  const saveDataRem = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(STORAGE_KEY2, jsonValue);
    } catch (e) {
      alert('Failed to save the data to the storage');
    }
  };

  const readData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY2);
      if (jsonValue !== null) {
        await setFoodList(JSON.parse(jsonValue));
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
    if (isFocused) {
      readData();
    }

    return () => {};
  }, [isFocused]);

  useEffect(() => {
    const sum = foodList.reduce((acc, curr) => {
      const food = alimentos.find((item) => item.nome === curr.name);
      if (food) {
        return acc + curr.value * food.quantidadeCarb;
      }
      return acc;
    }, 0);
    setTotalCarbs(sum);
  }, [foodList]);

  const onChangeSearch = (query) => setSearchQuery(query);

  const handleSearch = (searchTerm) => {
    const result = alimentos.find(
      (item) => item.nome.toLowerCase() === searchTerm.toLowerCase()
    );
    if (result !== undefined) {
      saveData(result.nome);
      setSearchQuery('');
      router.push(`/pages/addFood`);
    }
  };

  const removeFood = (foodId) => {
    foodList.splice(
      foodList.findIndex((item) => item.name === foodId),
      1
    );
    setFoodList((currentFoods) => {
      return currentFoods.filter((food) => food.name !== foodId);
    });
    saveDataRem([...foodList].filter((food) => food.name !== foodId));
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
            source={icons.carboidratos}
            resizeMode="contain"
            style={styles.btnImg(30)}
          />
          <Text style={styles.title}>Contagem Carboidratos</Text>
        </View>

        <Text style={styles.subtitle}>Carboidratos Totais Diário</Text>

        <View style={styles.counterContainer}>
          <View>
            <Text style={styles.carbCounter}>{totalCarbs + 'g'}</Text>
          </View>
        </View>

        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchBar}
          mode="bar"
          onIconPress={() => handleSearch(searchQuery)}
        />

        <FlatList
          data={foodList}
          renderItem={(alimento) =>
            Object.keys(foodList[0]).length === 0 ? (
              <></>
            ) : (
              <View style={styles.dataContainer}>
                <View style={styles.cardsContainer}>
                  <View style={styles.cardInfo}>
                    <View style={styles.cardBtn}>
                      <Text style={styles.cardText}>
                        {alimento.item.name}{' '}
                        {alimentos.find(
                          (item) =>
                            item.nome.toLowerCase() === alimento.item.name.toLowerCase()
                        ).quantidadeCarb *
                          alimento.item.value +
                          'g'}
                      </Text>
                      <Text style={styles.cardTextSmall}>
                        {
                          alimentos.find(
                            (item) =>
                              item.nome.toLowerCase() === alimento.item.name.toLowerCase()
                          ).recipiente
                        }
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={
                        () => removeFood(alimento.item.name)
                        // clearStorage()
                        // handleCarb
                        // () => {

                        //   console.log(foodList);
                        //   // console.log('Alimento:', alimento.item.name);
                        //   // console.log('teste');
                        //   // clearStorage();
                        //   // console.log(
                        //   //   'AlimentoFind:',
                        //   //   alimentos.find(
                        //   //     (item) =>
                        //   //       item.nome.toLowerCase() === alimento.item.key.toLowerCase()
                        //   //   ).recipiente
                        //   // );
                        // }
                      }
                    >
                      <Image
                        source={icons.clearIcon}
                        resizeMode="contain"
                        style={styles.btnImg(20)}
                      />
                    </TouchableOpacity>
                  </View>
                  {/* <Text style={styles.dataEmail}>{contactData.item.value}</Text> */}
                  {/* <TouchableOpacity
                onPress={() => removeContactHandler(contactData.item.key)}
              >
                <Image
                  source={icons.clearIcon}
                  resizeMode="contain"
                  style={styles.btnImg(20)}
                />
              </TouchableOpacity> */}
                </View>
              </View>
            )
          }
        />

        {/* <Button
          icon="clock"
          mode="elevated"
          buttonColor="#0077e0"
          textColor="white"
          onPress={showTimepicker}
        >
          SELECIONAR UM HORÁRIO
        </Button> */}

        {/* {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )} */}

        {/* {showCancel ? (
          <Button
            icon="clock"
            mode="elevated"
            buttonColor="red"
            textColor="white"
            onPress={stopAlarm}
            style={{ height: '12%', justifyContent: 'center', marginTop: SIZES.xxLarge }}
          >
            PARAR ALARME
          </Button>
        ) : (
          ''
        )} */}

        {/* <View>
          <Button
            mode="elevated"
            buttonColor="#D9D9D9"
            textColor="black"
            icon={'contacts'}
            onPress={() => {
              router.push(`/pages/contatos`);
            }}
            style={{ height: '30%', justifyContent: 'center', marginTop: SIZES.xxLarge }}
          >
            Contatos
          </Button>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default Carboidratos;
