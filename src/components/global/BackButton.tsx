import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';
import {goBack, navigate} from '../../utils/NavigationUtil';

interface BackButtonProps {
  path?: string;
}

const BackButton: FC<BackButtonProps> = ({path}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => (path ? navigate(path) : goBack())}>
      <Icon name="arrow-back" color={colors.text} size={RFValue(20)} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: 2,
    marginVertical: 5,
  },
});
