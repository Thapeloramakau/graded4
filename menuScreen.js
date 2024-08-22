import React, { useContext, useState } from 'react';
import { View, Text, Image, FlatList, Pressable, StyleSheet, Alert } from 'react-native';
import { CartContext } from './cartScreen'; // Import CartContext

const MENU_ITEMS = [
  { id: '1', name: 'Burger', description: 'Juicy beef burger', price: '$5.99', image: require('./assets/burger.webp') },
  { id: '2', name: 'Pizza', description: 'Cheesy pizza with toppings', price: '$8.99', image: require('./assets/pizza.jpg') },
  { id: '3', name: 'Pasta', description: 'Italian pasta with sauce', price: '$7.99', image: require('./assets/pasta.jfif') },
  // Add more items as needed
];

const MenuScreen = ({ navigation }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (item) => {
    addToCart(item);
    Alert.alert('Added to Cart', `${item.name} has been added to your cart`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Pressable style={styles.button} onPress={() => handleAddToCart(item)}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={MENU_ITEMS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: '#666',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    color: '#2ecc71',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default MenuScreen;