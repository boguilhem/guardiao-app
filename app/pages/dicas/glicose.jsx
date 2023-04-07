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
              source={icons.alimentacao}
              resizeMode="contain"
              style={styles.btnImg(30)}
            />
            <Text style={styles.title}>Alimentação</Text>
          </View>
          <View style={styles.messageContainer}>
            <Text style={styles.subtitle}>Descobri que tenho diabetes...</Text>
            <Text style={styles.subtitle}>Como deverá ficar minha alimentação?</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.content}>
              {
                'Os comitês de estudos sobre o diabetes têm orientado que as pessoas com diabetes sigam a mesma alimentação saudável recomendada à população em geral. Muitas vezes pensamos que teremos de fazer uma dieta rigorosa, mas na verdade o que se espera é um planejamento e organização dos hábitos alimentares. Isto quer dizer que teremos que ter uma maior atenção quanto às escolhas dos alimentos e a quantidade consumida.'
              }
              {'\n'}
              {'Tentamos resumir os primeiros passos quando nos deparamos com essa nova'}
              {'\n'}
              {'\n'}
              {
                '1 – Distribua os alimentos em 5 a 6 refeições ao dia. Não deixe de fazer o café da manhã! Se não puder fazê-lo em casa, leve um lanche reforçado para a escola ou trabalho.'
              }
              {'\n'}
              {'\n'}
              {
                '2 – Nos lanches, comece sempre pelas frutas (evite sucos), mas não exagere na quantidade. Nenhum tipo de fruta é proibido! '
              }
              {'\n'}
              {'\n'}
              {'3 – No almoço e jantar, continue a comer o tradicional arroz com feijão.'}
              {'\n'}
              {'\n'}
              {
                '4 - A metade do prato deve ser de vegetais coloridos, principalmente os verde-escuros e amarelos. Pode ser na forma de salada crua e/ou vegetais cozidos. Evite molhos gordurosos.'
              }
              {'\n'}
              {'\n'}
              {
                '5 – Escolha pequenas porções de carnes magras e faça rodízio entre as brancas, vermelhas ou ovo. Experimente também pratos vegetarianos.'
              }
              {'\n'}
              {'\n'}
              {
                '6 – Evite os açúcares e alimentos açucarados. Se precisar utilize adoçante em pequena quantidade. Evite os adoçantes a base de frutose.'
              }
              {'\n'}
              {'\n'}
              {
                '7 - Só opte por produtos dietéticos se tiver certeza de que o mesmo atende as suas necessidades.'
              }
              {'\n'}
              {'\n'}
              {
                '8 – Evite frituras e diminua o consumo de gorduras animais: carnes gordas, queijos (exceto os mais magros como, por exemplo, ricota, minas frescal, cottage), embutidos, manteiga, margarina, requeijão, creme de leite.'
              }
              {'\n'}
              {'\n'}
              {
                '9 – Diminua o sal. Grande parte das pessoas com diabetes também apresentam pressão arterial elevada.'
              }
              {'\n'}
              {'\n'}
              {
                '10 – Procure usar alimentos menos processados: pães integrais, aveia, arroz integral, macarrão integral, etc.'
              }
              {'\n'}
              {'\n'}
              {'11 – Evite bebida alcoólica.'}
              {'\n'}
              {'\n'}
              {'12 – Tome água várias vezes ao longo do dia.'}
              {'\n'}
              {'\n'}
              {
                '13 – Inclua como meta no seu plano de cuidado com diabetes, a consulta com um nutricionista especialista para orientação da sua alimentação ao longo da vida.'
              }
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Glicose;
