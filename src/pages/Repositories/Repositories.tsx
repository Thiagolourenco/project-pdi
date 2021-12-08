/**
 * @format
 */

import React, {useEffect} from 'react';
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
  const widthSearch = useSharedValue(287);
  const widthFilter = useSharedValue(48);
  const opacity = useSharedValue(0);

  const styles = useStyles();

  useEffect(() => {
    opacity.value = 1;
  }, [opacity]);

  const styleSearch = useAnimatedStyle(() => {
    return {
      width: withTiming(widthSearch.value, {
        duration: 600,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  });

  const styleFilter = useAnimatedStyle(() => {
    return {
      width: withTiming(widthFilter.value, {
        duration: 600,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  });

  const styleViewCard = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, {
        duration: 3000,
        easing: Easing.bezier(0.1, 0.1, 0.25, 1),
      }),
    };
  });

  const handleOnPress = () => {
    widthSearch.value = 287;
    widthFilter.value = 48;
  };

  const handleOnPressSearch = () => {
    widthSearch.value = 48;
    widthFilter.value = 287;
  };

  const CardRepositories = () => {
    return (
      <Animated.View style={[styles.card, styleViewCard]}>
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
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Animated.View style={[styles.viewInput, styleSearch]}>
          <Pressable onPress={handleOnPress}>
            <Icon name="search" size={24} color="#7E7E7E" />
          </Pressable>

          <TextInput
            style={styles.input}
            placeholder="Buscar um repositório..."
          />
        </Animated.View>

        <Animated.View style={[styles.viewInput, styleFilter]}>
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
