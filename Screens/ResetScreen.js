import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';

const ResetScreen = ({navigation}) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [secure, setSecure] = useState(true);
    const [confirmSecure, setConfirmSecure] = useState(true);


    return(
        <LinearGradient
      colors={['#FFFFFF', '#B6F7FF']}
      style={styles.container}
    >
      <TouchableOpacity
      onPress={() =>
        navigation.navigate('emailrecovScreen')
    }>
        <Ionicons name="arrow-back-outline" size={30} color="black" />
      </TouchableOpacity>

      <View>
        <Text style={styles.Text1}>
          Reset Password
        </Text>
        <Text style={styles.Text2}>
          And now you can type your new password and confirm it below
        </Text>
      </View>

        <View style={styles.inputContainer}>
          <Text style={styles.Text1}>
          Create your new password
          </Text>

          <View>
          <Text style={styles.Text3}>
            Enter your new password
          </Text>

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.inputs}
              placeholder="Password"
              placeholderTextColor="#888"
              secureTextEntry={secure}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setSecure(!secure)}>
              <Ionicons
                name={secure ? 'eye-off' : 'eye'}
                size={22}
                color="#777"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          </View>

          <View>
          <Text style={styles.Text3}>
            Confirm your new password
          </Text>

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.inputs}
              placeholder="Confirm Password"
              placeholderTextColor="#888"
              secureTextEntry={confirmSecure}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity onPress={() => setConfirmSecure(!confirmSecure)}>
              <Ionicons
                name={confirmSecure ? 'eye-off' : 'eye'}
                size={22}
                color="#777"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.Submitbtn}>
            <Text>Done</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
      paddingHorizontal: 20,
    },
    Text1: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000',
      textAlign: 'center',
      marginTop: 20,
    },
    Text2: {
      fontSize: 15,
      color: '#000',
      textAlign: 'center',
      marginTop: 10,
    },
    Text3: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000',
      marginTop: 20,
    },
    inputContainer: {
      backgroundColor: 'white',
      width: '100%',
      height: '60%',
      marginTop: 70,
      borderRadius: 40,
      padding: 20,
      justifyContent: 'space-between',
    },
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#eee',
      borderWidth: 1,
      borderColor: '#8EE6FF',
      borderRadius: 8,
      paddingHorizontal: 12,
      height: 50,
      marginTop: 20,
    },
    inputs: {
      flex: 1,
      fontSize: 16,
      color: '#000',
    },
    icon: {
      marginLeft: 8,
    },
  
    Submitbtn:{
      width:'100%',
      height: 50,
      backgroundColor: '#B6F7FF',
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });

  

  export default ResetScreen