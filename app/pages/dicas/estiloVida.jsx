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

const EstiloVida = () => {
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
              source={icons.estiloDeVida}
              resizeMode="contain"
              style={styles.btnImg(30)}
            />
            <Text style={styles.title}>Estilo de Vida</Text>
          </View>
          <View style={styles.messageContainer}>
            <Text style={styles.subtitle}>Descobri que tenho diabetes...</Text>
            <Text style={styles.subtitle}>Que mudanças devo fazer ao meu estilo de vida?</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.content}>
              {
                'Hábitos como manter a dieta equilibrada, vida ativa e controle constante da taxa de glicemia podem garantir bem-estar aos pacientes. “Além do monitoramento da glicose e do uso de medicação quando necessário, as pessoas podem controlar com exercícios físicos e mudanças na dieta. Muitas vezes, são as pequenas mudanças que trazem os maiores resultados”, endossa Patrícia Ruffo, nutricionista e Gerente Científico da Divisão Nutricional da Abbott no Brasil.'
              }
              {'\n'}
              {'Seja exigente com os carboidratos, Para controlar o diabetes e perder peso quando necessário, é importante cuidar da quantidade e dos tipos de carboidratos que você consome: prefira alimentos e bebidas que minimizem a reação do açúcar no sangue, enquanto fornecem quantidade necessária de fibras.'}
              {'\n'}
              {'\n'}
              {
                'Defina metas realistas em relação a perda de peso, é mais fácil fazer mudanças graduais. Transforme os objetivos em metas menores. Quando for necessário perder peso, por exemplo, em vez de estabelecer um número em quilos, meça com uma fita métrica as alterações na cintura, quadril, coxas e braços.'
              }
              {'\n'}
              {'\n'}
              {
                'Mantenha um diário alimentar, planeje suas refeições com antecedência e siga o plano.'
              }
              {'\n'}
              {'\n'}
              {'Exercite-se regularmente, de acordo com a Associação Americana de Diabetes (American Diabetes Association), exercitar-se com frequência pode reduzir a glicemia e melhorar os níveis de A1C (teste de hemoglobina glicada). A associação recomenda pelo menos 30 minutos de exercícios físicos moderados durante cinco dias por semana ou um total de 150 minutos semanais.'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EstiloVida;
