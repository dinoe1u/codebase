// --------------- LIBRARIES ---------------
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { CommonActions } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

// --------------- ASSETS ---------------
import { Colors } from '../CommonConfig';

// --------------- FUNCTION DECLARATION ---------------
const Splash = ({ navigation }) => {
    // --------------- REDUCER STATE ---------------
    const { Auth, Common } = useSelector((state) => state);
    const dispatch = useDispatch();

    // --------------- LIFECYCLE ---------------
    useEffect(() => {
        checkAuthentication();
    }, []);

    // --------------- METHODS ---------------
    const checkAuthentication = async () => {
        SplashScreen.hide();

        // ---------- CHECK AUTHENTICATION HERE ----------
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            }),
        );
    };


    // --------------- RENDER ---------------
    return <View style={styles.container} />;
};

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.PRIMARY
    }
})
