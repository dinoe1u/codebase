// --------------- LIBRARIES ---------------
import React, { Fragment, useEffect } from 'react';
import { TextInput, SafeAreaView, Text, Platform, UIManager, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider } from './Components/Hooks/ThemeProvider';
import AsyncStorage from '@react-native-community/async-storage';

// --------------- ASSETS ---------------
import Routes from './Routes';
import { Store, Persistor } from './Redux/Store';
import AlertComponent from './Components/Common/AlertComponent';

/**
 * Font scalling configuration, 
 * By setting this configuration it will not allow app to use mobile default configuration for fonts and font size.
 */
if (Text.defaultProps == null) Text.defaultProps = {};
Text.defaultProps.allowFontScaling = false;
if (TextInput.defaultProps == null) TextInput.defaultProps = {};
TextInput.defaultProps.allowFontScaling = false;

/**
 * Animation configuration for Android
 */
if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

// --------------- MAIN ---------------
export default () => {
    console.disableYellowBox = true;

    //Lifecycle methods
    useEffect(() => {
        StatusBar.setBarStyle('dark-content')
    }, []);

    // PUSH NOTIFICATION PERMISSION FUNCTION
    const notificationPermission = async () => {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            getToken();
        } else {
            checkPermission();
        }
    };

    //TO GET FCM TOKEN
    const getToken = async () => {
        let deviceToken = await AsyncStorage.getItem('deviceToken');
        if (deviceToken == null || deviceToken == undefined) {
            messaging()
                .getToken()
                .then(async (token) => {
                    await AsyncStorage.setItem('deviceToken', token);
                    global.deviceToken = token;
                });
        } else {
            global.deviceToken = deviceToken;
        }
    };

    const checkPermission = async () => {
        const authStatus = await messaging().hasPermission();
        switch (authStatus) {
            case -1:
                // console.log('NOT_DETERMINED');
                return;

            case 0:
                // console.log('DENIED');
                return;

            case 1:
                // console.log('AUTHORIZED');
                return;

            case 2:
                // console.log('PROVISIONAL');
                return;

            default:
                return;
        }
    };

    return (
        <ThemeProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <Fragment>
                    <Provider store={Store}>
                        <PersistGate persistor={Persistor}>
                            <StatusBar barStyle={'dark-content'} />
                            <Routes />
                            <AlertComponent />
                        </PersistGate>
                    </Provider>
                </Fragment>
            </SafeAreaView>
        </ThemeProvider>
    );
};
