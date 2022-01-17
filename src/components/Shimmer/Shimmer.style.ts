import {StyleSheet, ViewStyle} from 'react-native';

interface IShimmerStyle {
  container: ViewStyle;
}

export default (): IShimmerStyle => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
  });
};
