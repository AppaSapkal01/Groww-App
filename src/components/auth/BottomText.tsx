import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomText from '../global/CustomText';
import {FONTS} from '../../constants/Fonts';

interface UnderlineProps {
  text: String;
}

const UnderlineText: React.FC<UnderlineProps> = ({text}) => {
  return (
    <CustomText variant='h9' fontFamily={FONTS.Regular} style={styles.underline}>
        {text}
    </CustomText>
  );
};

const BottomText = () => {
  return (
    <>
    <CustomText variant="h9" fontFamily={FONTS.Regular} style={styles.text}>
      By procedding. I accept Groww's <UnderlineText text="T&C" />.
      <UnderlineText text="Privacy Policy" />.{' '}
      <UnderlineText text="Tariff Rates" />.
    </CustomText>

    <CustomText variant='h9' fontFamily={FONTS.Regular} style={styles.text}>
        <UnderlineText text='FATCA Declaration' />
        {' '}
        &
        {' '}
        <UnderlineText text="CIBIL T&C" />
    </CustomText>
    </>
  );
};

export default BottomText;

const styles = StyleSheet.create({
    text: {opacity: 0.6},
    underline: {textDecorationLine: 'underline'}
});
