import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { icons } from '../../../constants';

const Welcome = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.userName}>Hello Fulano</Text>
        <Text style={styles.userName}>Bem vindo ao Guardião</Text>
        <Text style={styles.welcomeMessage}>Seu assistente pessoal contra diabetes</Text>
      </View>

      <View style={styles.cardsContainer}>
        <TouchableOpacity
          style={styles.cardBtn}
          onPress={() => {
            router.push(`/pages/carboidratos`);
          }}
        >
          <Image
            source={icons.carboidratos}
            resizeMode="contain"
            style={styles.btnImg(30)}
          />
          <Text style={styles.btnText}>Contagem Carboidratos</Text>
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.cardsContainer}>
          <TouchableOpacity
            style={styles.cardBtn}
            onPress={() => {
              router.push(`/pages/alarmeNoturno`);
            }}
          >
            <Image
              source={icons.alarmeNoturno}
              resizeMode="contain"
              style={styles.btnImg(30)}
            />
            <Text style={styles.btnText}>Alarme Noturno</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardsContainer}>
          <TouchableOpacity
            style={styles.cardBtn}
            onPress={() => {
              router.push(`/pages/relatorio`);
            }}
          >
            <Image
              source={icons.relatorio}
              resizeMode="contain"
              style={styles.btnImg(30)}
            />
            <Text style={styles.btnText}>Histórico Glicêmico</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardsContainer}>
          <TouchableOpacity
            style={styles.cardBtn}
            onPress={() => {
              router.push(`/pages/lembretes`);
            }}
          >
            <Image
              source={icons.lembretes}
              resizeMode="contain"
              style={styles.btnImg(30)}
            />
            <Text style={styles.btnText}>Lembretes</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardsContainer}>
          <TouchableOpacity
            style={styles.cardBtn}
            onPress={() => {
              router.push(`/pages/conteudo`);
            }}
          >
            <Image
              source={icons.conteudos}
              resizeMode="contain"
              style={styles.btnImg(30)}
            />
            <Text style={styles.btnText}>Conteúdos</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardsContainer}>
          <TouchableOpacity
            style={styles.cardBtn}
            onPress={() => {
              router.push(`/pages/dicasRapidas`);
            }}
          >
            <Image
              source={icons.dicasRapidas}
              resizeMode="contain"
              style={styles.btnImg(30)}
            />
            <Text style={styles.btnText}>Dicas Rápidas</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
