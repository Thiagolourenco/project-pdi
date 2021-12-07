/**
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  Pressable,
  TextInput,
  Text,
  FlatList,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';

import useStyles from './Repositories.style';

const DATA_REPOS = [0, 1, 2, 3, 4];

Icon.loadFont();

const Repositories = (): JSX.Element => {
  const width = useSharedValue(287);
  const widthInput = useSharedValue(48);

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

  const CardRepositories = () => {
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.cardInfoProject}>
            <Text style={styles.cardInfoProjectText}>project-name-java</Text>
            <Icon name="keyboard-arrow-right" size={24} color="#000" />
          </View>

          <View style={styles.iconStar}>
            <Icon name="star" size={16} color="#FFC700" />
          </View>
        </View>

        <Text style={styles.cardInfoProjectDescription}>
          Project application with component app with React Native
        </Text>

        <View style={styles.cardTags}>
          <View style={styles.cardTag}>
            <Text style={styles.cardTagText}>#JavaScript</Text>
          </View>
          <View style={styles.cardTag}>
            <Text style={styles.cardTagText}>#JavaScript</Text>
          </View>

          <View style={styles.cardTagEditIcon}>
            <Icon name="edit" color="#fff" size={10} />
          </View>
        </View>

        <View style={styles.viewContainerFooter}>
          <View style={styles.viewContentFooter}>
            <Icon name="language" size={16} color="#E5E5E5" />
            <Text style={styles.textFooter}>React Native</Text>
          </View>
          <View style={styles.viewContentFooter}>
            <Icon name="star" size={16} color="#E5E5E5" />
            <Text style={styles.textFooter}>2</Text>
          </View>
          <View style={styles.viewContentFooter}>
            <Icon name="supervisor-account" size={16} color="#E5E5E5" />
            <Text style={styles.textFooter}>5</Text>
          </View>
          <View style={styles.viewContentFooter}>
            <Icon name="access-time" size={16} color="#E5E5E5" />
            <Text style={styles.textFooter}>2 dias atrás</Text>
          </View>
        </View>
      </View>
    );
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
          <TextInput style={styles.input} placeholder="Buscar por flag" />
        </Animated.View>
      </View>

      <FlatList
        data={DATA_REPOS}
        keyExtractor={item => String(item)}
        renderItem={CardRepositories}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Repositories;
