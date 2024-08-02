import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../../assets/images/logo_text.png'
import { normalizeHeight, normalizeWidth } from '../../utils/Scaling'

const CenteredLogo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={Logo} />
      </View>
    </View>
  )
}

export default CenteredLogo

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        flexDirection: 'row'
    },
    imgContainer: {
        width: normalizeWidth(110),
        height: normalizeHeight(28)
    },
    img: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    }
})