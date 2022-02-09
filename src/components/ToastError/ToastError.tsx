import React from 'react';
import {Text, Image, Pressable} from 'react-native';
import Animated, {Layout, ZoomIn, ZoomOut} from 'react-native-reanimated';

import {close} from '@assets';
import useStyles from './ToastError.styles';

interface IToastError {
  onPress: () => void;
}

const ToastError = ({onPress}: IToastError): JSX.Element => {
  const styles = useStyles();

  return (
    <Animated.View
      style={styles.container}
      entering={ZoomIn}
      exiting={ZoomOut}
      layout={Layout}>
      <Pressable onPress={onPress}>
        <Image source={close} />
      </Pressable>
      <Text style={styles.textToast}>Ops, ocorreu um error ao fazer login</Text>
    </Animated.View>
  );
};

export default ToastError;
