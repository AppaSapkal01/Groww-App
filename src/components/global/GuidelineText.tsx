import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import React, {FC} from 'react';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';
import {FONTS} from '../../constants/Fonts';
import CustomText from './CustomText';

interface GuidelineTextProps {
  text: any;
}

const GuidelineText: FC<GuidelineTextProps> = ({text}) => {
  const theme = useColorScheme();
  const {colors} = useTheme();

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme === 'dark' ? '#46391d' : '#fff5e0'},
      ]}>
      <Icon
        name="information-circle"
        size={RFValue(16)}
        style={[styles.text, {color: colors.text}]}
      />
      <View style={styles.textContainer}>
        {text?.map((i: string, index: number) => {
          return (
            <CustomText
              key={index}
              fontFamily={FONTS.Regular}
              style={styles.text}
              variant="h9">
              {i}
            </CustomText>
          );
        })}
      </View>
    </View>
  );
};

export default GuidelineText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  textContainer: {
    width: '90%',
  },
  text: {
    opacity: 0.6,
    marginBottom: 3,
  },
});
