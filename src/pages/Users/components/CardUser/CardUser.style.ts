import {StyleSheet, ViewStyle, ImageStyle, TextStyle} from 'react-native';

interface ICardStyle {
  buttonRemove: ViewStyle;
  card: ViewStyle;
  cardContent: ViewStyle;
  imageProfile: ImageStyle;
  icon: ViewStyle;
  textNameUser: TextStyle;
  textUser: TextStyle;
  textFooter: TextStyle;
  viewNameUser: ViewStyle;
  viewUserInfo: ViewStyle;
  viewContentUser: ViewStyle;
  viewContentFooter: ViewStyle;
  viewContainerFooter: ViewStyle;

  shimmerLoadingCardHeader: ViewStyle;
  shimmerLoadingUserInfo: ViewStyle;
  shimmerLoadingLogin: ViewStyle;
  shimmerLoadingFooter: ViewStyle;
}

export default (): ICardStyle => {
  return StyleSheet.create({
    buttonRemove: {
      marginLeft: 28,
      height: 24,
      width: 24,
      backgroundColor: '#E8E8E8',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
    },
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
    imageProfile: {
      backgroundColor: '#000',
      height: 64,
      width: 64,
      borderRadius: 32,
    },
    icon: {
      marginLeft: 8,
    },
    textNameUser: {
      fontSize: 16,
      fontWeight: '700',
      color: '#000',
    },
    viewNameUser: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    textUser: {
      fontSize: 14,
      fontWeight: '400',
      color: '#000',
      marginTop: 8,
    },
    textFooter: {
      fontSize: 12,
      color: '#7E7E7E',
      fontWeight: '400',
      marginLeft: 4,
      width: 100, // Todo => Melhorar isso
    },
    viewUserInfo: {
      flexDirection: 'row',
    },
    viewContentUser: {
      marginLeft: 16,
    },
    viewContentFooter: {
      flexDirection: 'row',
      marginHorizontal: 6,
    },
    viewContainerFooter: {
      flexDirection: 'row',
      marginTop: 16,
    },

    shimmerLoadingCardHeader: {
      height: 64,
      width: 64,
      borderRadius: 32,
    },
    shimmerLoadingUserInfo: {
      width: 220,
      height: 20,
    },
    shimmerLoadingLogin: {
      width: 120,
      height: 20,
      marginTop: 6,
    },
    shimmerLoadingFooter: {
      width: 300,
      height: 20,
    },
  });
};
