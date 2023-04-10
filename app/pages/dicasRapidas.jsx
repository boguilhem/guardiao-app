import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';

import styles from '../../styles/dicasRapidas.style.js';
import { COLORS, icons, images } from '../../constants';
import { ScreenHeaderBtn } from '../../components';

const DicasRapidas = () => {
  const router = useRouter();
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
              source={icons.dicasRapidas}
              resizeMode="contain"
              style={styles.btnImg(30)}
            />
            <Text style={styles.title}>Dicas Rápidas</Text>
          </View>

          <View>
            <View style={styles.cardsContainer}>
              <TouchableOpacity
                style={styles.cardBtn}
                onPress={() => {
                  router.push(`/pages/dicas/alimentacao`);
                }}
              >
                <Image
                  source={icons.alimentacao}
                  resizeMode="contain"
                  style={styles.btnImg(30)}
                />
                <Text style={styles.btnText}>Alimentação</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
              <TouchableOpacity
                style={styles.cardBtn}
                onPress={() => {
                  router.push(`/pages/dicas/introducao`);
                }}
              >
                <Image
                  source={icons.introducao}
                  resizeMode="contain"
                  style={styles.btnImg(30)}
                />
                <Text style={styles.btnText}>Introdução</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
              <TouchableOpacity
                style={styles.cardBtn}
                onPress={() => {
                  router.push(`/pages/dicas/medicamentos`);
                }}
              >
                <Image
                  source={icons.medicamentos}
                  resizeMode="contain"
                  style={styles.btnImg(30)}
                />
                <Text style={styles.btnText}>Medicamentos</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
              <TouchableOpacity
                style={styles.cardBtn}
                onPress={() => {
                  router.push(`/pages/dicas/estiloVida`);
                }}
              >
                <Image
                  source={icons.estiloDeVida}
                  resizeMode="contain"
                  style={styles.btnImg(30)}
                />
                <Text style={styles.btnText}>Estilo de Vida</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
              <TouchableOpacity
                style={styles.cardBtn}
                onPress={() => {
                  router.push(`/pages/dicas/emergencia`);
                }}
              >
                <Image
                  source={icons.emergencia}
                  resizeMode="contain"
                  style={styles.btnImg(30)}
                />
                <Text style={styles.btnText}>Emergência</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
              <TouchableOpacity
                style={styles.cardBtn}
                onPress={() => {
                  router.push(`/pages/dicas/complicacoes`);
                }}
              >
                <Image
                  source={icons.complicacoes}
                  resizeMode="contain"
                  style={styles.btnImg(30)}
                />
                <Text style={styles.btnText}>Complicações</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
              <TouchableOpacity
                style={styles.cardBtn}
                onPress={() => {
                  router.push(`/pages/dicas/glicose`);
                }}
              >
                <Image
                  source={icons.nivelGlicose}
                  resizeMode="contain"
                  style={styles.btnImg(30)}
                />
                <Text style={styles.btnText}>Nível de Glicose</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DicasRapidas;
