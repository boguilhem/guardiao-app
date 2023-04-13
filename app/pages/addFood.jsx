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

import { Stack, useRouter } from 'expo-router';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Searchbar, IconButton, MD3Colors } from 'react-native-paper';
import { useIsFocused, useRoute } from '@react-navigation/native';

import { COLORS, SIZES, icons, images, FONT } from '../../constants';
import { ScreenHeaderBtn } from '../../components';
import styles from '../../styles/carboidratos.style.js';

let STORAGE_KEY = '@user_food';
let STORAGE_KEY2 = '@food_list';

// let savedFood = '';
let selectedFood;

const AddFood = () => {
  const router = useRoute();
  // const { nomes } = router.params;
  // const { id } = router.params;
  const isFocused = useIsFocused();

  const [date, setDate] = useState(new Date());
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const [sound, setSound] = useState();
  const [showCancel, setShowCancel] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [savedFood, setSavedFood] = useState('');
  const [savedFoodData, setSavedFoodData] = useState({});
  const [foodList, setFoodList] = useState([{}]);
  const [quantity, setQuantity] = useState(1);

  const saveData = async (value) => {
    console.log('Value: ', value);
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(STORAGE_KEY2, jsonValue);
    } catch (e) {
      alert('Failed to save the data to the storage');
    }
  };

  const readData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      const jsonValue2 = await AsyncStorage.getItem(STORAGE_KEY2);
      if (jsonValue !== null) {
        await setSavedFood(JSON.parse(jsonValue));
        await setSavedFoodData(
          alimentos.find(
            (item) => item.nome.toLowerCase() === JSON.parse(jsonValue).toLowerCase()
          )
        );
      }
      if (jsonValue2 !== null) {
        await setFoodList(JSON.parse(jsonValue2));
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

  const handleAddFood = () => {
    // console.log(savedFood, savedFoodData);
    console.log('teste');

    if (Object.keys(foodList[0]).length === 0) {
      console.log('Empty');
      setFoodList(() => [{ name: savedFood, value: quantity }]);
      saveData([{ name: savedFood, value: quantity }]);
    } else {
      console.log('not empty');
      if (foodList.some((item) => item.name == savedFood)) {
        setFoodList((prevFoodList) =>
          prevFoodList.map((food) => {
            if (food.name === savedFood) {
              let newValue = food.value + quantity;
              return { ...food, value: newValue };
            }
            return food;
          })
        );
        saveData(
          foodList.map((food) => {
            if (food.name === savedFood) {
              let newValue2 = food.value + quantity;
              return { ...food, value: newValue2 };
            }
            return food;
          })
        );
      } else {
        console.log('out');
        setFoodList((prevFoodList) => [
          ...prevFoodList,
          { name: savedFood, value: quantity },
        ]);
        saveData([...foodList, { name: savedFood, value: quantity }]);
      }
    }
    // setFoodList((currentFoods) => [...currentFoods, { key: savedFood, value: quantity }]);
    // saveData([...currentFoods, { key: savedFood, value: quantity }]);
    // if (inputValue) {
    //   if (inputArray[0] === 0) {
    //     SetInputArray([parseInt(inputValue)]);
    //     SetHistoryArray([[inputValue, showDate()]]);
    //     // console.log('Console 1:', inputArray, historyArray);
    //   } else {
    //     data.datasets[0].data.push(parseInt(inputValue));
    //     tuplesGraph.push([inputValue, showDate()]);
    //   }
    //   // console.log('Console 2:', inputArray, historyArray);
    //   SetGlobalArray([inputArray, historyArray]);

    // saveData([inputArray, historyArray]);
    // }
  };

  // const setSavedContacts = (contacts) => {
  //   savedContacts = [];
  //   contacts.forEach((element) => {
  //     savedContacts.push([element.key, element.value]);
  //   });
  // };

  useEffect(() => {
    if (isFocused) {
      readData();
    }

    return () => {};
  }, [isFocused]);

  const onChangeSearch = (query) => setSearchQuery(query);

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

        <Text style={styles.subtitle}>{savedFoodData.nome}</Text>
        <Text style={{ fontSize: 16, marginTop: 10, marginBottom: 20 }}>Quantidade</Text>

        <View style={styles.addingContainer}>
          <View>
            <View style={styles.addingCounter}>
              <IconButton
                icon="minus"
                mode="contained"
                iconColor="white"
                containerColor={COLORS.skyBlue}
                size={20}
                onPress={() => setQuantity(quantity - 1)}
              />
              <Text style={{ fontSize: SIZES.xLarge }}>{quantity}</Text>
              <IconButton
                icon="plus"
                mode="contained"
                iconColor="white"
                containerColor={COLORS.skyBlue}
                size={20}
                onPress={() => setQuantity(quantity + 1)}
              />
            </View>
            <Text style={styles.cardTextSmall}>{savedFoodData.recipiente}</Text>
          </View>
          <View style={styles.addingGrams}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
              {savedFoodData.quantidadeCarb * quantity + 'g'}
            </Text>
            <Button
              mode="elevated"
              buttonColor={COLORS.skyBlue}
              textColor="white"
              contentStyle={{ margin: -5 }}
              onPress={handleAddFood}
            >
              Adicionar
            </Button>
            <Button
              mode="elevated"
              buttonColor={COLORS.skyBlue}
              textColor="white"
              contentStyle={{ margin: -5 }}
              onPress={() =>
                console.log('Console: ', savedFood, savedFoodData, 'FoodList: ', foodList)
              }
            >
              Console
            </Button>
            <Button
              mode="elevated"
              buttonColor={COLORS.skyBlue}
              textColor="white"
              contentStyle={{ margin: -5 }}
              onPress={clearStorage}
            >
              Clear
            </Button>
          </View>
        </View>

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

export default AddFood;
