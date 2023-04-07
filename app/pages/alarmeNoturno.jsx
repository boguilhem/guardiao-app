import { useState } from 'react';
import { View, Text, TouchableOpacity, Image,Button } from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
const AlarmeNoturno = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    if(date !=currentDate){
    setActive(true);
    }
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
      display:'spinner'
    });
  };


  const showTimepicker = () => {
    showMode('time');
  };
  const disableTimer = () => {
    setActive(false);
  };

    return (
      <View>
        <Button onPress={showTimepicker} title="Ativar Alarme" />
        <Button onPress={disableTimer} title="Desativar Alarme" />
        {active?<Text>Alarme ativado para: {date.getHours()}:{date.getMinutes()}</Text>:<Text>Alarme Desativado</Text>}
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </View>
    );
};



export default AlarmeNoturno;
