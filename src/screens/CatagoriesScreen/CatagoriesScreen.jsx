import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import Colors from '../../theme/Colors';

export default function CatagoriesScreen() {
  const Catagory = () => {
    return (
      <View style={styles.catagoryWrapper}>
        <Text style={styles.text}>Electronics</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        renderItem={({item}) => <Catagory number={item} />}
        keyExtractor={item => item}
        numColumns={2}
        contentContainerStyle={styles.flatList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.light,
  },
  catagoryWrapper: {
    width: 160,
    height: 165,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
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
    fontSize: 20,
    fontWeight: '500',
    color: Colors.common.black,
  },
  flatList: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
});
