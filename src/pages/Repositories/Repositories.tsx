/**
 * @format
 */

import React from 'react';
import {SafeAreaView, View, Pressable, TextInput} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';

import Icon from 'react-native-vector-icons/MaterialIcons';

import useStyles from './Repositories.style';

Icon.loadFont();

const Repositories = (): JSX.Element => {
  const width = useSharedValue(287);
  const widthInput = useSharedValue(40);

  const styles = useStyles();

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value, {
        duration: 600,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  });

  const styleInput = useAnimatedStyle(() => {
    return {
      width: withTiming(widthInput.value, {
        duration: 600,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  });

  const handleOnPress = () => {
    width.value = 287;
    widthInput.value = 48;
  };

  const handleOnPressSearch = () => {
    width.value = 48;
    widthInput.value = 287;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Animated.View style={[styles.viewInput, style]}>
          <Pressable onPress={handleOnPress}>
            <Icon name="search" size={24} color="#7E7E7E" />
          </Pressable>

          <TextInput
            style={styles.input}
            placeholder="Buscar um repositório..."
          />
        </Animated.View>

        <Animated.View style={[styles.viewInput, styleInput]}>
          <Pressable onPress={handleOnPressSearch}>
            <Icon name="filter-list" size={24} color="#7E7E7E" />
          </Pressable>
          <TextInput
            style={styles.input}
            placeholder="Buscar um repositório..."
          />
          {/* </Pressable> */}
        </Animated.View>
      </View>

      {/* <View style={styles.search}>
        <Animated.View style={[styles.viewTest, style]}>
          <Icon
            name="search"
            size={24}
            color="#7E7E7E"
            onPress={handleOnPress}
          />
        </Animated.View>

        <Animated.View style={[styles.viewTest, styleInput]}>
          <Icon
            name="filter-list"
            size={24}
            color="#7E7E7E"
            onPress={handleOnPressSearch}
          />
        </Animated.View>
      </View> */}
    </SafeAreaView>
  );
};

export default Repositories;
