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

const Emergencia = () => {
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
              source={icons.emergencia}
              resizeMode="contain"
              style={styles.btnImg(30)}
            />
            <Text style={styles.title}>Emergência</Text>
          </View>
          <View style={styles.messageContainer}>
            <Text style={styles.subtitle}>Descobri que tenho diabetes...</Text>
            <Text style={styles.subtitle}>Quais algumas ações que podem ser feitas em emergências?</Text>
          </View>
          <View style={styles.contentContainer}>
          <Text style={styles.subtitle}>Primeiros socorros para diabéticos – Hiperglicemia</Text>
            <Text style={styles.content}>
              {
                'você deve checar qual o tipo de crise diabética a pessoa apresenta. Quando alguém sofre com hiperglicemia, é preciso usar o aparelho de medição e checar se o valor está acima de 180 mg/dL em jejum ou acima de 250 mg/dL, ou se a vítima demonstre confusão, sede ou hálito de maçã. Se ela apresente esses sintomas, siga este passo a passo para primeiros socorros para diabéticos:\n\n'
              }
              {'\n'}
              {'1-A primeira orientação é buscar por uma seringa de insulina que a vítima possa ter para emergências;'}
              {'\n'}
              {'\n'}
              {
                '2-Na sequência, injete a seringa na região ao redor do umbigo ou na parte superior do braço, apertando a região com os dedos e mantendo-a pressionada até o final da injeção;'
              }
              {'\n'}
              {'\n'}
              {
                '3-Caso passe uma hora e o valor do açúcar continuar o mesmo, chame ajuda médica imediatamente;'
              }
              {'\n'}
              {'\n'}
              {'4-Se a vítima estiver inconsciente, coloque-a na posição lateral de segurança e espere o atendimento médico.'}
            </Text>
            <Text style={styles.subtitle}>E quando for um caso de hipoglicemia?</Text>
            <Text style={styles.content}>
              {
                'Por outro lado, quando o nível de glicose está baixo no sangue (hipoglicemia), o aparelho terá um valor inferior a 70 mg/dL ou a vítima apresentará os seguintes sintomas: tremores, pele fria ou desmaio. Para isso, siga os seguintes primeiros socorros para diabéticos:\n\n'
              }
              {'\n'}
              {'1-Dê algo doce para pessoa comer, como 1 colher de sopa cheia ou 2 sachês de açúcar com um pão;'}
              {'\n'}
              {'\n'}
              {
                '2-Se o açúcar não aumentar no sangue ou os sintomas não apresentem melhorias em 30 minutos, ofereça açúcar novamente à vítima (caso ela esteja acordada);'
              }
              {'\n'}
              {'\n'}
              {
                '3-No entanto, se passar mais 30 minutos e o nível ser mantido, chame ajuda médica ou leve a pessoa para o hospital;'
              }
              {'\n'}
              {'\n'}
              {'4-Em último caso, se a pessoa estiver inconsciente, coloque-a na posição lateral de segurança, enquanto espera pela ajuda médica.'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Emergencia;
