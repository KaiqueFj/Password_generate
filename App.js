import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import Clipboard from 'expo-clipboard'

//Will be used to generate the passwords
let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ129384132914841294@#&!';

export default function App() {

  const [password, setPassword] = useState('');
  const [size, setSize] = useState(5);


  //depending the characters the user want, will create a password using the information by the charset
  function generatePass() {
    let pass = '';
    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n))
    }
    setPassword(pass)
  }

  //alow to copy the password
  function copyPass() {
    Clipboard.setString(password)
    alert('password copied with success');

  }

  //displays the information in the screen
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.title}> {size} Characters </Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor='#ff0000'
          minimumTrackTintColor='#000'
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity styles={styles.button} onPress={generatePass}>
        <Text styles={styles.buttonText}>Generate Password</Text>
      </TouchableOpacity>


      {password !== '' && (
        <View style={styles.area}>
          <Text style={styles.Password} onLongPress={copyPass}> {password} </Text>
        </View>
      )}
    </View>
  )
}


//styles for the page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alightItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f3ff'
  },

  logo: {
    fontSize: 30,
    fontWeight: 'bold'
  },

  area: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 7
  },

  button: {
    backgroundColor: '#ffa200',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginBottom: 25,
  },

  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },

  Password: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20
  }


})