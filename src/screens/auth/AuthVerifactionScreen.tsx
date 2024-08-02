import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import BiomerticVerification from './BiomerticVerification';
import ResetPin from './ResetPin';

const AuthVerifactionScreen = () => {
  const [authScreen, setAuthScreen] = useState('Biometric');
  return (
    <>
      {authScreen == 'Biometric' ? (
        <BiomerticVerification onForgotPin={() => setAuthScreen('ResetPin')} />
      ) : (
        <ResetPin />
      )}
    </>
  );
};

export default AuthVerifactionScreen;

const styles = StyleSheet.create({});
