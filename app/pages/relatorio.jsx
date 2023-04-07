import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import { LineChart } from 'react-native-chart-kit';

import { Stack, useRouter } from 'expo-router';

import styles from '../../styles/conteudos.style.js';
import { COLORS, icons, images } from '../../constants';
import { ScreenHeaderBtn } from '../../components';
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

          <View>
            <Text>Bezier Line Chart</Text>
            <LineChart
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                    ],
                  },
                ],
              }}
              width={Dimensions.get('window').width} // from react-native
              height={220}
              yAxisLabel="$"
              yAxisSuffix="k"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#ffa726',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.subtitle}>Água é realmente importante para a saúde?</Text>
            <Text style={styles.preview}>
              A água é um dos principais alimentos. Manter seu organismo hidratado é
              fundamental para você ter saúde. Nada substitui a....
            </Text>
            <TouchableOpacity
              style={styles.contentBtn}
              onPress={() => {
                router.push(
                  `https://diabetes.org.br/agua-e-realmente-importante-para-a-saude/`
                );
              }}
            >
              <Text style={styles.btnText}>Continuar Lendo</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.subtitle}>Agua é realmente importante para a saúde?</Text>
            <Text style={styles.preview}>
              A água é um dos principais alimentos. Manter seu organismo hidratado é
              fundamental para você ter saúde. Nada substitui a....
            </Text>
            <TouchableOpacity
              style={styles.contentBtn}
              onPress={() => {
                router.push(
                  `https://diabetes.org.br/agua-e-realmente-importante-para-a-saude/`
                );
              }}
            >
              <Text style={styles.btnText}>Continuar Lendo</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.subtitle}>Agua é realmente importante para a saúde?</Text>
            <Text style={styles.preview}>
              A água é um dos principais alimentos. Manter seu organismo hidratado é
              fundamental para você ter saúde. Nada substitui a....
            </Text>
            <TouchableOpacity
              style={styles.contentBtn}
              onPress={() => {
                router.push(
                  `https://diabetes.org.br/agua-e-realmente-importante-para-a-saude/`
                );
              }}
            >
              <Text style={styles.btnText}>Continuar Lendo</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.subtitle}>Agua é realmente importante para a saúde?</Text>
            <Text style={styles.preview}>
              A água é um dos principais alimentos. Manter seu organismo hidratado é
              fundamental para você ter saúde. Nada substitui a....
            </Text>
            <TouchableOpacity
              style={styles.contentBtn}
              onPress={() => {
                router.push(
                  `https://diabetes.org.br/agua-e-realmente-importante-para-a-saude/`
                );
              }}
            >
              <Text style={styles.btnText}>Continuar Lendo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Relatorio;
