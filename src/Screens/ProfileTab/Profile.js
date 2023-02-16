// --------------- LIBRARIES ---------------
import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// --------------- ASSETS ---------------
import { profileStyle as styles } from './styles';
import { Icons, Images, Fonts, Constants } from '../../CommonConfig';
import { Button, NavLink, MyStatusBar } from '../../Components/Common';

// EITHER WE CAN USE NAVIGATION FROM HERE IF COMPONENT IS NOT IMPORTED INTO NAVIGATION FILE
import { Navigation, Localization } from '../../Helpers';

// --------------- FUNCTION DECLARATION ---------------
const Profile = ({ navigation, route }) => {

    // --------------- STATE ---------------
    // --------------- LIFECYCLE ---------------
    // --------------- METHODS ---------------

    // --------------- UI METHODS ---------------
    // --------------- RENDER ---------------
    return (
        <SafeAreaView style={styles.container}>

        </SafeAreaView>
    );
};

export default Profile;
