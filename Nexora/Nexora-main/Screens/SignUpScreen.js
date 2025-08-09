import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import AuthService from '../services/AuthService';

const SignUpScreen = ({ navigation }) => {
    const [fullname, setfullname] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Confirmpassword, setConfirmPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [secure, setSecure] = useState(true);
    const [confirmSecure, setConfirmSecure] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleSignUp = async () => {
        if (!fullname || !email || !password || !Confirmpassword) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        if (password !== Confirmpassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }

        if (!isChecked) {
            Alert.alert('Error', 'Please accept the terms and conditions');
            return;
        }

        setLoading(true);
        try {
            const response = await AuthService.signUp({
                name: fullname,
                email,
                password,
            });
            Alert.alert('Success', 'Account created successfully!');
            navigation.navigate('SignInScreen');
        } catch (error) {
            Alert.alert('Error', error.error || 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <LinearGradient
            colors={['#FFFFFF', '#B6F7FF']}
            style={styles.container}>
            <StatusBar style="auto" />

            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('splashScreen')
                }>
                <Ionicons name="arrow-back-outline" size={30} color="black" />
            </TouchableOpacity>

            <View>
                <Text style={styles.Text1}>Create your Account</Text>
                <Text style={styles.Text2}>Please Enter your Details to Sign Up</Text>
            </View>

            <View style={styles.inputcontainer}>
                <Text style={styles.Text3}>Sign Up</Text>

                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.inputs}
                        placeholder="Fullname"
                        placeholderTextColor="#888"
                        value={fullname}
                        onChangeText={setfullname}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.inputs}
                        placeholder="Email"
                        placeholderTextColor="#888"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

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
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.inputs}
                        placeholder="Confirm Password"
                        placeholderTextColor="#888"
                        secureTextEntry={confirmSecure}
                        value={Confirmpassword}
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

                <TouchableOpacity
                    style={styles.checkboxContainer}
                    onPress={() => setIsChecked(!isChecked)}
                >
                    <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
                        {isChecked && <Ionicons name="checkmark" size={16} color="white" />}
                    </View>
                    <Text style={styles.checkboxLabel}>I Accept the terms and conditions</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.Registerbtn, loading && styles.RegisterbtnDisabled]} 
                    onPress={handleSignUp}
                    disabled={loading}
                >
                    <Text style={{ fontWeight: 'bold' }}>
                        {loading ? 'Creating Account...' : 'Register'}
                    </Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('SignInScreen')
                        }>
                        <Text style={{ color: 'blue' }}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.socialContainer}>
                    <TouchableOpacity style={styles.socialButton}>
                        <Ionicons name="logo-apple" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image
                            source={require('../assets/img/Google-Logo.webp')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Ionicons name="logo-facebook" size={30} color="#1877F2" />
                    </TouchableOpacity>
                </View>
            </View>



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
        marginTop: 20,
    },
    Text3: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 20,
    },

    inputcontainer: {
        width: '100%',
        height: '79%',
        backgroundColor: 'white',
        marginTop: 20,
        borderRadius: 30,
        padding: 20,
    },

    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eee',
        borderWidth: 1,
        borderColor: 'black',
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
        width: 30,
        height: 30,
        marginLeft: 8,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 4,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxChecked: {
        backgroundColor: '#007AFF',
        borderColor: '#007AFF',
    },
    checkboxLabel: {
        fontSize: 12,
        color: '#000',
    },

    Registerbtn: {
        width: '100%',
        height: '9%',
        backgroundColor: '#B6F7FF',
        marginTop: 20,
        borderRadius: 30,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
        alignItems: 'center',
    },
    socialButton: {
        borderWidth: 1,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    RegisterbtnDisabled: {
        opacity: 0.6,
    },
});

export default SignUpScreen;