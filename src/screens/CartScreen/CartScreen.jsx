import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import React from 'react';
import Product from './Component/Product';
import Colors from '../../theme/Colors';
import {Context} from '../../context/context';
import {NavigationHeader, CustomButton} from '../../components';

export default function CartScreen({navigation}) {
  const {Cart, Total, setTotal, setCart} = React.useContext(Context);
  const [loading, setLoading] = React.useState(false);
  const handleCheckout = () => {
    setLoading(true);
    fetch('https://fakestoreapi.com/carts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(json => {
        if (Cart.length > 0) {
          Alert.alert('Success', 'Your order has been placed successfully');
          console.log(json);
          setTotal(0);
          setCart([]);
        } else {
          Alert.alert('Error', 'Your cart is empty');
        }
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <NavigationHeader action={navigation.goBack} title="Cart" />
      <View style={styles.container}>
        <View style={styles.flatList}>
          {Cart.length !== 0 ? (
            <FlatList
              data={Cart}
              renderItem={({item}) => <Product item={item} />}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <View style={styles.textWrapper}>
              <Text numberOfLines={2} style={styles.text}>
                There is no Product here yet !!
              </Text>
            </View>
          )}
        </View>
        <View style={styles.descWrapper}>
          <View style={styles.horizontalWrapper}>
            <Text style={styles.grayText}>Sub-total</Text>
            <Text style={styles.grayText}>{Total} $</Text>
          </View>
          <View style={styles.horizontalWrapper}>
            <Text style={styles.grayText}>Delivery</Text>
            <Text style={styles.grayText}>{Total > 0 ? 10.0 : 0} $</Text>
          </View>
          <View style={styles.horizontalWrapper}>
            <Text style={styles.orangeText}>Total</Text>
            <Text style={styles.orangeText}>
              {Total > 0 ? Total + 10 : 0} $
            </Text>
          </View>
        </View>
        <CustomButton
          title="Checkout"
          action={handleCheckout}
          loading={loading}
        />
      </View>
    </>
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
  text: {
    fontSize: 30,
    fontWeight: '700',
    color: 'red',
    textAlign: 'center',
  },
  textWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
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
