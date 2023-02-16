// --------------- LIBRARIES ---------------
import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import Toast from 'react-native-easy-toast';
import DropdownAlert from 'react-native-dropdownalert';

// --------------- ASSETS ---------------
import { Colors, Fonts, Images, Matrics } from '../../CommonConfig';

// --------------- COMPONENT ---------------
const ImageComponent = ({ source, style }) => {

    useEffect(() => {

    }, []);

    return (
        <ImageBackground source={source} style={style}>

        </ImageBackground>
    );
};

const styles = StyleSheet.create({

});

export default ImageComponent;
