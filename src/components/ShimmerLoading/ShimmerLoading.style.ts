import {StyleSheet, ViewStyle} from 'react-native';

interface IShimmerLoadingStyle {
  container: ViewStyle;
}

export default (): IShimmerLoadingStyle => {
  return StyleSheet.create({
    container: {
      backgroundColor: '#ccc',
    },
  });
};
