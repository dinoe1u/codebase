// --------------- LIBRARIES ---------------
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Toast from 'react-native-easy-toast';
import DropdownAlert from 'react-native-dropdownalert';

// --------------- ASSETS ---------------
import { Colors, Fonts, Matrics } from '../../CommonConfig';

// --------------- COMPONENT ---------------
const AlertComponent = ({ }) => {

    useEffect(() => {

    }, []);

    return (
        <>
            <Toast
                ref={(ref) => (global._alert = ref)}
                style={styles.toastStyle}
                textStyle={styles.toastTextStyle}
                position={'bottom'}
                fadeOutDuration={2000}
            />
            <DropdownAlert
                ref={(ref) => (global._dropdownAlert = ref)}
                closeInterval={3000}
                translucent={true}
                activeStatusBarStyle='light-content'
                inactiveStatusBarStyle='dark-content'
                inactiveStatusBarBackgroundColor={Colors.TRANSPARENT}
                titleStyle={{
                    fontSize: Matrics.mvs(15),
                    // fontFamily: Fonts.Medium,
                    color: Colors.WHITE,
                }}
                messageStyle={{
                    fontSize: Matrics.mvs(13),
                    // fontFamily: Fonts.Regular,
                    color: Colors.WHITE,
                }}
            />
        </>

    );
};

const styles = StyleSheet.create({
    toastStyle: {
        backgroundColor: Colors.BLACK,
        marginHorizontal: Matrics.s(20),
        alignSelf: 'center',
        alignItems: 'center',
    },
    toastTextStyle: {
        fontSize: Matrics.mvs(12),
        // fontFamily: Fonts.Medium,
        color: Colors.WHITE,
    }
});

export default AlertComponent;
