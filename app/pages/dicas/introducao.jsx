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

const Introducao = () => {
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
              source={icons.introducao}
              resizeMode="contain"
              style={styles.btnImg(30)}
            />
            <Text style={styles.title}>Introdução</Text>
          </View>
          <View style={styles.messageContainer}>
            <Text style={styles.subtitle}>O que é a diabetes?</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.content}>
              {
                'É uma doença crônica na qual o corpo não produz insulina ou não consegue empregar adequadamente a insulina que produz.'
              }
              {'\n'}
              {'Existem alguns tipos de diabetes são eles:'}
              {'\n'}
              {'\n'}
              {
                'Tipo 1 – Em algumas pessoas, o sistema imunológico ataca equivocadamente as células beta. Logo, pouca ou nenhuma insulina é liberada para o corpo. Como resultado, a glicose fica no sangue, em vez de ser usada como energia. Esse é o processo que caracteriza o Tipo 1 de diabetes, que concentra entre 5 e 10% do total de pessoas com a doença.O Tipo 1 aparece geralmente na infância ou adolescência, mas pode ser diagnosticado em adultos também. Essa variedade é sempre tratada com insulina, medicamentos, planejamento alimentar e atividades físicas, para ajudar a controlar o nível de glicose no sangue.'
              }
              {'\n'}
              {'\n'}
              {
                'Tipo 2 – O Tipo 2 aparece quando o organismo não consegue usar adequadamente a insulina que produz; ou não produz insulina suficiente para controla a taxa de glicemia.Cerca de 90% das pessoas com diabetes têm o Tipo 2. Ele se manifesta mais frequentemente em adultos, mas crianças também podem apresentar. Dependendo da gravidade, ele pode ser controlado com atividade física e planejamento alimentar. Em outros casos, exige o uso de insulina e/ou outros medicamentos para controlar a glicose.'
              }
              {'\n'}
              {'\n'}
              {'Gestacional – Durante a gravidez, para permitir o desenvolvimento do bebê, a mulher passa por mudan-ças em seu equilíbrio hormonal. A placenta, por exemplo, é uma fonte importante de hor-mônios que reduzem a ação da insulina, responsável pela captação e utilização da glico-se pelo corpo. O pâncreas, consequentemente, aumenta a produção de insulina para compensar este quadro.Em algumas mulheres, entretanto, este processo não ocorre e elas desenvolvem um quadro de diabetes gestacional, caracterizado pelo aumento do nível de glicose no sangue. Quando o bebê é exposto a grandes quantidades de glicose ainda no ambiente intrauterino, há maior risco de crescimento excessivo (macrossomia fetal) e, consequentemente, partos traumáticos, hipoglicemia neonatal e até de obesidade e diabetes na vida adulta.'}
              {'\n'}
              {'\n'}
              {
                'Pré-Diabetes - Já imaginou se o corpo humano contasse com um sistema de alarme que dispara quando o risco de desenvolver uma doença aumenta? Não seria uma chance de mudar seu futuro?A maioria das pessoas não sabe o que é pré-diabetes. Uma pesquisa feita pela SBD em parceria com o laboratório farmacêutico Abbott apontou que apenas 30% dos pacientes tinham informações sobre essa condição.O termo pré-diabetes é usado quando os níveis de glicose no sangue estão mais altos do que o normal, mas não o suficiente para um diagnóstico de Diabetes Tipo 2. Obesos, hipertensos e pessoas com alterações nos lipídios estão no grupo de alto risco.É importante destacar que 50% dos pacientes nesse estágio ‘pré’ vão desenvolver a doença. O pré-diabetes é especialmente importante por ser a única etapa que ainda pode ser revertida ou mesmo que permite retardar a evolução para o diabetes e suas complicações.'
              }
            
              
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Introducao;
