import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { FormContext } from './formContext'; // Import FormContext

const Form3Screen = ({ navigation }) => {
  const { formData, setFormData } = useContext(FormContext);
  const [cardNumber, setCardNumber] = useState(formData.cardNumber || '');
  const [expirationDate, setExpirationDate] = useState(formData.expirationDate || '');
  const [cvv, setCvv] = useState(formData.cvv || '');

  const handleSubmit = () => {
    // Simple validation
    if (cardNumber.length === 16 && expirationDate && cvv.length === 3) {
      setFormData({ ...formData, cardNumber, expirationDate, cvv });
      // Finalize form submission (e.g., API call)
      Alert.alert('Form Submitted');
      navigation.navigate('Home'); // Navigate to another screen after submission
    } else {
      Alert.alert('Please enter valid payment details');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Credit Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Expiration Date (MM/YY)"
        value={expirationDate}
        onChangeText={setExpirationDate}
        style={styles.input}
      />
      <TextInput
        placeholder="CVV"
        value={cvv}
        onChangeText={setCvv}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { marginBottom: 15, padding: 10, borderColor: 'gray', borderWidth: 1, borderRadius: 5 },
});

export default Form3Screen;