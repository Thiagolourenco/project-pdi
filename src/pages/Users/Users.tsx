/**
 * @format
 */

import React, {useEffect} from 'react';
import {Text, SafeAreaView, View, Pressable, FlatList} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useQuery} from '@apollo/client';

import useStyles from './Users.style';
import {GetUser} from '../../graphql';

Icon.loadFont();

const DATA_USERS = [0, 1, 2, 3, 4, 5, 6];

const Users = (): JSX.Element => {
  const styles = useStyles();
  const {loading, data, error} = useQuery(GetUser);

  console.log('DATA => ', data);
  console.log('LOADING => ', loading);
  console.log('ERROR => ', error);

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

  const User = (): JSX.Element => {
    return (
      <Animated.View style={[styles.card, styleViewCard]}>
        <View style={styles.cardContent}>
          <View style={styles.imageProfile} />
          <View style={styles.viewContentUser}>
            <View style={styles.viewUserInfo}>
              <View style={styles.viewNameUser}>
                <Text style={styles.textNameUser}>John Doe Santos</Text>

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
            <Text style={styles.textUser}>@johndoesantos</Text>
          </View>
        </View>

        <View style={styles.viewContainerFooter}>
          <View style={styles.viewContentFooter}>
            <Icon name="business" size={16} color="#E5E5E5" />
            <Text style={styles.textFooter}>GO.K Digital</Text>
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
      </Animated.View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA_USERS}
        keyExtractor={item => String(item)}
        renderItem={User}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Users;
