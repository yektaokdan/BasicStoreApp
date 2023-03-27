import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import React from 'react';
import NewCard from './components/NewsCard/NewCard';
import product_data from './products.json';

export default function App() {
  const renderProducts = ({item}) => <NewCard products={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerText}>Store</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Ara.."
          placeholderTextColor={'black'}
        />

        <FlatList data={product_data} renderItem={renderProducts} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
    margin: 5,
    marginLeft: 20,
  },
  searchBar: {
    borderWidth: 1,
    borderRadius: 30,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10,
    height: Dimensions.get('window').height / 25,
    textAlign: 'center',
  },
});
