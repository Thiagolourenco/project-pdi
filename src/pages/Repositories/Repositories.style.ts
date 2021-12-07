import {StyleSheet, ViewStyle} from 'react-native';

interface IRepositoriesStyle {
  container: ViewStyle;
  input: ViewStyle;
  viewInput: ViewStyle;
  search: ViewStyle;
}

export default (): IRepositoriesStyle => {
  return StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 16,
    },
    input: {
      flex: 1,
      marginLeft: 10,
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
      paddingVertical: 12,
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
