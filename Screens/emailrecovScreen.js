import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';


const emailrecovScreen = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
        <TouchableOpacity
        onPress={() =>
            navigation.navigate('forgotpassScreen')
        }>
        <Ionicons name="arrow-back-outline" size={30} color="black" />
        </TouchableOpacity>
        
        <View  style={styles.imgcontainer}>
            <Image source={require('../assets/img/forgotpassimg.png')} style={styles.forgotpassimg} />
        </View>

        <View style={styles.texts}>
            <Text style={styles.Text1}>Check your Email</Text>
            <Text style={styles.Text2}>We have sent a password recovery to your email</Text>
        </View>

        
      <TouchableOpacity style={styles.SignInbtn}
      onPress={() =>
        navigation.navigate('ResetScreen')
    }>
      <Text style={styles.RegisterbtnText}>Next</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
      </SafeAreaView>
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
    
    imgcontainer: {
      justifyContent: 'çenter',
      alignItems: 'center',
      width: '100%',
      height: '30%',
      marginTop: 30,
    },
  
    btncontainer:{
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 120,
      paddingHorizontal: 20,
    },
  
    SignInbtn:{
      backgroundColor: '#B6F7FF',
      padding: 10,
      borderRadius: 40,
      width: '100%',
      height: 50,
      
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
  
      position: 'absolute',      // stick it to the screen
      bottom: 20,                // 20px from bottom
      left: 20,                  // optional horizontal padding
      right: 20,
      paddingVertical: 10,
    },
  });
 
  export default emailrecovScreen