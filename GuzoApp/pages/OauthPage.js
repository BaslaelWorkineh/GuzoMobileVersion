import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
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

        <View style={styles.container}>
            <Text style={styles.title}>Sign in or create an account</Text>
            <Text style={styles.subtitle}>Unlock Ethiopia's travel with one account across Ethiopia. Hotels.com, and Vibo.</Text>
            <TouchableOpacity style={styles.googleSignInButton}>
                <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/013/948/549/original/google-logo-on-transparent-white-background-free-vector.jpg' }} style={styles.googleLogo} />
                <Text style={styles.googleButtonText}>Sign in with Google</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>or</Text>

            <View style={{ display: "flex", width: '100%', alignItems: 'center' }}>
                {signInOption === 'email' && (
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="email-address"
                    />
                )}
                {signInOption === 'phone' && (
                    <View style={styles.phoneInputContainer}>
                        <View style={styles.countryCode}>
                            <CountryPicker
                                withFilter
                                withFlag
                                withCallingCode
                                countryCode={countryCode}
                                onSelect={handleSelectCountry}
                            />
                        </View>
                        <TextInput
                            style={[styles.input, { width: '65%', borderBottomLeftRadius: 0, borderTopLeftRadius: 0, borderBottomRightRadius: 5, borderTopRightRadius: 5 }]}
                            placeholder="Phone Number"
                            keyboardType="phone-pad"
                            onChangeText={(text) => setPhoneNumber(text)}
                        />
                    </View>
                )}
                <TouchableOpacity activeOpacity={0.8} style={styles.continueButton} onPress={handleSignIn}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </View>


            <Text style={styles.otherSignInText}>Other ways to sign in</Text>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.optButton}
                onPress={() => handleSignInOption(signInOption === 'email' ? 'phone' : 'email')}
            >
                <Text style={styles.buttonText}>Sign in with {signInOption === 'email' ? 'Phone number' : 'Email'}</Text>
            </TouchableOpacity>
            <Text style={styles.termsText}>By continuing, you have read and agree to our <Text style={styles.termsLink}>terms and conditions</Text> <Text style={styles.termsLink}>Privacy Statement</Text> and  <Text style={styles.termsLink}>Meheja's reward terms and conditions</Text></Text>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }} >
                <Text style={styles.termsText}>Meheja</Text>
                <Text style={styles.termsText}>Basketo</Text>
                <Text style={styles.termsText}>Guzo</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: "space-evenly",
        alignItems: 'center',
        padding: 20,
        width: '100%',
        backgroundColor: '#0C0E1B',
        height: '100%'

    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        Top: 0,
        color: '#fff',
    },
    subtitle: {
        marginBottom: 20,
        color: '#fff',
    },
    googleSignInButton: {
        width: '80%',
        height: 50,
        backgroundColor: '#3D84F0',
        flexDirection:'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10,
    },
    googleLogo: {
        width: 32,
        height: 32,
        marginRight: 10,
        borderRadius:5
    },
    googleButtonText: {
        fontSize: 16,
        color:'#fff'
    },
    orText: {
        color: '#fff',
        marginBottom: 10,
    },
    input: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    continueButton: {
        width: '80%',
        height: 50,
        backgroundColor: '#3D84F0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10,
    },
    otherSignInText: {
        color: '#fff',
        marginBottom: 10,
    },
    optButton: {
        width: '80%',
        height: 50,
        backgroundColor: 'transparent', // Nature green color
        borderWidth:1,
        borderColor:'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    termsText: {
        color: '#fff',
        marginBottom: 10,
    },
    termsLink: {
        color: '#228DFF',
        textDecorationLine: 'underline',
    },
    phoneInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 5,
        width: '100%'
    },
    countryCode: {
        width: '15%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        marginBottom: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
});


export default OauthPage;
