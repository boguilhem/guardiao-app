import { useState } from 'react';
import { Switch } from 'react-native-paper';
import styles from '../../../styles/alarmeNoturno.style';

const SwitchComponent = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <Switch
      value={isSwitchOn}
      onValueChange={onToggleSwitch}
      color={'lightgreen'}
      style={styles.alarmContainerSpacing}
    />
  );
};

export default SwitchComponent;
