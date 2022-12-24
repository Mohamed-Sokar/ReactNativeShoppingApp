import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../../../theme/Colors';

export default function Catagory({catagoryName, action}) {
  return (
    <TouchableOpacity
      onPress={action}
      activeOpacity={0.5}
      style={styles.container}>
      <Text style={styles.text}>{catagoryName}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.common.white,
    height: 95,
    width: 100,
    marginRight: 14,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    color: Colors.gray.dark,
  },
});
