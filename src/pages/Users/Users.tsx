/**
 * @format
 */

import React, {useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Pressable,
  FlatList,
  Image,
} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import useStyles from './Users.style';
import useUserStore from '../../store/user';
import {StackRoutesType} from '../../@types';

Icon.loadFont();

type LoginStackProps = StackNavigationProp<StackRoutesType, 'Repositories'>;

const Users = (): JSX.Element => {
  const styles = useStyles();

  const users = useUserStore(state => state.users);

  const opacity = useSharedValue(0);

  const {navigate} = useNavigation<LoginStackProps>();

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

  const handleRepositories = (name: string) => {
    navigate('Repositories', {name});
  };

  const User = ({item}: any): JSX.Element => {
    return (
      <Animated.View style={[styles.card, styleViewCard]}>
        <Pressable onPress={() => handleRepositories(item?.login)}>
          <View style={styles.cardContent}>
            <Image
              style={styles.imageProfile}
              source={{uri: item?.avatarUrl}}
            />
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
              <Text style={styles.textFooter} numberOfLines={1}>
                {item?.company}
              </Text>
            </View>
            <View style={styles.viewContentFooter}>
              <Icon name="place" size={16} color="#E5E5E5" />
              <Text style={styles.textFooter}>{item?.location}</Text>
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

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={item => String(item)}
        renderItem={({item}) => <User item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Users;
