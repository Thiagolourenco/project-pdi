import React, {useEffect} from 'react';
import {StyleProp} from 'react-native';
import {ViewStyle} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import useStyles from './ShimmerLoading.style';

interface IShimmerLoading {
  wrapperStyle: StyleProp<ViewStyle>;
}

const ShimmerLoading = ({wrapperStyle}: IShimmerLoading): JSX.Element => {
  const opacity = useSharedValue<number>(1);

  const styles = useStyles();

  useEffect(() => {
    opacity.value = withRepeat(withTiming(0.7), 8);
  }, [opacity]);

  const style = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return <Animated.View style={[styles.container, style, wrapperStyle]} />;
};

export default ShimmerLoading;
