import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const splashScreen = ({ navigation }) => {
    return (
        <LinearGradient
            colors={['#B6F7FF', '#FFFFFF']}
            style={styles.container}
        >
            <Image source={require('../assets/img/slashimg.png')} style={styles.splashimg} />
            <Text style={styles.splashtext1}>Welcome to Nexora</Text>
            <Text style={styles.splashtext2}>A platform where possibilities become paths. Let's get started!</Text>

            <View style={styles.btncontainer}>
                <TouchableOpacity 
                style={styles.SignInbtn}
                onPress={() =>
                    navigation.navigate('SignInScreen')
                }>
                    <Text style={styles.RegisterbtnText}>Sign In</Text>
                    <Ionicons name="arrow-forward-outline" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.Registerbtn}
                onPress={() =>
                    navigation.navigate('SignUpScreen')
                }>
                    <Text style={styles.RegisterbtnText}>Register</Text>
                    <Ionicons name="arrow-forward-outline" size={24} color="black" />
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
    },
    splashimg: {
        width: '100%',
        height: '50%',
    },
    splashtext1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginTop: 20,
    },
    splashtext2: {
        fontSize: 15,
        color: '#000',
        textAlign: 'center',
        marginTop: 10,
    },
    btncontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 120,
        paddingHorizontal: 20,
    },
    SignInbtn: {
        backgroundColor: '#B6F7FF',
        padding: 10,
        borderRadius: 40,
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    Registerbtn: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 40,
        width: '100%',
        height: 50,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    RegisterbtnText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',

    },
});



export default splashScreen