import {StyleSheet, ViewStyle} from 'react-native';

interface ICardStyle {
  // buttonRemove: ViewStyle;
  card: ViewStyle;
  cardContent: ViewStyle;
}

export default (): ICardStyle => {
  return StyleSheet.create({
    card: {
      marginHorizontal: 22,
      paddingVertical: 32,
      marginVertical: 8,
      paddingLeft: 24,
      borderRadius: 8,
      backgroundColor: '#fff',
      shadowColor: 'rgba(0,0,0,0.08)',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,

      elevation: 8,
    },
    cardContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
};
