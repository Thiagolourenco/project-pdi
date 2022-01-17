import React from 'react';
import {View, Text} from 'react-native';

import useStyles from './Shimmer.style';

const Shimmer = (): JSX.Element => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text>Text</Text>
    </View>
  );
};

export default Shimmer;
