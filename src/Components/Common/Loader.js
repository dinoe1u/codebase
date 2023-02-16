// --------------- LIBRARIES ---------------
import React from 'react';
import { View, Modal, ActivityIndicator, StyleSheet, Text } from 'react-native';

// --------------- ASSETS ---------------
import { Colors, Fonts, ApplicationStyle, Matrics, FontSize } from '../../CommonConfig';
import { Localization } from '../../Helpers';

// --------------- COMPONENT DECLARATION ---------------
const Loader = ({ visible, label }) => {
    return (
        <Modal visible={visible} transparent statusBarTranslucent={true}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <ActivityIndicator size={'small'} color={Colors.PRIMARY} />
                    <Text style={styles.label}>Loading...</Text>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.OVERLAY_DARK_60,
        height: '100%',
        width: '100%',
        alignItems: 'center',
    },
    card: {
        height: Matrics.mvs(55),
        paddingHorizontal: Matrics.s(20),
        justifyContent: 'center',
        alignItems: 'center',
        ...ApplicationStyle.shadow(),
        backgroundColor: Colors.WHITE,
        borderRadius: Matrics.mvs(6),
        flexDirection: 'row',
        maxWidth: '90%'
    },
    label: {
        fontSize: FontSize.Small,
        color: Colors.BLACK,
        fontFamily: Fonts.Regular,
        marginLeft: Matrics.s(8),
    },
});
export default Loader;
