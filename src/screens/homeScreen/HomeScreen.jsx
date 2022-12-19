import {View, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import Colors from '../../theme/Colors';
import {Catagory, Product, Title} from './component';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Title leftText="Catagories" rightText="See all" />
      </View>
      <View style={styles.horizontalFlatListWrapper}>
        <FlatList
          style={{marginTop: 20}}
          data={[1, 2, 3, 4]}
          renderItem={({item}) => <Catagory number={item} />}
          keyExtractor={item => item}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.titleWrapper}>
        <Title leftText="Top Products" rightText="See all" />
      </View>
      <FlatList
        style={{marginTop: 20}}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({item}) => <Product />}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: Colors.primary.light,
  },
  horizontalFlatListWrapper: {
    height: '15%',
  },
  titleWrapper: {
    marginTop: 20,
  },
});
