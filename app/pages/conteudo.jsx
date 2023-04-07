import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';

import styles from '../../styles/conteudos.style.js';
import { COLORS, icons, images } from '../../constants';
import { ScreenHeaderBtn } from '../../components';

const Conteudos = () => {
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
              source={icons.conteudos}
              resizeMode="contain"
              style={styles.btnImg(30)}
            />
            <Text style={styles.title}>Conteúdos</Text>
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

export default Conteudos;
