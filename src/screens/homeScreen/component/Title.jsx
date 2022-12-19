import {StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../../theme/Colors';
import {View, Text, TouchableOpacity} from 'react-native';

export default function Title({leftText, rightText, action}) {
  return (
    <View style={styles.titleWrapper}>
      <Text style={styles.leftText}>{leftText}</Text>
      <TouchableOpacity activeOpacity={0.4} onPress={action}>
        <Text style={styles.rightText}>{rightText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftText: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.common.black,
    letterSpacing: 1,
  },
  rightText: {
    fontSize: 15,
    fontWeight: '900',
    color: Colors.primary.dark,
    marginTop: 5,
  },
});
