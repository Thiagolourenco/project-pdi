import React from 'react';
import {StyleProp} from 'react-native';
import {ViewStyle} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  useAnimatedReaction,
} from 'react-native-reanimated';

import useStyles from './ShimmerLoading.style';

interface IShimmerLoading {
  wrapperStyle: StyleProp<ViewStyle>;
}

const ShimmerLoading = ({wrapperStyle}: IShimmerLoading): JSX.Element => {
  const opacity = useSharedValue<number>(1);

  const styles = useStyles();

  useAnimatedReaction(
    () => {
      return (opacity.value = withRepeat(withTiming(0.7), 8));
    },
    data => {
      opacity.value = data;
    },
    [opacity],
  );

  const style = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return <Animated.View style={[styles.container, style, wrapperStyle]} />;
};

export default ShimmerLoading;
