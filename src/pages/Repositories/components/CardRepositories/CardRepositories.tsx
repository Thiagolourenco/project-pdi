import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {INodes} from '../../Repositories';

import useStyles from './CardRepositories.style';

interface ICardRepositories {
  item: INodes;
}

const CardRepositories = ({item}: ICardRepositories) => {
  const opacity = useSharedValue(0);

  const styles = useStyles();

  useEffect(() => {
    opacity.value = 1;
  }, [opacity]);

  const styleViewCard = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, {
        duration: 3000,
        easing: Easing.bezier(0.1, 0.1, 0.25, 1),
      }),
    };
  });

  return (
    <Animated.View style={[styles.card, styleViewCard]}>
      <View style={styles.cardHeader}>
        <View style={styles.cardInfoProject}>
          <Text style={styles.cardInfoProjectText}>{item.name}</Text>
          <Icon name="keyboard-arrow-right" size={24} color="#000" />
        </View>

        <View style={styles.iconStar}>
          <Icon name="star" size={16} color="#FFC700" />
        </View>
      </View>

      <Text style={styles.cardInfoProjectDescription}>{item.description}</Text>

      <View style={styles.cardTags}>
        <View style={styles.cardTag}>
          <Text style={styles.cardTagText}>#JavaScript</Text>
        </View>
        <View style={styles.cardTag}>
          <Text style={styles.cardTagText}>#ReactNative</Text>
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
          <Text style={styles.textFooter}>{item.createdAt}</Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default CardRepositories;
