/**
 * @format
 */

import {StyleSheet, ViewStyle} from 'react-native';

interface ILoginStyle {
  container: ViewStyle;
}

export default (): ILoginStyle => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
  });
};
