import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react';
import Lottie from 'lottie-react-native'
import Anim from '../../assets/animations/confirm.json';
import { resetAndNavigate } from '../../utils/NavigationUtil'
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView'
import CenteredLogo from '../../components/global/CenteredLogo'
import CustomText from '../../components/global/CustomText'
import { FONTS } from '../../constants/Fonts'

const AccountProtectedScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      resetAndNavigate('HomeScreen')
    }, 3000)
  }, [])

  return (
    <CustomSafeAreaView>
      <CenteredLogo />
      <View style={styles.container}>
        <View style={styles.animationContainer}>
          <Lottie 
          source={Anim}
          speed={0.9}
          loop={false}
          style={styles.animation}
          autoPlay
          />
          <CustomText fontFamily={FONTS.Bold}>Account Protected</CustomText>
        </View>
      </View>
    </CustomSafeAreaView>
  )
}

export default AccountProtectedScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  animationContainer: {
    height: 280,
    width: 280,
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    width: "100%",
    height: 120,
  },
})