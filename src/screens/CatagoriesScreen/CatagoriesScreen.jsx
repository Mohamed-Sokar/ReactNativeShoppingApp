import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import Colors from '../../theme/Colors';
import {Context} from '../../context/context';
import {NavigationHeader} from '../../components';
const Catagory = ({catagoryName, action}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.catagoryWrapper}
      onPress={action}>
      <Text style={styles.text}>{catagoryName}</Text>
    </TouchableOpacity>
  );
};

export default function CatagoriesScreen({navigation}) {
  const {Catagories, setCatagories} = React.useContext(Context);

  const navigateToProductsScreen = catagoryName => {
    navigation.navigate('ProductsScreen', {catagoryName});
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
    getAllCatagories();
  }, []);

  return (
    <>
      <NavigationHeader action={navigation.goBack} title="Categories" />

      <View style={styles.container}>
        {Catagories.length === 0 ? (
          <ActivityIndicator size="large" color={Colors.common.black} />
        ) : (
          <FlatList
            data={Catagories}
            renderItem={({item}) => (
              <Catagory
                catagoryName={item}
                action={navigateToProductsScreen.bind(this, item)}
              />
            )}
            keyExtractor={item => item}
            numColumns={2}
            contentContainerStyle={styles.flatList}
          />
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
    fontSize: 18,
    fontWeight: '500',
    color: Colors.common.black,
  },
  flatList: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
});
