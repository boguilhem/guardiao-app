import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import styles from './glicemicData.style';

const GlicemicData = ({ iconUrl, dimension, handlePress, medicao, horario }) => {
  return (
    // <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
    //   <Image source={iconUrl} resizeMode="cover" style={styles.btnImg(dimension)} />
    // </TouchableOpacity>

    <View style={styles.dataContainer}>
      <Text style={styles.dataText}>{medicao}</Text>
      <Text style={styles.dataText}>{horario}</Text>
      <TouchableOpacity onPress={handlePress}>
        <Image source={iconUrl} resizeMode="contain" style={styles.btnImg(dimension)} />
      </TouchableOpacity>
    </View>
  );
};

export default GlicemicData;
