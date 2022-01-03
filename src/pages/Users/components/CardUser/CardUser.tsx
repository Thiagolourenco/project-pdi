import React from 'react';
import {View, Text, Pressable } from 'react-native';
import Animated from 'react-native-reanimated';

const CardUser = () => {
  return (
    <Animated.View style={[styles.card, styleViewCard]}>
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
      </Animated.View>
  )
}