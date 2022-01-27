import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface IToastError {
  container: ViewStyle;
  textToast: TextStyle;
}

// #ff7979
// #6ab04c

export default (): IToastError => {
  return StyleSheet.create({
    container: {
      backgroundColor: '#ff7979',
      position: 'absolute',
      bottom: 0,
      width: '90%',
      marginHorizontal: 18,
      paddingVertical: 12,
      borderRadius: 14,
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 12,
    },
    textToast: {
      fontSize: 16,
      color: '#212121',
      fontWeight: '700',
      marginLeft: 12,
    },
  });
};
