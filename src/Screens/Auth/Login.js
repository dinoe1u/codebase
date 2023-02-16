// --------------- LIBRARIES ---------------
import React, { useEffect, useState, createRef, useContext } from 'react';
import { Image, View, KeyboardAvoidingView, Keyboard, TouchableOpacity, ScrollView, Text, TextInput, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// --------------- ASSETS ---------------
import { loginStyle as styles } from './styles';
import { Images, Colors, Fonts, Scale } from '../../CommonConfig';
import Loader from '../../Components/Common/Loader';

// EITHER WE CAN USE NAVIGATION FROM HERE IF COMPONENT IS NOT IMPORTED INTO NAVIGATION FILE
import { Popup } from '../../Helpers';
import { ThemeContext } from '../../Components/Hooks/ThemeProvider';
import { AfterInteractions } from '../../Components/Global/AfterInteractions';
// --------------- FUNCTION DECLARATION ---------------
const Login = ({ navigation, route }) => {

    const { dark, theme, toggle } = useContext(ThemeContext);

    // --------------- STATE ---------------
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');

    const passwordInputRef = createRef();

    // --------------- LIFECYCLE ---------------
    useEffect(() => {

    }, []);

    // --------------- METHODS ---------------
    const onNavigate = (screen) => {
        navigation.navigate(screen)
    }
    const showAlert = (message) => {
        Popup.errorToast(message)
    }
    const toggleTheme = () => {
        toggle()
    }
    // --------------- UI METHODS ---------------

    // --------------- RENDER ---------------
    return (
        <SafeAreaView style={styles.container(theme)} >
            <View style={styles.mainBody(theme)}>
                <AfterInteractions>
                    <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior={Platform.OS == 'android' ? '' : 'padding'} enabled>
                        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.scrollViewStyle}>
                            <TouchableOpacity onPress={() => toggleTheme()} style={styles.darkModeButtonStyle(theme)}>
                                <Text style={styles.darkModeTextStyle(theme)}>Dark Mode</Text>
                            </TouchableOpacity>
                            <View>
                                <ImageBackground source={Images.LOGIN_RECTANGLE} resizeMode={'contain'} style={styles.loginContainerImage} imageStyle={{ tintColor: theme.backgroundCard }}>
                                    <View style={styles.SectionStyle}>
                                        <Image source={Images.MESSAGING_ICON} resizeMode={'contain'} style={styles.loginInputIconStyle} />
                                        <TextInput
                                            style={styles.inputStyle}
                                            onChangeText={(UserEmail) =>
                                                setUserEmail(UserEmail)
                                            }
                                            placeholder="Enter Email" //dummy@abc.com
                                            placeholderTextColor={theme.fontColor}
                                            autoCapitalize="none"
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
                                    <View style={styles.SectionStyle}>
                                        <Image source={Images.LOCK_ICON} resizeMode={'contain'} style={styles.loginInputIconStyle} />
                                        <TextInput
                                            style={styles.inputStyle}
                                            onChangeText={(UserPassword) =>
                                                setUserPassword(UserPassword)
                                            }
                                            placeholder="Enter Password" //12345
                                            placeholderTextColor={theme.fontColor}
                                            keyboardType="default"
                                            ref={passwordInputRef}
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
                                    <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5} onPress={() => onNavigate('Root')}>
                                        <Text style={styles.buttonTextStyle}>LOGIN</Text>
                                    </TouchableOpacity>
                                </ImageBackground>
                                <Text style={[styles.registerTextStyle, { color: theme.fontColor }]} onPress={() => onNavigate('Register')}>
                                    Don't have an account ? Register
                                </Text>
                                <Text style={styles.joinNowTextStyle}>
                                    or join with
                                </Text>
                                <View style={styles.socialIconsRow}>
                                    <Image source={Images.GOOGLE} resizeMode={'contain'} style={styles.socialIconStyle} />
                                    <Image source={Images.TWITTER} resizeMode={'contain'} style={styles.socialIconStyle} />
                                    <Image source={Images.LINKEDIN} resizeMode={'contain'} style={styles.socialIconStyle} />
                                    <Image source={Images.FACEBOOK} resizeMode={'contain'} style={styles.socialIconStyle} />
                                </View>
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                </AfterInteractions>
                <Loader visible={loading} />
            </View>
        </SafeAreaView>
    );
};

export default Login;
