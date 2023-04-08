import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import styles from './glicemicData.style';

const GlicemicData = ({ iconUrl, dimension, handlePress }) => {
  return (
    // <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
    //   <Image source={iconUrl} resizeMode="cover" style={styles.btnImg(dimension)} />
    // </TouchableOpacity>

    <View style={styles.dataContainer}>
      <Text style={styles.dataText}>Medição</Text>
      <Text style={styles.dataText}>Horário</Text>
      <TouchableOpacity onPress={handlePress}>
        <Image source={iconUrl} resizeMode="contain" style={styles.btnImg(dimension)} />
      </TouchableOpacity>
    </View>
  );
};

export default GlicemicData;
