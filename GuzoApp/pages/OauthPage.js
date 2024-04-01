import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

function OauthPage() {
    const [signInOption, setSignInOption] = useState('email');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState('US');

    const handleSignInOption = (option) => {
        setSignInOption(option);
    };

    const handleSignIn = () => {
        // Implement your sign-in logic here
        console.log('Signing in with', signInOption);

        if (signInOption === 'email') {
            // Handle email and password sign in
        } else if (signInOption === 'phone') {
            // Handle phone number sign in with verification code
        }
    };

    const handleSelectCountry = (country) => {
        setCountryCode(country.cca2);
    };

    return (
        <ImageBackground
            source={{ uri: 'https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MTgyNjk2MTU2MTMwNzgwNTc5/in-his-masterpieces.webp' }}
            style={styles.backgroundImage}
            resizeMode="cover"
            blurRadius={100}
        >
            <View style={styles.container}>
                {signInOption === 'email' && (
                    <>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            keyboardType="email-address"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry={true}
                        />
                        <TouchableOpacity activeOpacity={0.8} style={styles.signInButton} onPress={handleSignIn}>
                            <Text style={styles.buttonText}>Sign In</Text>
                        </TouchableOpacity>
                        <Text style={styles.orText}>Or sign in with</Text>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.phoneButton}
                            onPress={() => handleSignInOption('phone')}
                        >
                            <Text style={styles.buttonText}>Sign in with Phone Number</Text>
                        </TouchableOpacity>
                    </>
                )}
                {signInOption === 'phone' && (
                    <View style={{ display: 'block', width:'100%' }}>
                        <View style={styles.phoneInputContainer}>
                            <View style={styles.countryCode}>
                                <CountryPicker
                                withFilter
                                withFlag
                                withCallingCode
                                countryCode={countryCode}
                                onSelect={handleSelectCountry}
                                
                                
                            /></View>
                            
                            <TextInput
                                style={[styles.input, {width:'65%',borderBottomLeftRadius: 0, borderTopLeftRadius: 0,borderBottomRightRadius: 5, borderTopRightRadius: 5}]}
                                placeholder="Phone Number"
                                keyboardType="phone-pad"
                                onChangeText={(text) => setPhoneNumber(text)}
                            />
                        </View>
                        <View style={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.signInButton} onPress={handleSignIn}>
                                <Text style={styles.buttonText}>Sign In</Text>
                            </TouchableOpacity>
                            <Text style={styles.orText}>Or sign in with</Text>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={styles.phoneButton}
                                onPress={() => handleSignInOption('email')}
                            >
                                <Text style={styles.buttonText}>Sign in with Email</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        width: '100%',
    },
    input: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent white background
    },
    phoneInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        marginBottom: 10,
        borderRadius: 5,
        width:'100%'
    },
    countryCode:{
        width: '15%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        marginBottom: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    signInButton: {
        width: '80%',
        height: 50,
        backgroundColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    orText: {
        color: '#fff',
        marginBottom: 10,
    },
    emailButton: {
        backgroundColor: '#28a745', // Green color for email sign in
    },
    phoneButton: {
        width: '80%',
        height: 50,
        backgroundColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10,
    },
});


export default OauthPage;
