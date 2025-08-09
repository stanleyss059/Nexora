import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';

const forgotpassScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
            onPress={() =>
                navigation.navigate('SignInScreen')
            }>
                <Ionicons name="arrow-back-outline" size={30} color="black" />
            </TouchableOpacity>

            <View style={styles.imgcontainer}>
                <Image source={require('../assets/img/Forgotpassimg1.png')} style={styles.forgotpassimg} />
            </View>

            <View>
                <Text style={styles.Text1}>Forgot Password?</Text>
                <Text style={styles.Text2}>Enter your Email to reset your password.</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputs}
                    placeholder="Enter your Email"
                    placeholderTextColor="#888"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <TouchableOpacity 
            style={styles.Submitbtn}
            onPress={() =>
                navigation.navigate('emailrecovScreen')
            }>
                <Text style={styles.SubmitbtnText}>Done</Text>
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
    imgcontainer: {
        alignItems: 'center',
        marginTop: 50,
    },
    forgotpassimg: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
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
    inputContainer: {
        marginTop: 40,
        width: '100%',
    },
    inputs: {
        fontSize: 16,
        color: '#000',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 12,
        backgroundColor: '#f9f9f9',
        width: '100%',
        height: 50,
    },
    Submitbtn: {
        width: '100%',
        height: 50,
        backgroundColor: '#B6F7FF',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        marginTop: 30,
    },
    SubmitbtnText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default forgotpassScreen