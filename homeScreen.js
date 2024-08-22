import React, { useContext } from 'react';
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, TextInput, Pressable } from 'react-native';
import { DashboardContent } from './dashboardDetails'; // Adjust the path as necessary

export default function Home({ navigation }) {
    const { name, surname, setName, setSurname } = useContext(DashboardContent);

    const handleContinue = () => {
        if (name && surname) {
            navigation.navigate('Menu'); // Navigate to the Menu screen
        } else {
            alert('Please enter your name and surname');
        }
    };

    return (
        <ImageBackground source={require('./assets/homebackcolour.jpg')} style={styles.background}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.overlay}>
                    <Text style={styles.title}>Scooter Food Deliveries</Text>
                    <Text style={styles.subtitle}>Enter Details Below</Text>
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
                        <Pressable style={styles.button} onPress={handleContinue}>
                            <Text style={styles.buttonText}>Continue</Text>
                        </Pressable>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white',
    },
    safeArea: {
        flex: 1,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 20,
    },
    title: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        color: 'white',
        marginBottom: 20,
        textAlign: 'center',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#A092FA',
        padding: 15,
        borderRadius: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});