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

const Medicamentos = () => {
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
              source={icons.medicamentos}
              resizeMode="contain"
              style={styles.btnImg(30)}
            />
            <Text style={styles.title}>Medicamentos</Text>
          </View>
          <View style={styles.messageContainer}>
            <Text style={styles.subtitle}>Descobri que tenho diabetes...</Text>
            <Text style={styles.subtitle}>Quais os medicamentos usados no tratamento?</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.content}>
              {'Os medicamentos para controle do diabetes estão sempre evoluindo, e o médico é a pessoa mais capacitada para indicar aquele que se adapta ao seu perfil. Eles ajudam o pâncreas a produzir mais insulina, diminuem a absorção de carboidratos e aumentam a sensibilidade do organismo à ação da insulina.'}
              {'\n'}
              {'Lembrando que nem sempre serão necessários medicamentos por longos períodos: no caso do Diabetes Tipo 2, a mudança no estilo de vida pode ser suficiente. Outra coisa que uma pessoa que acabou de receber o diagnóstico deve saber é que os remédios são modificados ao longo do tempo, de acordo com a idade e com o comportamento da taxa de glicemia.'}
              {'\n'}
              {'\n'}
              {'Às vezes, o controle glicêmico só é obtido com injeções de insulina. Algumas pessoas necessitam receber esta substância ao mesmo tempo em que fazem uso de medicamentos. A frequência com que você recebe insulina depende de quanto o seu corpo ainda produz e de como o seu médico pretende controlar o seu nível glicêmico.'}
              {'\n'}
              {'\n'}
              {'Outra informação relevante: tipos diferentes de insulina têm tempo de ação diferente. Sua equipe médica dirá quanto de cada tipo você necessita e com que frequência. É importante aprender a técnica correta de uso das injeções de insulina e sempre modificar o local do corpo onde são aplicadas, para evitar problemas degenerativos. Os melhores locais são a barriga, exceto a área de 5 cm ao redor do umbigo; região superior das nádegas; face anterior e lateral das coxas; e região lateral e posterior do braço.'}
              {'\n'}
              {'\n'}
              {'A aplicação pode ser feita por meio de seringas, canetas próprias para esse fim e também por meio das bombas de insulina. Algumas delas fazem as duas funções: medem a taxa de glicemia e aplicam a dose indicada pelo usuário. A equipe multidisciplinar poderá ajudá-lo com informações sobre cada métodos, os custos envolvidos e as formas para adquirir os equipamentos.'}
              {'\n'}
              {'\n'}
              {'Os avanços científicos na área possibilitam tratamentos para todos os tipos de casos de diabetes. Esta é uma oportunidade para você prestar mais atenção à sua saúde e adquirir responsabilidades sobre as mudanças.'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Medicamentos;
