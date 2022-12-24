import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Arrow} from '../../assests/Icons';
import Colors from '../../theme/Colors';

export default function NavigationHeader({action, title}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={action}
        activeOpacity={0.5}
        style={styles.arrow}>
        <Arrow />
      </TouchableOpacity>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.text}>
          {title}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: Colors.primary.dark,
    alignItems: 'center',
    height: 60,
  },
  arrow: {
    marginLeft: '10%',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    marginLeft: '22%',
    width: '35%',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.common.white,
  },
});
