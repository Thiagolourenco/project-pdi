/**
 * @format
 */

import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import useStyles from './Users.style';
import useUserStore from '../../store/user';
import {StackRoutesType} from '../../@types';
import CardUser from './components/CardUser';

Icon.loadFont();

type LoginStackProps = StackNavigationProp<StackRoutesType, 'Repositories'>;

const Users = (): JSX.Element => {
  const styles = useStyles();

  const users = useUserStore(state => state.users);

  const {navigate} = useNavigation<LoginStackProps>();

  const handleRepositories = (name: string) => {
    navigate('Repositories', {name});
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={item => String(item)}
        renderItem={({item}) => (
          <CardUser
            item={item}
            onPress={(login: string) => handleRepositories(login)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Users;
