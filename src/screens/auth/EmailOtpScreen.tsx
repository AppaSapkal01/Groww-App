import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import CenteredLogo from '../../components/global/CenteredLogo';
import {goBack, navigate} from '../../utils/NavigationUtil';
import CustomInput from '../../components/inputs/CustomInput';
import { GlobalStyles } from '../../styles/GlobalStyles';
import CustomButton from '../../components/global/CustomButton';
import OtpTimer from '../../components/auth/OtpTimer';

const EmailOtpScreen = ({route} : any) => {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const handleSubmit = async () => {
    if(!otp) {
      setOtpError('Wrong OTP, 2 attempts remaning');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      navigate('SetPasswordScreen', {
        email: route.params.email,
      });
      setLoading(false);
    }, 2000)
  }
  return (
    <CustomSafeAreaView>
      <ScrollView>
        <CenteredLogo />
        <TouchableOpacity onPress={() => goBack()}>
          <View pointerEvents="none">
            <CustomInput label="EMAIL ADDRESS" value={route.params.email} />
          </View>
        </TouchableOpacity>

        <CustomInput
          label="ENTER OTP SEND TO THIS EMAIL ID"
          value={otp}
          onChangeText={t => {
            setOtp(t);
            setOtpError('');
          }}
          onSubmitEditing={() => {
            console.log('hit otp api');
          }}
          error={otpError}
          returnKeyType="done"
          maxLength={6}
          keyboardType="number-pad"
          rightText={<OtpTimer type="email" onPress={() => {}} />}
        />
      </ScrollView>
      <View style={GlobalStyles.bottomBtn}>
        <CustomButton
        text='VERIFY EMAIL ID'
        loading={loading}
        disabled={loading}
        onPress={() => handleSubmit()}
        />
      </View>
    </CustomSafeAreaView>
  );
};

export default EmailOtpScreen;

const styles = StyleSheet.create({});
