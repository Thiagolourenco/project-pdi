import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface ICardRespositoriesStyle {
  card: ViewStyle;
  cardHeader: ViewStyle;
  cardInfoProject: ViewStyle;
  cardInfoProjectText: TextStyle;
  cardInfoProjectDescription: TextStyle;
  cardTags: ViewStyle;
  cardTag: ViewStyle;
  cardTagText: TextStyle;
  cardTagEditIcon: ViewStyle;
  iconStar: ViewStyle;
  viewContentFooter: ViewStyle;
  viewContainerFooter: ViewStyle;
  textFooter: TextStyle;
}

export default (): ICardRespositoriesStyle => {
  return StyleSheet.create({
    card: {
      paddingVertical: 22,
      marginVertical: 8,
      paddingLeft: 24,
      paddingRight: 28,
      borderRadius: 8,
      marginTop: 18,
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
    cardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cardInfoProject: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    cardInfoProjectText: {
      fontSize: 16,
      color: '#000',
      fontWeight: '700',
    },
    cardInfoProjectDescription: {
      fontSize: 14,
      fontWeight: '400',
      color: '#000',
      marginTop: 16,
    },
    cardTags: {
      flexDirection: 'row',
      marginTop: 8,
      alignItems: 'center',
    },
    cardTag: {
      backgroundColor: 'rgba(0,0,0,0.08)',
      borderRadius: 100,
      paddingVertical: 3,
      paddingHorizontal: 16,
      marginRight: 8,
    },
    cardTagText: {
      fontSize: 12,
      fontWeight: '400',
      color: '#000',
    },
    cardTagEditIcon: {
      backgroundColor: '#0017FF',
      borderRadius: 8,
      width: 16,
      height: 16,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 2,
    },
    iconStar: {
      backgroundColor: 'rgba(255, 199, 0,0.16)',
      borderRadius: 12,
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    viewContentFooter: {
      flexDirection: 'row',
      marginHorizontal: 6,
    },
    viewContainerFooter: {
      flexDirection: 'row',
      marginTop: 16,
    },
    textFooter: {
      fontSize: 12,
      color: '#7E7E7E',
      fontWeight: '400',
      marginLeft: 4,
    },
  });
};
