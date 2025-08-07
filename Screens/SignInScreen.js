import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';

const SignInScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [secure, setSecure] = useState(true);


    return (
        <LinearGradient
            colors={['#FFFFFF', '#B6F7FF']}
            style={styles.container}
        >
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('splashScreen')
                }>
                <Ionicons name="arrow-back-outline" size={30} color="black" />
            </TouchableOpacity>
            <Text style={styles.signInText1}>Welcome Back!</Text>
            <Text style={styles.signInText2}>Please Enter your Details to Log in</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.signInText3}>Sign In</Text>

                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                    />
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

                <View style={styles.rowContainer}>
                    <TouchableOpacity
                        style={styles.checkboxContainer}
                        onPress={() => setIsChecked(!isChecked)}
                    >
                        <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
                            {isChecked && <Ionicons name="checkmark" size={16} color="white" />}
                        </View>
                        <Text style={styles.checkboxLabel}>Remember me</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.forgotPassword}
                        onPress={() =>
                            navigation.navigate('forgotpassScreen')
                        }>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>LogIn</Text>
                </TouchableOpacity>

                <View style={styles.signupContainer}>
                    <Text>Don't have an account yet? </Text>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('SignUpScreen')
                        }>
                        <Text style={styles.signupText}>Sign Up</Text>
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
    signInText1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginTop: 20,
    },
    signInText2: {
        fontSize: 15,
        color: '#000',
        textAlign: 'center',
        marginTop: 20,
    },
    signInText3: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 5,
    },
    inputContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 30,
        marginTop: 100,
        width: '100%',
        height: '60%',
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        padding: 10,
        marginTop: 30,
        backgroundColor: '#F0F0F0',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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
    forgotPassword: {
        marginTop: -1,
    },
    forgotPasswordText: {
        fontSize: 12,
        color: 'blue',
    },
    loginButton: {
        backgroundColor: '#B6F7FF',
        marginTop: 30,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1,
    },
    loginButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    signupText: {
        color: 'blue',
        fontWeight: 'bold',
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

    },
});
export default SignInScreen  