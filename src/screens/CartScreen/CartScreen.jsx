import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {CustomButton} from '../../components';
import Product from './Component/Product';
import Colors from '../../theme/Colors';

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.flatList}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={({item}) => <Product />}
          keyExtractor={item => item}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.descWrapper}>
        <View style={styles.horizontalWrapper}>
          <Text style={styles.grayText}>Sub-total</Text>
          <Text style={styles.grayText}>1000.56$</Text>
        </View>
        <View style={styles.horizontalWrapper}>
          <Text style={styles.grayText}>Delivery</Text>
          <Text style={styles.grayText}>10.00$</Text>
        </View>
        <View style={styles.horizontalWrapper}>
          <Text style={styles.orangeText}>Total</Text>
          <Text style={styles.orangeText}>1010.56$</Text>
        </View>
      </View>
      <CustomButton title="Checkout" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: Colors.primary.light,
  },
  flatList: {
    height: '60%',
  },
  descWrapper: {
    marginTop: 20,
    marginBottom: 30,
  },
  horizontalWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  grayText: {
    color: Colors.gray.light,
    fontSize: 16,
    fontWeight: '700',
  },
  orangeText: {
    color: Colors.primary.dark,
    fontSize: 16,
    fontWeight: '700',
  },
});
