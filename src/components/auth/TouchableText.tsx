import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {FONTS} from '../../constants/Fonts';
import {RFPercentage} from 'react-native-responsive-fontsize';

const TouchableText: React.FC<{
  firstText: String;
  style?: TextStyle;
  onPress?: () => void;
}> = ({firstText, style, onPress}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.bottomText, {color: colors.primary}, style]}>
        {firstText}
      </Text>
    </TouchableOpacity>
  );
};

export default TouchableText;

const styles = StyleSheet.create({
  bottomText: {
    fontFamily: FONTS.Medium,
    fontSize: RFPercentage(1.5),
    marginTop: 5,
  },
});
