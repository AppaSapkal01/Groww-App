import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';
import CustomText from '../global/CustomText';
import { FONTS } from '../../constants/Fonts';
import { Colors } from '../../constants/Colors';

interface SocialLoginButtonProps {
    icon: React.ReactNode;
    text: string;
    onPress: () => void;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
    icon, 
    text, 
    onPress
}) => {
    const {colors} = useTheme();
  return (
    <TouchableOpacity
    style={styles.container}
    onPress={onPress}
    >
        {icon}
      <CustomText
      variant='h8'
      fontFamily={FONTS.Medium}
      style={styles.text}
      >
        {text}
      </CustomText>
    </TouchableOpacity>
  )
}

export default SocialLoginButton

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 10,
        width: "90%",
        marginVertical: 10,
        backgroundColor: Colors.light_background,
        borderWidth: 1,
        borderColor: '#DFDFDF'
    },
    text: {
        marginLeft: 10,
        color: 'black'
    }
})