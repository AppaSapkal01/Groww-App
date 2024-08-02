import {View, Text, SafeAreaView, StyleSheet, useColorScheme, Image} from 'react-native';
import React from 'react';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import CustomText from '../../components/global/CustomText';
import {FONTS} from '../../constants/Fonts';
import { normalizeModertely, screenHeight, screenWidth } from '../../utils/Scaling';
import LoginImageDark from '../../assets/images/login_dark_animation.png'
import LoginImageLight from '../../assets/images/login_animation_light.png'
import SocialLoginButton from '../../components/auth/SocialLoginButton';
import GoogleIcon from '../../assets/images/google.png';
import Icon from 'react-native-vector-icons/Ionicons'
import TouchableText from '../../components/auth/TouchableText';
import BottomText from '../../components/auth/BottomText';
import { navigate } from '../../utils/NavigationUtil';


const LoginScreen = () => {
  const theme = useColorScheme();
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <CustomText variant="h3" fontFamily={FONTS.Medium}>
          Together we Groww
        </CustomText>
        <CustomText variant="h7" style={styles.subText} fontFamily={FONTS.Bold}>
          Invest • Pay • Loans
        </CustomText>

        <View style={styles.imgContainer}>
            <Image 
            style={styles.img}
            source={theme === 'dark' ? LoginImageDark : LoginImageLight}
            />
        </View>

        <SocialLoginButton
        icon={<Image source={GoogleIcon} style={{height: 20, width: 20}} />} 
        text="Continue with Google"
        onPress={() => {}}
        />
        <SocialLoginButton 
        icon={<Icon name="logo-apple" size={18} color='black' />}
        text='Continue with Apple'
        onPress={() => {}}
        />

        <TouchableText 
        firstText='Use other email ID' 
        onPress={() => navigate('EmailScreen')}
        style={{marginVertical: 30, marginTop: 20}}
        />

        <BottomText />

      </View>
    </CustomSafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  subText: {
    marginTop: 16,
    opacity: 0.6,
  },
  imgContainer: {
    width: screenWidth,
    height: screenHeight * 0.45,
    marginVertical: normalizeModertely(30),
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: 'contain'
  }
});
