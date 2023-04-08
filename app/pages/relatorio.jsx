import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

import { LineChart } from 'react-native-chart-kit';

import { Stack, useRouter } from 'expo-router';

import styles from '../../styles/relatorio.style.js';
import { COLORS, icons, images } from '../../constants';
import { ScreenHeaderBtn, GlicemicData } from '../../components';
import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;

const Relatorio = () => {
  const router = useRouter();

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Rainy Days'], // optional
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

      <ScrollView showsVerticalScrollIndicator={false}>
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
                    data: [140, 196, 174, 190, 160, 192, 180],
                  },
                ],
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
              value=""
              onChange={() => {}}
              placeholder="Medição"
            ></TextInput>
            <TouchableOpacity
              style={styles.btnInput}
              onPress={() => {
                console.log('ADD MEDIÇÃO');
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

          <GlicemicData
            iconUrl={icons.clearIcon}
            dimension={20}
            handlePress={console.log('CLEAR')}
          />

          {/* <View style={styles.dataContainer}>
            <Text style={styles.dataText}>Medição</Text>
            <Text style={styles.dataText}>Horário</Text>
            <TouchableOpacity
              onPress={() => {
                console.log('CLEAR');
              }}
            >
              <Image
                source={icons.clearIcon}
                resizeMode="contain"
                style={styles.btnImg(20)}
              />
            </TouchableOpacity>
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Relatorio;
