import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Alert,
  Text,
} from 'react-native';
import React from 'react';
import Colors from '../../theme/Colors';
import {Catagory, Product, Title} from './component';
import {Context} from '../../context/context';
import _ from 'lodash';

export default function HomeScreen({navigation}) {
  const {setCatagories, Catagories, Products, setProducts} =
    React.useContext(Context);

  const getAllProducts = () => {
    fetch(`https://fakestoreapi.com/products`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(json => {
        setProducts(json);
      })
      .catch(err =>
        Alert.alert(err, 'something went wrong, please try again later'),
      );
  };

  const getAllCatagories = () => {
    fetch(`https://fakestoreapi.com/products/categories`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(json => {
        setCatagories(json);
      })
      .catch(err =>
        Alert.alert(err, 'something went wrong, please try again later'),
      );
  };
  React.useEffect(() => {
    Catagories.length === 0 ? getAllCatagories() : null;
    Products.length === 0 ? getAllProducts() : null;
  }, []);

  const navigateToCatagoriesScreen = () => {
    navigation.navigate('CatagoriesScreen');
  };

  const navigateToProductsScreen = () => {
    navigation.navigate('ProductsScreen');
  };

  const navigateToProductDetailsScreen = product => {
    navigation.navigate('ProductDetailsScreen', {product});
  };

  const navigateToCatagoriesScreenWithCatagoryName = catagoryName => {
    navigation.navigate('ProductsScreen', {catagoryName});
  };

  const sortedProducts = _.sortBy(Products, item => item.rating.rate);
  const reversedProducts = _.reverse(sortedProducts);
  const TopFiveProducts = _.take(reversedProducts, 5);

  return (
    <>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerTitle}>Home</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Title
            leftText="Catagories"
            rightText="See all"
            action={navigateToCatagoriesScreen}
          />
        </View>
        {Catagories.length > 0 ? (
          <View style={styles.horizontalFlatListWrapper}>
            <FlatList
              style={{marginTop: 20}}
              data={Catagories.slice(0, 3)}
              renderItem={({item}) => (
                <Catagory
                  catagoryName={item}
                  action={navigateToCatagoriesScreenWithCatagoryName.bind(
                    this,
                    item,
                  )}
                />
              )}
              keyExtractor={item => item}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        ) : (
          <ActivityIndicator size="large" color={Colors.primary.dark} />
        )}
        <View style={styles.titleWrapper}>
          <Title
            leftText="Top Products"
            rightText="See all"
            action={navigateToProductsScreen}
          />
        </View>
        {Products.length > 0 ? (
          <FlatList
            style={{
              marginTop: 20,
              marginBottom: 50,
            }}
            data={TopFiveProducts}
            renderItem={({item}) => (
              <Product
                action={navigateToProductDetailsScreen.bind(this, item)}
                item={item}
              />
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color={Colors.primary.dark} />
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: Colors.primary.light,
  },
  headerWrapper: {
    height: 60,
    backgroundColor: Colors.primary.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.common.white,
    textAlign: 'center',
  },
  horizontalFlatListWrapper: {
    height: '15%',
  },
  titleWrapper: {
    marginTop: 20,
  },
});
