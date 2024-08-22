import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { FormContext } from './formContext';
import { ThemeContext } from './themeContext';

const ProfileScreen = () => {
  const { userData } = useContext(FormContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const [textColor, setTextColor] = useState(theme.textColor);
  const [bgColor, setBgColor] = useState(theme.backgroundColor);

  const handleSaveTheme = () => {
    setTheme({ textColor, backgroundColor: bgColor });
    Alert.alert('Theme Saved', 'Your theme preferences have been saved.');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={styles.profileSection}>
        <Text style={[styles.label, { color: textColor }]}>Name:</Text>
        <Text style={[styles.value, { color: textColor }]}>{userData.name}</Text>
      </View>
      <View style={styles.profileSection}>
        <Text style={[styles.label, { color: textColor }]}>Email:</Text>
        <Text style={[styles.value, { color: textColor }]}>{userData.email}</Text>
      </View>
      <View style={styles.profileSection}>
        <Text style={[styles.label, { color: textColor }]}>Phone Number:</Text>
        <Text style={[styles.value, { color: textColor }]}>{userData.phone}</Text>
      </View>
      <View style={styles.themeSection}>
        <Text style={[styles.label, { color: textColor }]}>Text Color:</Text>
        <TextInput
          style={[styles.input, { borderColor: textColor }]}
          value={textColor}
          onChangeText={setTextColor}
          placeholder="Enter text color"
          placeholderTextColor={textColor}
        />
        <Text style={[styles.label, { color: textColor }]}>Background Color:</Text>
        <TextInput
          style={[styles.input, { borderColor: textColor }]}
          value={bgColor}
          onChangeText={setBgColor}
          placeholder="Enter background color"
          placeholderTextColor={textColor}
        />
        <Pressable style={[styles.button, { backgroundColor: textColor }]} onPress={handleSaveTheme}>
          <Text style={styles.buttonText}>Save Theme</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileSection: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
    marginVertical: 5,
  },
  themeSection: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ProfileScreen;