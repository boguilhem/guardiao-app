import { useState } from 'react';
import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';

import styles from '../../../styles/dicasRapidas.style.js';
import { COLORS, icons, images, SIZES } from '../../../constants/index.js';
import { ScreenHeaderBtn } from '../../../components/index.js';

const Glicose = () => {
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
              source={icons.nivelGlicose}
              resizeMode="contain"
              style={styles.btnImg(30)}
            />
            <Text style={styles.title}>Nível de Glicose</Text>
          </View>
          <View style={styles.messageContainer}>
            <Text style={styles.subtitle}>Descobri que tenho diabetes...</Text>
          </View>
          <View style={styles.contentContainer}>
          <Text style={styles.subtitle}>O que é a glicose?</Text>
            <Text style={styles.content}>
              {'A glicose é um carboidrato considerado uma das principais fontes de energia. O pâncreas é o órgão responsável em produzir o hormônio denominado insulina, e que é o responsável por permitir a entrada da glicose em nossas células. Quando o pâncreas está comprometido, ocorre uma deficiência na produção de insulina o que altera a captação da glicose pelas células resultando no aumento da glicose no sangue. Assim, se não forem tomadas as medidas corretas, a pessoa pode desenvolver diabetes mellitus.'}
              {'\n\n'}
            </Text>
            <Text style={styles.subtitle}>O que é Hipergliecemia?</Text>
            <Text style={styles.content}>
              {'A hiperglicemia é o excesso de açúcar no sangue, e causa:\n\n1-Cansaço;\n\n2-Visão turva;\n\n3-Polidipsia( sede em demasia);\n\n4-Poliúria (aumento do volume urinário).'}
              {'\n\n'}
            </Text>
            <Text style={styles.subtitle}>O que é Hipogliecemia?</Text>
            <Text style={styles.content}>
              {'A Hipoglicemia é a falta de açúcar no sangue e pode causar:\n\n1-Taquicardia;\n\n2-Sudorese;\n\n3-Tremores;\n\n4-Palidez.'}
            </Text>
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Glicose;
