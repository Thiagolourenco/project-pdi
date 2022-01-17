import {StyleSheet, ViewStyle} from 'react-native';

interface IRepositoriesStyle {
  container: ViewStyle;
  iconStar: ViewStyle;
  input: ViewStyle;
  indicator: ViewStyle;
  viewInput: ViewStyle;
  search: ViewStyle;
}

export default (): IRepositoriesStyle => {
  return StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 16,
    },
    iconStar: {
      backgroundColor: 'rgba(255, 199, 0,0.16)',
      borderRadius: 12,
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      marginLeft: 10,
    },
    indicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    search: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 8,
    },
    viewInput: {
      backgroundColor: '#fff',
      borderRadius: 4,
      alignItems: 'center',
      height: 40,
      paddingLeft: 14,
      flexDirection: 'row',

      shadowColor: 'rgba(0,0,0,0.08)',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,

      elevation: 8,
    },
  });
};
