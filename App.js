import React, { createContext, useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, TextInput, Pressable, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import icon component


// Create the context for DashboardContent and Cart
const DashboardContent = createContext();
const CartContext = createContext();

// DashboardProvider component
const DashboardProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [backgroundC, setBackgroundC]=useState('#ff5722');
  const [colour, setColour]=useState('white');

  return (
    <DashboardContent.Provider value={{ name, surname, email, phoneNumber, setName, setSurname, setEmail, setPhoneNumber, colour, setColour, backgroundC, setBackgroundC }}>
      {children}
    </DashboardContent.Provider>
  );
};




// CartProvider component
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

// Get Started screen component
function GetStarted({ navigation }) {
  const handleGetStarted = () => {
    navigation.navigate('Home'); // Navigate to the Home screen
  };

  const {colour, backgroundC}= useContext(DashboardContent)
  const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: backgroundC,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  buttonText: {
    color: colour,
    fontSize: 18,
  },
  homeContent: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#333',
    color: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  foodCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  foodImage: {
    width: '100%',
    height: 150,
  },
  foodInfo: {
    padding: 10,
  },
  foodName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  foodPrice: {
    fontSize: 14,
    color: '#888',
  },
  foodList: {
    paddingBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityButton: {
    backgroundColor: '#ff5722',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    color: 'white',
    fontSize: 18,
  },
  quantityText: {
    fontSize: 18,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  addToCartButton: {
    backgroundColor: '#ff5722',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 18,
  },
  cartContainer: {
    padding: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  cartItemName: {
    fontSize: 16,
  },
  cartItemPrice: {
    fontSize: 16,
  },
  removeButton: {
    color: '#ff5722',
    fontSize: 16,
  },
  deliveryFee: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  grandTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  emptyCart: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
  profileContainer: {
    padding: 20,
  },
  profileTitle: {
    fontSize: 22,
    marginBottom: 20,
  },
  checkoutContainer: {
    padding: 20,
  },
  foodDetailContainer: {
    padding: 20,
  },
  foodDetailImage: {
    width: '100%',
    height: 200,
  },
  foodDetailName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  foodDetailPrice: {
    fontSize: 20,
    color: '#888',
    marginVertical: 10,
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  foodList: {
    flex: 1,
  },
});
  return (
    <ImageBackground source={require('./assets/deliveryhome.webp')} style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.overlay}>
          <Text style={styles.title}>Pushing P Deliveries</Text>
          <Pressable style={styles.button} onPress={handleGetStarted}>
            <Text style={styles.buttonText}>Get Started</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

// Home screen component
function Home({ navigation }) {
  const { name, surname, email, phoneNumber, setName, setSurname, setEmail, setPhoneNumber, colour, backgroundC } = useContext(DashboardContent);

  const handleContinue = () => {
    if (name && surname && email && phoneNumber) {
      navigation.navigate('Address'); // Navigate to the Address screen
    } else {
      alert('Please enter all the details');
    }
  };

  const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: backgroundC,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  buttonText: {
    color: colour,
    fontSize: 18,
  },
  homeContent: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#333',
    color: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  foodCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  foodImage: {
    width: '100%',
    height: 150,
  },
  foodInfo: {
    padding: 10,
  },
  foodName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  foodPrice: {
    fontSize: 14,
    color: '#888',
  },
  foodList: {
    paddingBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityButton: {
    backgroundColor: '#ff5722',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    color: 'white',
    fontSize: 18,
  },
  quantityText: {
    fontSize: 18,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  addToCartButton: {
    backgroundColor: '#ff5722',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 18,
  },
  cartContainer: {
    padding: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  cartItemName: {
    fontSize: 16,
  },
  cartItemPrice: {
    fontSize: 16,
  },
  removeButton: {
    color: '#ff5722',
    fontSize: 16,
  },
  deliveryFee: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  grandTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  emptyCart: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
  profileContainer: {
    padding: 20,
  },
  profileTitle: {
    fontSize: 22,
    marginBottom: 20,
  },
  checkoutContainer: {
    padding: 20,
  },
  foodDetailContainer: {
    padding: 20,
  },
  foodDetailImage: {
    width: '100%',
    height: 200,
  },
  foodDetailName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  foodDetailPrice: {
    fontSize: 20,
    color: '#888',
    marginVertical: 10,
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  foodList: {
    flex: 1,
  },
});


  return (
    <ImageBackground source={require('./assets/deliveryhome.webp')} style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.homeContent}>
          <Text style={styles.title}>Scooter Food Deliveries - Delivery to U!!</Text>
          <Text style={styles.subtitle}>Sign up below:</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              placeholder="Enter your name" 
              placeholderTextColor="white" 
              style={styles.input} 
              value={name} 
              onChangeText={setName} 
            />
            <TextInput 
              placeholder="Enter surname" 
              placeholderTextColor="white" 
              style={styles.input} 
              value={surname} 
              onChangeText={setSurname} 
            />
            <TextInput 
              placeholder="Enter email" 
              placeholderTextColor="white" 
              style={styles.input} 
              value={email} 
              onChangeText={setEmail} 
              keyboardType="email-address" 
            />
            <TextInput 
              placeholder="Enter phone number" 
              placeholderTextColor="white" 
              style={styles.input} 
              value={phoneNumber} 
              onChangeText={setPhoneNumber} 
              keyboardType="phone-pad" 
            />
            <Pressable style={styles.button} onPress={handleContinue}>
              <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
            <View style={{flexDirection: 'row', margin: '10%', justifyContent: 'space-between'}}>
              <View style={{color: 'white' ,borderWidth: 1, borderColor: 'green', borderRadius: '100%',height: 80, width: 80}}><Text style={{color: 'green', margin: '40%', fontWeight: 'bold'}}>1</Text></View>
              <View style={{color: 'white' ,borderWidth: 1, borderColor: 'white', borderRadius: '100%' ,height: 80, width: 80,textAlign: 'centre'}}><Text style={{color: 'white', margin: '40%', fontWeight: 'bold'}}>2</Text></View>
              
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

// Address screen component
function AddressScreen({ navigation }) {
  const { name, surname, email, phoneNumber, backgroundC, colour } = useContext(DashboardContent);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: backgroundC,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  buttonText: {
    color: colour,
    fontSize: 18,
  },
  homeContent: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#333',
    color: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  foodCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  foodImage: {
    width: '100%',
    height: 150,
  },
  foodInfo: {
    padding: 10,
  },
  foodName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  foodPrice: {
    fontSize: 14,
    color: '#888',
  },
  foodList: {
    paddingBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityButton: {
    backgroundColor: '#ff5722',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    color: 'white',
    fontSize: 18,
  },
  quantityText: {
    fontSize: 18,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  addToCartButton: {
    backgroundColor: '#ff5722',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 18,
  },
  cartContainer: {
    padding: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  cartItemName: {
    fontSize: 16,
  },
  cartItemPrice: {
    fontSize: 16,
  },
  removeButton: {
    color: '#ff5722',
    fontSize: 16,
  },
  deliveryFee: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  grandTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  emptyCart: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
  profileContainer: {
    padding: 20,
  },
  profileTitle: {
    fontSize: 22,
    marginBottom: 20,
  },
  checkoutContainer: {
    padding: 20,
  },
  foodDetailContainer: {
    padding: 20,
  },
  foodDetailImage: {
    width: '100%',
    height: 200,
  },
  foodDetailName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  foodDetailPrice: {
    fontSize: 20,
    color: '#888',
    marginVertical: 10,
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  foodList: {
    flex: 1,
  },
});

  const handleContinue = () => {
    if (address.trim() && city.trim() && state.trim() && zipCode.trim()) {
      navigation.navigate('Menu'); // Navigate to the Menu screen
    } else {
      alert('Please fill in all address details');
    }
  };

  return (
    <ImageBackground source={require('./assets/deliveryhome.webp')} style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Address" 
          placeholderTextColor="white" 
          style={styles.input} 
          value={address} 
          onChangeText={setAddress} 
        />
        <TextInput 
          placeholder="City" 
          placeholderTextColor="white" 
          style={styles.input} 
          value={city} 
          onChangeText={setCity} 
        />
        <TextInput 
          placeholder="State" 
          placeholderTextColor="white" 
          style={styles.input} 
          value={state} 
          onChangeText={setState} 
        />
        <TextInput 
          placeholder="Zip Code" 
          placeholderTextColor="white" 
          style={styles.input} 
          value={zipCode} 
          onChangeText={setZipCode} 
          keyboardType="numeric" 
        />
        <Pressable style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
        <View style={{flexDirection: 'row', margin: '10%', justifyContent: 'space-between'}}>
              <View style={{color: 'white' ,borderWidth: 1, borderColor: 'white', borderRadius: '100%',height: 80, width: 80}}><Text style={{color: 'white', margin: '40%', fontWeight: 'bold'}}>1</Text></View>
              <View style={{color: 'white' ,borderWidth: 1, borderColor: 'green', borderRadius: '100%' ,height: 80, width: 80,textAlign: 'centre'}}><Text style={{color: 'green', margin: '40%', fontWeight: 'bold'}}>2</Text></View>
      </View>
      </View>
    </SafeAreaView>
    </ImageBackground>
    
  );
}

// Sample Data
const foodData = [
  { id: '1', category: 'Burgers', name: 'Cheese Burger', price: '$5.99', image: require('./assets/cheeseburger.jfif') },
  { id: '2', category: 'Burgers', name: 'Chicken Burger', price: '$6.99', image: require('./assets/chickenburger.webp') },
  { id: '3', category: 'Pizza', name: 'Pepperoni Pizza', price: '$8.99', image: require('./assets/pepperoni.webp') },
  { id: '4', category: 'Pizza', name: 'Veggie Pizza', price: '$7.99', image: require('./assets/vegetablepizza.jpg') },
  { id: '5', category: 'Drinks', name: 'Coca Cola', price: '$1.99', image: require('./assets/cocacola.jpg') },
  { id: '6', category: 'Drinks', name: 'Lemonade', price: '$2.50', image: require('./assets/lemonade.jpg') },
  // Add more items as needed
];

// Menu screen component
// Menu screen component
function MenuScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const { name, colour, backgroundC } = useContext(DashboardContent);

  const filteredFoodData = foodData.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: backgroundC,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  buttonText: {
    color: colour,
    fontSize: 18,
  },
  homeContent: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#333',
    color: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  foodCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  foodImage: {
    width: '100%',
    height: 150,
  },
  foodInfo: {
    padding: 10,
  },
  foodName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  foodPrice: {
    fontSize: 14,
    color: '#888',
  },
  foodList: {
    paddingBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityButton: {
    backgroundColor: '#ff5722',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    color: 'white',
    fontSize: 18,
  },
  quantityText: {
    fontSize: 18,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  addToCartButton: {
    backgroundColor: '#ff5722',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 18,
  },
  cartContainer: {
    padding: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  cartItemName: {
    fontSize: 16,
  },
  cartItemPrice: {
    fontSize: 16,
  },
  removeButton: {
    color: '#ff5722',
    fontSize: 16,
  },
  deliveryFee: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  grandTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  emptyCart: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
  profileContainer: {
    padding: 20,
  },
  profileTitle: {
    fontSize: 22,
    marginBottom: 20,
  },
  checkoutContainer: {
    padding: 20,
  },
  foodDetailContainer: {
    padding: 20,
  },
  foodDetailImage: {
    width: '100%',
    height: 200,
  },
  foodDetailName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  foodDetailPrice: {
    fontSize: 20,
    color: '#888',
    marginVertical: 10,
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  foodList: {
    flex: 1,
  },
});

  const renderFoodItem = ({ item }) => (
    <Pressable style={styles.foodCard} onPress={() => navigation.navigate('FoodItemDetails', { item })}>
      <Image source={item.image} style={styles.foodImage} />
      <View style={styles.foodInfo}>
        <Text style={styles.foodName}>{item.name}</Text>
        <Text style={styles.foodPrice}>{item.price}</Text>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{flex: 1}} >
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={styles.welcomeText}>Welcome, {name}</Text>
        </View>
        <View>
          <Pressable onPress={() => navigation.navigate('Profile')}>
            <Icon name="user" size={30} color="#fff" style={{ marginRight: 10 }} />
          </Pressable>
        </View>
      </View>
        
        <TextInput
          style={styles.searchBar}
          placeholder="Search for restaurants or food..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <FlatList
          data={filteredFoodData}
          renderItem={renderFoodItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.foodList}
        />
      </View>
    </SafeAreaView>
  );
}

// Update navigation options to include profile icon
MenuScreen.navigationOptions = ({ navigation }) => ({
  headerRight: () => (
    <Pressable onPress={() => navigation.navigate('Profile')}>
      <Icon name="user" size={30} color="blue" style={{ marginRight: 10 }} />
    </Pressable>
  ),
});

// Update navigation options to include profile icon
MenuScreen.navigationOptions = ({ navigation }) => ({
  headerRight: () => (
    <Pressable onPress={() => navigation.navigate('Profile')}>
      <Icon name="user" size={30} color="black" style={{ marginRight: 10 }} />
    </Pressable>
  ),
});


// FoodItemDetails screen component
function FoodItemDetails({ route, navigation }) {
  const { item } = route.params; // Get the selected item from route params
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  const {colour, backgroundC}= useContext(DashboardContent)


  const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    backgroundC,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: backgroundC,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  buttonText: {
    color: colour,
    fontSize: 18,
  },
  homeContent: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#333',
    color: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  foodCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  foodImage: {
    width: '100%',
    height: 150,
  },
  foodInfo: {
    padding: 10,
  },
  foodName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  foodPrice: {
    fontSize: 14,
    color: '#888',
  },
  foodList: {
    paddingBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityButton: {
    backgroundColor: '#ff5722',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    color: 'white',
    fontSize: 18,
  },
  quantityText: {
    fontSize: 18,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  addToCartButton: {
    backgroundColor: '#ff5722',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 18,
  },
  cartContainer: {
    padding: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  cartItemName: {
    fontSize: 16,
  },
  cartItemPrice: {
    fontSize: 16,
  },
  removeButton: {
    color: '#ff5722',
    fontSize: 16,
  },
  deliveryFee: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  grandTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  emptyCart: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
  profileContainer: {
    padding: 20,
  },
  profileTitle: {
    fontSize: 22,
    marginBottom: 20,
  },
  checkoutContainer: {
    padding: 20,
  },
  foodDetailContainer: {
    padding: 20,
  },
  foodDetailImage: {
    width: '100%',
    height: 200,
  },
  foodDetailName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  foodDetailPrice: {
    fontSize: 20,
    color: '#888',
    marginVertical: 10,
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  foodList: {
    flex: 1,
  },
});


  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = (parseFloat(item.price.replace('$', '')) * quantity).toFixed(2);

  const handleAddToCart = () => {
    addToCart({ ...item, quantity, totalPrice });
    navigation.navigate('Cart'); // Navigate to Cart screen
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.foodDetailContainer}>
        <Image source={item.image} style={styles.foodDetailImage} />
        <Text style={styles.foodDetailName}>{item.name}</Text>
        <Text style={styles.foodDetailPrice}>${item.price}</Text>
        <View style={styles.quantityContainer}>
          <Pressable style={styles.quantityButton} onPress={decreaseQuantity}>
            <Text style={styles.quantityButtonText}>-</Text>
          </Pressable>
          <Text style={styles.quantityText}>{quantity}</Text>
          <Pressable style={styles.quantityButton} onPress={increaseQuantity}>
            <Text style={styles.quantityButtonText}>+</Text>
          </Pressable>
        </View>
        <Text style={styles.totalPrice}>Total: ${totalPrice}</Text>
        <Pressable style={{
            backgroundColor: backgroundC, // Button background color
            paddingVertical: 15,
            borderRadius: 5,
            alignItems: 'center',}} onPress={handleAddToCart}>
          <Text style={{ color: colour, fontSize: 18 }}>Add to Cart</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

// Cart screen component
function CartScreen({ navigation }) {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const {colour, backgroundC}= useContext(DashboardContent)
  const deliveryFee = 15;
  const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.totalPrice), 0);
  const grandTotal = (totalPrice + deliveryFee).toFixed(2);

  const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: backgroundC,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  buttonText: {
    color: colour,
    fontSize: 18,
  },
  homeContent: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#333',
    color: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  foodCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  foodImage: {
    width: '100%',
    height: 150,
  },
  foodInfo: {
    padding: 10,
  },
  foodName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  foodPrice: {
    fontSize: 14,
    color: '#888',
  },
  foodList: {
    paddingBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityButton: {
    backgroundColor: '#ff5722',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    color: 'white',
    fontSize: 18,
  },
  quantityText: {
    fontSize: 18,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  addToCartButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: 'green',
    fontSize: 18,
  },
  cartContainer: {
    padding: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  cartItemName: {
    fontSize: 16,
  },
  cartItemPrice: {
    fontSize: 16,
  },
  removeButton: {
    color: '#ff5722',
    fontSize: 16,
  },
  deliveryFee: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  grandTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  emptyCart: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
  profileContainer: {
    padding: 20,
  },
  profileTitle: {
    fontSize: 22,
    marginBottom: 20,
  },
  checkoutContainer: {
    padding: 20,
  },
  foodDetailContainer: {
    padding: 20,
  },
  foodDetailImage: {
    width: '100%',
    height: 200,
  },
  foodDetailName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  foodDetailPrice: {
    fontSize: 20,
    color: '#888',
    marginVertical: 10,
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  foodList: {
    flex: 1,
  },
});

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.cartContainer}>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <View key={item.id} style={styles.cartItem}>
                <Text style={styles.cartItemName}>{item.name}</Text>
                <Text style={styles.cartItemPrice}>${item.totalPrice}</Text>
                <Pressable onPress={() => removeFromCart(item.id)}>
                  <Text style={styles.removeButton}>Remove</Text>
                </Pressable>
              </View>
            ))}
            <Text style={styles.deliveryFee}>Delivery Fee: ${deliveryFee}</Text>
            <Text style={styles.grandTotal}>Total: ${grandTotal}</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Checkout')}>
              <Text style={styles.buttonText}>Checkout</Text>
            </Pressable>
          </>
        ) : (
          <Text style={styles.emptyCart}>Your cart is empty</Text>
        )}
        <Pressable style={styles.button} onPress={() => navigation.navigate('Menu')}>
          <Text style={styles.buttonText}>Continue Shopping</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

// Checkout screen component
function CheckoutScreen() {
  const { cartItems , setCartItems} = useContext(CartContext);
  const {colour, backgroundC}= useContext(DashboardContent)
  const deliveryFee = 15;
  const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.totalPrice), 0);
  const grandTotal = (totalPrice + deliveryFee).toFixed(2);

  const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: backgroundC,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  buttonText: {
    color: colour,
    fontSize: 18,
  },
  homeContent: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#333',
    color: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  foodCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  foodImage: {
    width: '100%',
    height: 150,
  },
  foodInfo: {
    padding: 10,
  },
  foodName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  foodPrice: {
    fontSize: 14,
    color: '#888',
  },
  foodList: {
    paddingBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityButton: {
    backgroundColor: '#ff5722',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    color: 'white',
    fontSize: 18,
  },
  quantityText: {
    fontSize: 18,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  addToCartButton: {
    backgroundColor: 'Blue',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 18,
  },
  cartContainer: {
    padding: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  cartItemName: {
    fontSize: 16,
  },
  cartItemPrice: {
    fontSize: 16,
  },
  removeButton: {
    color: '#ff5722',
    fontSize: 16,
  },
  deliveryFee: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  grandTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  emptyCart: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
  profileContainer: {
    padding: 20,
  },
  profileTitle: {
    fontSize: 22,
    marginBottom: 20,
  },
  checkoutContainer: {
    padding: 20,
  },
  foodDetailContainer: {
    padding: 20,
  },
  foodDetailImage: {
    width: '100%',
    height: 200,
  },
  foodDetailName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  foodDetailPrice: {
    fontSize: 20,
    color: '#888',
    marginVertical: 10,
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  foodList: {
    flex: 1,
  },
});


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.checkoutContainer}>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <View key={item.id} style={styles.cartItem}>
                <Text style={styles.cartItemName}>{item.name}</Text>
                <Text style={styles.cartItemPrice}>${item.totalPrice}</Text>
              </View>
            ))}
            <Text style={styles.deliveryFee}>Delivery Fee: ${deliveryFee}</Text>
            <Text style={styles.grandTotal}>Total: ${grandTotal}</Text>
            <Pressable style={styles.button} onPress={()=> setCartItems([])}>
              <Text style={styles.buttonText}>Confirm Payment</Text>
            </Pressable>
          </>
        ) : (
          <Text style={styles.emptyCart}>Your cart is empty</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

// Profile screen component
function ProfileScreen({ navigation }) {
  const { name, surname, email, phoneNumber, setName, setSurname, setEmail, setPhoneNumber, colour, setColour, backgroundC, setBackgroundC } = useContext(DashboardContent);

  const [editName, setEditName] = useState(name);
  const [editSurname, setEditSurname] = useState(surname);
  const [editEmail, setEditEmail] = useState(email);
  const [editPhoneNumber, setEditPhoneNumber] = useState(phoneNumber);

  const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: backgroundC,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  buttonText: {
    color: colour,
    fontSize: 18,
  },
  homeContent: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#333',
    color: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  foodCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  foodImage: {
    width: '100%',
    height: 150,
  },
  foodInfo: {
    padding: 10,
  },
  foodName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  foodPrice: {
    fontSize: 14,
    color: '#888',
  },
  foodList: {
    paddingBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityButton: {
    backgroundColor: '#ff5722',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    color: 'white',
    fontSize: 18,
  },
  quantityText: {
    fontSize: 18,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  addToCartButton: {
    backgroundColor: '#ff5722',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 18,
  },
  cartContainer: {
    padding: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  cartItemName: {
    fontSize: 16,
  },
  cartItemPrice: {
    fontSize: 16,
  },
  removeButton: {
    color: '#ff5722',
    fontSize: 16,
  },
  deliveryFee: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  grandTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  emptyCart: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
  profileContainer: {
    padding: 20,
  },
  profileTitle: {
    fontSize: 22,
    marginBottom: 20,
  },
  checkoutContainer: {
    padding: 20,
  },
  foodDetailContainer: {
    padding: 20,
  },
  foodDetailImage: {
    width: '100%',
    height: 200,
  },
  foodDetailName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  foodDetailPrice: {
    fontSize: 20,
    color: '#888',
    marginVertical: 10,
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  foodList: {
    flex: 1,
  },
});

  const handleSave = () => {
    setName(editName);
    setSurname(editSurname);
    setEmail(editEmail);
    setPhoneNumber(editPhoneNumber);
    navigation.goBack(); // Navigate back to Menu screen
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.profileContainer}>
        <Text style={styles.profileTitle}>Profile Information</Text>
        <TextInput
          placeholder="Name"
          placeholderTextColor="white"
          style={styles.input}
          value={editName}
          onChangeText={setEditName}
        />
        <TextInput
          placeholder="Surname"
          placeholderTextColor="white"
          style={styles.input}
          value={editSurname}
          onChangeText={setEditSurname}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="white"
          style={styles.input}
          value={editEmail}
          onChangeText={setEditEmail}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Phone Number"
          placeholderTextColor="white"
          style={styles.input}
          value={editPhoneNumber}
          onChangeText={setEditPhoneNumber}
          keyboardType="phone-pad"
        />
        <Pressable style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </Pressable>
         <Pressable style={styles.button} onPress={()=> {setBackgroundC('#ff5722'); setColour('black')}}>
          <Text style={styles.buttonText}>Light</Text>
        </Pressable>
         <Pressable style={styles.button} onPress={()=> {setBackgroundC('black'); setColour('white')}}>
          <Text style={styles.buttonText}>Dark</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

// Styles

// Navigation setup
const Stack = createStackNavigator();

export default function App() {
  return (
    <DashboardProvider>
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator>
           
            <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Address" component={AddressScreen} options={{ title: 'Address Details' }} />
            <Stack.Screen 
              name="Menu" 
              component={MenuScreen} 
              options={({ navigation }) => ({
                headerShown: false
                
              })}
            />
            <Stack.Screen name="FoodItemDetails" component={FoodItemDetails} options={{headerShown: false }} />
            <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Cart' }} />
            <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ title: 'Checkout' }} />
            <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </DashboardProvider>
  );
}
