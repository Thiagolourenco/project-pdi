/**
 * @format
 */

import {StyleSheet, ViewStyle} from 'react-native';

interface IUsersStyle {
  container: ViewStyle;
}

export default (): IUsersStyle => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
  });
};
