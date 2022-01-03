/**
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  Pressable,
  TextInput,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useQuery} from '@apollo/client';
import {useRoute, RouteProp} from '@react-navigation/native';

import useStyles from './Repositories.style';
import {GetRepositories} from '../../graphql';
import {CardRepositories} from './components';
import {StackRoutesType} from '../../@types';

Icon.loadFont();

interface ILanguageNodes {
  name: string;
}
interface ILanguage {
  nodes: ILanguageNodes[];
}

export interface INodes {
  name: string;
  createdAt: string;
  id: string;
  description: string;
  laguages: ILanguage;
}

interface IRepositories {
  totalCount: number;
  nodes: INodes[];
}

interface IUser {
  repositories: IRepositories;
}
interface IGetRepositories {
  user: IUser;
}

type LoginStackProps = RouteProp<StackRoutesType, 'Repositories'>;

const Repositories = (): JSX.Element => {
  const widthSearch = useSharedValue(287);
  const widthFilter = useSharedValue(48);

  const styles = useStyles();

  const {params} = useRoute<LoginStackProps>();

  const {data, loading} = useQuery<IGetRepositories>(GetRepositories, {
    variables: {number_of_repos: 10, username: params?.name},
  });

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

  const handleOnPress = () => {
    widthSearch.value = 287;
    widthFilter.value = 48;
  };

  const handleOnPressSearch = () => {
    widthSearch.value = 48;
    widthFilter.value = 287;
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

      {loading && (
        <View style={styles.indicator}>
          <ActivityIndicator size="large" color="#000000" />
        </View>
      )}
      <FlatList
        data={data?.user?.repositories?.nodes}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <CardRepositories item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Repositories;
