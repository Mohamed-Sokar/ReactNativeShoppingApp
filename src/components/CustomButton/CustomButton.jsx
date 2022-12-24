import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import Colors from '../../theme/Colors';

export default function CustomButton({
  title,
  containerStyle,
  titleStyle,
  action,
  ...rest
}) {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      activeOpacity={0.6}
      onPress={action}>
      {rest.loading ? (
        <ActivityIndicator size="small" color={Colors.common.white} />
      ) : (
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      )}
      {/* <Text style={[styles.title, titleStyle]}>{title}</Text> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: Colors.primary.dark,
    padding: 10,
  },
  title: {
    color: Colors.common.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
