import React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function OauthPage() {
  return (
    <View style={styles.container}>
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
      <TouchableOpacity activeOpacity={0.8} style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.orContainer}>
        <Text style={styles.orText}>Or sign in with</Text>
      </View>
      <TouchableOpacity activeOpacity={0.8} style={[styles.button, styles.googleButton]}>
        <Text style={[styles.buttonText, styles.googleButtonText]}>Sign in with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={styles.button}>
        <Text style={styles.buttonText}>Sign in with Phone Number</Text>
      </TouchableOpacity>
      {/* More sign in options can be added similarly */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width:'100%'
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  button: {
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
  orContainer: {
    marginBottom: 10,
  },
  orText: {
    color: '#777',
  },
  googleButton: {
    backgroundColor: '#db4437', // Google's red color
  },
  googleButtonText: {
    fontWeight: 'bold',
  },
});

export default OauthPage;
