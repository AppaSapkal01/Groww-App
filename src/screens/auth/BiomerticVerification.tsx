import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {resetAndNavigate} from '../../utils/NavigationUtil';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import CustomText from '../../components/global/CustomText';
import {FONTS} from '../../constants/Fonts';
import TouchableText from '../../components/auth/TouchableText';
import CustomNumberPad from '../../components/inputs/CustomNumberPad';
import { RFValue } from 'react-native-responsive-fontsize';
import RoundOTPInput from '../../components/inputs/RoundOTPInput';
import Logo from '../../assets/images/logo.png'
const initialState = ['', '', '', ''];

interface BiometricProp {
  onForgotPin: () => void;
}

const BiomerticVerification: FC<BiometricProp> = ({onForgotPin}) => {
  const [otpValues, setOtpValues] = useState(['', '', '', '']);
  const [focusedIndex, setFocuseIndex] = useState(0);
  const [otpError, setOtpError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePressNumber = (number: number | string) => {
    if (focusedIndex < otpValues.length) {
      const newOtpValues = [...otpValues];
      newOtpValues[focusedIndex] = number.toString();
      setOtpError(null);
      setOtpValues(newOtpValues);
      setFocuseIndex(focusedIndex + 1);
    }
  };

  const handlePressBackspace = () => {
    if (focusedIndex > 0) {
      const newOtpValues = [...otpValues];
      newOtpValues[focusedIndex - 1] = '';
      setOtpValues(newOtpValues);
      setFocuseIndex(focusedIndex - 1);
    }
  };

  const handlePressCheckmark = async () => {
    let valid = false;
    otpValues.forEach(i => {
      if (i === '') {
        valid = true;
        setOtpError('Wrong PIN. 2 attempt remaining.');
        // setOtpError('Wrong PIN Limit Reached. Try after 30 minutes.');
        setOtpValues(initialState);
        setFocuseIndex(0);
      }
    });

    if (!valid) {
      setLoading(true);
      await setTimeout(() => {
        setLoading(false);
        setOtpValues(initialState);
        setFocuseIndex(0);
        resetAndNavigate('HomeScreen');
      }, 2000);
    }
  };

  useEffect(() => {
    const allFilled = otpValues.every(value => value !== '');
    if (allFilled) {
      handlePressCheckmark();
    }
  }, [otpValues]);

  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <CustomText variant="h6" fontFamily={FONTS.Bold}>
          Enter Groww PIN
        </CustomText>
        <View style={styles.emailContainer}>
          <CustomText style={styles.subText}>a****@gmail.com</CustomText>
          <TouchableText
            firstText="Logout"
            style={styles.logoutText}
            onPress={() => {}}
          />
        </View>
      </View>

      <RoundOTPInput
        onForgotPin={onForgotPin}
        loading={loading}
        otpValues={otpValues}
        error={otpError}
      />

      <CustomNumberPad
        customFont
        onPressBiometric={() => {}}
        isBiometric={true}
        onPressNumber={handlePressNumber}
        onPressBackspace={handlePressBackspace}
        onPressCheckmark={handlePressCheckmark}
      />
    </CustomSafeAreaView>
  );
};

export default BiomerticVerification;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFValue(25),
    marginBottom: RFValue(10),
  },
  logo: {
    height: RFValue(25),
    width: RFValue(25),
    alignSelf: "center",
    marginBottom: 8,
  },
  emailContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 15,
  },
  subText: {
    fontSize: RFValue(10),
  },
  logoutText: {
    fontFamily: FONTS.Regular,
    fontSize: RFValue(10),
  },
});
