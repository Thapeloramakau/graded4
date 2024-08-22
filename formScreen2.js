import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { FormContext } from './formContext'; // Import FormContext

const Form2Screen = ({ navigation }) => {
  const { formData, setFormData } = useContext(FormContext);
  const [address, setAddress] = useState(formData.address || '');
  const [city, setCity] = useState(formData.city || '');
  const [state, setState] = useState(formData.state || '');
  const [zip, setZip] = useState(formData.zip || '');

  const handleNext = () => {
    // Simple validation
    if (address && city && state && zip) {
      setFormData({ ...formData, address, city, state, zip });
      navigation.navigate('Form3');
    } else {
      Alert.alert('Please fill in all fields');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />
      <TextInput
        placeholder="City"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />
      <TextInput
        placeholder="State"
        value={state}
        onChangeText={setState}
        style={styles.input}
      />
      <TextInput
        placeholder="Zip Code"
        value={zip}
        onChangeText={setZip}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { marginBottom: 15, padding: 10, borderColor: 'gray', borderWidth: 1, borderRadius: 5 },
});

export default Form2Screen;