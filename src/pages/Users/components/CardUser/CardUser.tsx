import React, {useEffect} from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {UserType} from '../../../../store';

import useStyles from './CardUser.style';

interface ICardUser {
  item: UserType;
  onPress: (login: string) => void;
}

const CardUser = ({item, onPress}: ICardUser) => {
  const styles = useStyles();

  const opacity = useSharedValue(0);

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
      <Pressable onPress={() => onPress(item?.login)}>
        <View style={styles.cardContent}>
          <Image style={styles.imageProfile} source={{uri: item?.avatarUrl}} />
          <View style={styles.viewContentUser}>
            <View style={styles.viewUserInfo}>
              <View style={styles.viewNameUser}>
                <Text style={styles.textNameUser}>{item?.name}</Text>

                <Icon
                  name="keyboard-arrow-right"
                  size={18}
                  color="#000"
                  style={styles.icon}
                />
              </View>

              <Pressable style={styles.buttonRemove}>
                <Icon name="delete" size={18} color="#000" />
              </Pressable>
            </View>
            <Text style={styles.textUser}>@{item?.login}</Text>
          </View>
        </View>

        <View style={styles.viewContainerFooter}>
          <View style={styles.viewContentFooter}>
            <Icon name="business" size={16} color="#E5E5E5" />
            <Text style={styles.textFooter}>{item?.company}</Text>
          </View>
          <View style={styles.viewContentFooter}>
            <Icon name="place" size={16} color="#E5E5E5" />
            <Text style={styles.textFooter}>São Paulo, Brazil</Text>
          </View>
          <View style={styles.viewContentFooter}>
            <Icon name="star" size={16} color="#E5E5E5" />
            <Text style={styles.textFooter}>2</Text>
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default CardUser;
