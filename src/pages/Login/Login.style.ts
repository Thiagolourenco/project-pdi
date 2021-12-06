/**
 * @format
 */

import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface ILoginStyle {
  button: ViewStyle;
  buttonText: TextStyle;
  container: ViewStyle;
  content: ViewStyle;
  input: ViewStyle;
  logoImage: ImageStyle;
  title: TextStyle;
  termsOfUseText: TextStyle;
  subTitle: TextStyle;
}

export default (): ILoginStyle => {
  return StyleSheet.create({
    button: {
      backgroundColor: '#000000',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      paddingVertical: 12,
      marginTop: 24,
    },
    buttonText: {
      fontSize: 14,
      color: '#ffffff',
      fontWeight: '400',
    },
    container: {
      flex: 1,
      marginVertical: 32,
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      marginHorizontal: 32,
      marginTop: 80,
    },
    input: {
      height: 40,
      borderWidth: 1,
      borderColor: '#E5E5E5',
      marginTop: 32,
      paddingHorizontal: 8,
    },
    logoImage: {
      alignItems: 'center',
    },
    title: {
      fontSize: 22,
      fontWeight: '700',
    },
    subTitle: {
      fontWeight: '400',
      fontSize: 16,
      color: '#7E7E7E',
      marginTop: 10,
    },
    termsOfUseText: {
      fontSize: 16,
      fontWeight: '400',
      color: '#7E7E7E',
      position: 'absolute',
      bottom: 0,
    },
  });
};
