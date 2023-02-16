// --------------- LIBRARIES ---------------
import React, { useState, createRef, useContext } from 'react';
import { Image, View, KeyboardAvoidingView, Keyboard, TouchableOpacity, ScrollView, Text, TextInput, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// --------------- ASSETS ---------------
import { registerStyle as styles } from './styles';
import { Images, Colors } from '../../CommonConfig';
import { ThemeContext } from '../../Components/Hooks/ThemeProvider';

// EITHER WE CAN USE NAVIGATION FROM HERE IF COMPONENT IS NOT IMPORTED INTO NAVIGATION FILE
import { Popup } from '../../Helpers';
import Loader from '../../Components/Common/Loader';
import { AfterInteractions } from '../../Components/Global/AfterInteractions';

// --------------- FUNCTION DECLARATION ---------------
const Register = ({ navigation, route }) => {

    const { dark, theme, toggle } = useContext(ThemeContext);

    // --------------- STATE ---------------
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');

    const emailInputRef = createRef();
    const confirmPasswordInputRef = createRef();
    const passwordInputRef = createRef();

    // --------------- LIFECYCLE ---------------
    const handleSubmitPress = () => {
        setErrortext('');
        if (!userEmail) {
            showAlert('Please fill Email');
            return;
        }
        if (!userPassword) {
            showAlert('Please fill Password');
            return;
        }
        setLoading(true);
    };
    // --------------- METHODS ---------------
    const onNavigate = (screen) => {
        navigation.navigate(screen)
    }
    const showAlert = (message) => {
        Popup.warn(message)
    }

    // --------------- UI METHODS ---------------
    // --------------- RENDER ---------------
    return (
        <SafeAreaView style={styles.container(theme)} >
            <View style={styles.mainBody(theme)}>
                <AfterInteractions>
                    <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior={Platform.OS == 'android' ? '' : 'padding'} enabled>
                        <Loader visible={loading} />
                        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.scrollViewStyle}>
                            <View>
                                <View style={styles.reactLogoContainer}>
                                    <Image source={Images.REACT_ICON} style={styles.reactImageStyle} />
                                </View>
                                <View style={styles.SectionStyle(theme)}>
                                    <Image source={Images.USER} resizeMode={'contain'} style={styles.loginInputIconStyle} />
                                    <TextInput
                                        style={styles.inputStyle}
                                        onChangeText={(UserEmail) =>
                                            setUserEmail(UserEmail)
                                        }
                                        placeholder="Enter Name"
                                        placeholderTextColor={theme.fontColor}
                                        returnKeyType="next"
                                        onSubmitEditing={() =>
                                            emailInputRef.current &&
                                            emailInputRef.current.focus()
                                        }
                                        underlineColorAndroid="#f000"
                                        blurOnSubmit={false}
                                    />
                                </View>
                                <View style={styles.SectionStyle(theme)}>
                                    <Image source={Images.MESSAGING_ICON} resizeMode={'contain'} style={styles.loginInputIconStyle} />
                                    <TextInput
                                        style={styles.inputStyle}
                                        onChangeText={(UserEmail) =>
                                            setUserEmail(UserEmail)
                                        }
                                        placeholder="Enter Email" //dummy@abc.com
                                        placeholderTextColor={theme.fontColor}
                                        autoCapitalize="none"
                                        ref={emailInputRef}
                                        keyboardType="email-address"
                                        returnKeyType="next"
                                        onSubmitEditing={() =>
                                            passwordInputRef.current &&
                                            passwordInputRef.current.focus()
                                        }
                                        underlineColorAndroid="#f000"
                                        blurOnSubmit={false}
                                    />
                                </View>
                                <View style={styles.SectionStyle(theme)}>
                                    <Image source={Images.LOCK_ICON} resizeMode={'contain'} style={styles.loginInputIconStyle} />
                                    <TextInput
                                        style={styles.inputStyle}
                                        onChangeText={(UserPassword) =>
                                            setUserPassword(UserPassword)
                                        }
                                        placeholder="Enter Password"
                                        placeholderTextColor={theme.fontColor}
                                        keyboardType="default"
                                        ref={passwordInputRef}
                                        onSubmitEditing={Keyboard.dismiss}
                                        blurOnSubmit={false}
                                        onSubmitEditing={() => confirmPasswordInputRef.current && confirmPasswordInputRef.current.focus()}
                                        secureTextEntry={true}
                                        underlineColorAndroid="#f000"
                                        returnKeyType="next"
                                    />
                                </View>
                                <View style={styles.SectionStyle(theme)}>
                                    <Image source={Images.LOCK_ICON} resizeMode={'contain'} style={styles.loginInputIconStyle} />
                                    <TextInput
                                        style={styles.inputStyle}
                                        onChangeText={(UserPassword) =>
                                            setUserPassword(UserPassword)
                                        }
                                        placeholder="Enter Confirm Password"
                                        placeholderTextColor={theme.fontColor}
                                        keyboardType="default"
                                        ref={confirmPasswordInputRef}
                                        onSubmitEditing={Keyboard.dismiss}
                                        blurOnSubmit={false}
                                        secureTextEntry={true}
                                        underlineColorAndroid="#f000"
                                        returnKeyType="next"
                                    />
                                </View>
                                {errortext != '' ? (
                                    <Text style={styles.errorTextStyle}>
                                        {errortext}
                                    </Text>
                                ) : null}
                                <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5} onPress={handleSubmitPress}>
                                    <Text style={styles.buttonTextStyle}>REGISTER</Text>
                                </TouchableOpacity>
                                <Text style={styles.registerTextStyle(theme)} onPress={() => onNavigate('Login')}>
                                    Alerdy have an account ? Login
                                </Text>
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                </AfterInteractions>
            </View>
        </SafeAreaView>
    );
};

export default Register;
