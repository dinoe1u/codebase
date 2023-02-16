// --------------- LIBRARIES ---------------
import React from 'react';
import { View, StatusBar, Animated, Modal, ActivityIndicator, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Colors, Fonts, Images, Matrics, Scale } from '../../../CommonConfig';

// --------------- ASSETS ---------------

// --------------- COMPONENT DECLARATION ---------------
const HomeHeader = ({ onDrawerPress, onUserPress }) => {

    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={onDrawerPress}>
                <Image source={Images.DRAWER_ICON} resizeMode={'contain'} style={styles.drawerIconStyle} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onUserPress} style={styles.userIconContainer}>
                <Image source={Images.USER} style={styles.userIconStyle} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        height: Scale(45),
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    drawerIconStyle: {
        tintColor: Colors.GRAY,
        width: Scale(25),
        height: Scale(25)
    },
    userIconContainer: {
        borderWidth: 2,
        borderColor: Colors.GRAY,
        width: Scale(30),
        height: Scale(30),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Scale(25)
    },
    userIconStyle: {
        tintColor: Colors.PRIMARY,
        width: Scale(15),
        height: Scale(15)
    }
});

export default HomeHeader;
