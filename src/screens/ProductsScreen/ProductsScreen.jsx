import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
} from 'react-native';
import React from 'react';
import {Star} from '../../assests/Icons';
import {CustomButton, NavigationHeader} from '../../components';
import Colors from '../../theme/Colors';
import {Context} from '../../context/context';

const Product = ({item, action}) => {
  return (
    <View style={styles.productContainer}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text numberOfLines={1} style={styles.title}>
        {item.title}
      </Text>
      <Text style={styles.desc}>{item.category}</Text>
      <View style={styles.priceAnEevaluationWrapper}>
        <Text style={styles.price}>{item.price} $</Text>
        <View style={styles.rating}>
          <Star />
          <Text style={styles.evaluation}>{item.rating.rate}</Text>
        </View>
      </View>
      <CustomButton
        title="Buy Now"
        containerStyle={styles.buttonContainer}
        titleStyle={styles.buttonTitle}
        action={action}
      />
    </View>
  );
};

export default function ProductsScreen({route, navigation}) {
  const {catagoryName} = route.params;
  const [loading, setLoading] = React.useState(false);

  const {Products, setProducts} = React.useContext(Context);

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
      )
      .finally(() => {
        setLoading(false);
      });
  };

  const getProductsWithCatagoryName = catagoryName => {
    fetch(`https://fakestoreapi.com/products/category/${catagoryName}`, {
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
        Alert.alert('Error', 'something went wrong, please try again later'),
      )
      .finally(() => {
        setLoading(false);
      });
  };

  React.useEffect(() => {
    setLoading(true);
    if (catagoryName == 'All') {
      Products ? getAllProducts() : null;
    } else {
      Products ? getProductsWithCatagoryName(catagoryName) : null;
    }
  }, [catagoryName]);

  const navigateToProductDetailsScreen = product => {
    navigation.navigate('ProductDetailsScreen', {product});
  };

  return (
    <>
      <NavigationHeader action={navigation.goBack} title="Products" />
      <View style={styles.container}>
        {loading ? (
          <View style={{marginTop: '100%'}}>
            <ActivityIndicator size="large" color={Colors.primary.main} />
          </View>
        ) : (
          <View style={styles.flatListWrapper}>
            <FlatList
              data={Products}
              renderItem={({item}) => (
                <Product
                  item={item}
                  action={navigateToProductDetailsScreen.bind(this, item)}
                />
              )}
              keyExtractor={item => item.id}
              numColumns={2}
              contentContainerStyle={styles.flatList}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.light,
  },
  productContainer: {
    width: 160,
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.common.white,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  title: {
    fontSize: 15,
    color: Colors.common.black,
    fontWeight: '700',
    marginTop: 4,
  },
  desc: {
    fontSize: 12,
    color: Colors.gray.light,
    fontWeight: '500',
    marginTop: 3,
  },
  priceAnEevaluationWrapper: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 7,
    width: '75%',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.gray.dark,
    flex: 0.6,
  },
  rating: {
    flexDirection: 'row',
    flex: 0.35,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 30,
  },
  evaluation: {
    fontSize: 12,
    fontWeight: '800',
    color: Colors.gray.dark,
  },
  buttonContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 5,
  },
  buttonTitle: {
    fontSize: 12,
    fontWeight: '600',
  },
  flatListWrapper: {
    flex: 0.93,
    height: '50%',
  },
  flatList: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
