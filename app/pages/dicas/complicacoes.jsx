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

const Complicacoes = () => {
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
              source={icons.complicacoes}
              resizeMode="contain"
              style={styles.btnImg(30)}
            />
            <Text style={styles.title}>Complicações</Text>
          </View>
          <View style={styles.messageContainer}>
            <Text style={styles.subtitle}>Descobri que tenho diabetes...</Text>
            <Text style={styles.subtitle}>Quais complicações podem ser causadas pela doença?</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.content}>
              {
                'Duas das principais complicalçoes são a Cetoacidose diabética e a Neuropatia diabética'
              }
              {'\n'}
              {'\n'}
              {
                'Cetoacidose Diabética:'
              }
              {'\n'}
              {'\n'}
              {'A Cetoacidose diabética ocorre principalmente no diabetes tipo 1, mas pode também ocorrer no tipo 2. Acontece quando os níveis de açúcar (glicose) no sangue do paciente diabético encontram-se muito altos e estão acompanhados do aumento da quantidade de cetonas no sangue também. Suas principais causas são:'}
              {'\n'}
              {'\n'}

              {'Omissão do tratamento com insulina ou remédios; '}
              {'\n'}
              {'Mau funcionamento da Bomba de Insulina;'}
              {'\n'}
              {'\n'}
              {'Doenças agudas: infecções (urinária, pulmonar, gripe), infarto do miocárdio, hemorragia digestiva, entre outras;'}
              {'\n'}
              {'\n'}
              {'Distúrbios endócrinos: feocromocitoma, hipertireoidismo, acromegalia;'}
              {'\n'}
              {'\n'}
              {'Drogas (corticóides, agonistas adrenérgicos, fenitoína, beta-bloqueadores, antipsicóticos, álcool, cocaína);'}
              {'\n'}
              {'\n'}
              {'Desidratação: ingestão deficiente de água, diarreia, sauna; Ingestão excessiva de refrigerantes ou líquidos açucarados.'}
              {'\n'}
              {'\n'}
              {'Esta é uma emergência médica e o Pronto Socorro deve ser procurado imediatamente.'}
              {'\n'}
              {'\n'}
              {
                '10 – Procure usar alimentos menos processados: pães integrais, aveia, arroz integral, macarrão integral, etc.'
              }
              {'\n'}
              {'\n'}
              {'Neuropatia Diabética:'}
              {'\n'}
              {'\n'}
              {'Você sabe o que são nervos periféricos? Eles carregam as informações que saem do cérebro e as que chegam até ele, além de sinais da medula espinhal para o resto do corpo. Os danos a esses nervos, condição chamada de neuropatia periférica, fazem com que esse mecanismo não funcione bem. A neuropatia pode afetar um único nervo, um grupo de nervos ou nervos no corpo inteiro.'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Complicacoes;
