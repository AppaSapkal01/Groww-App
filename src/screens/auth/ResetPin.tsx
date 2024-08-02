import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../constants/Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import {FONTS} from '../../constants/Fonts';
import CustomText from '../../components/global/CustomText';
import DotLoading from '../../components/global/DotLoading';
import OTPInputCentered from '../../components/inputs/OTPInputCentered';
import CustomNumberPad from '../../components/inputs/CustomNumberPad';
import ResetOTPVerification from './ResetOTPVerification';

const initialState = ["", "", "", ""]
const ResetPin = () => {
  const [otpValues, setOtpValues] = useState(['', '', '', '']);
  const [focusedIndex, setFocuseIndex] = useState(0);
  const [otpError, setOtpError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [otpVerification, setOtpVerification] = useState<boolean>(false);

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
        setOtpError('Enter 4 Digit PIN');
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
        setOtpVerification(true);
      }, 2000);
    }
  };

  if (otpVerification) {
    return <ResetOTPVerification />
  }

  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <Icon color={Colors.profit} name="lock" size={RFValue(22)} />
        <CustomText
          variant="h6"
          fontFamily={FONTS.Bold}
          style={{marginTop: 10}}>
          Reset Groww PIN
        </CustomText>

        <CustomText style={styles.subText}>
          Set a new PIN to keep your investments safe & secure.
        </CustomText>

        {loading ? (
          <View style={styles.dotContainer}>
            <DotLoading />
          </View>
        ) : (
          <OTPInputCentered
            error={otpError}
            focusedIndex={focusedIndex}
            otpValues={otpValues}
          />
        )}
      </View>

      <CustomNumberPad
        customFont
        themeColor
        onPressNumber={handlePressNumber}
        onPressBackspace={handlePressBackspace}
        onPressCheckmark={handlePressCheckmark}
      />
    </CustomSafeAreaView>
  );
};

export default ResetPin;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: RFValue(10),
  },
  dotContainer: {
    marginTop: 50,
  },
  subText: {
    fontSize: RFValue(10),
    marginTop: 15,
    opacity: 0.8,
  },
});
