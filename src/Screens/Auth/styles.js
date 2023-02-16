import { StyleSheet, Platform } from 'react-native';
import { Colors, Matrics, Fonts, ApplicationStyle, Scale, FontSize } from '../../CommonConfig';

export const loginStyle = StyleSheet.create({
    scrollViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    keyboardAvoidingView: {
        flex: 1
    },
    container: (theme) => { return [ApplicationStyle.wrapper, { backgroundColor: theme.backgroundColor }] },
    reactLogoContainer: {
        alignItems: 'center'
    },
    wrapper: (insetTop) => ({
        flex: 1,
        paddingHorizontal: Scale(20),
        paddingBottom: Scale(16),
        paddingTop: insetTop,
    }),
    topCorner: {
        width: Matrics.screenWidth,
        height: Matrics.screenWidth * 0.4,
        position: 'absolute',
        zIndex: 1,
        marginTop: -2,
        // paddingTop: Scale(10)
    },
    mainBody: (theme) => {
        return {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: theme.backgroundColor,
            alignContent: 'center',
        }
    },
    SectionStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        height: Scale(40),
        marginTop: Scale(20),
        marginLeft: Scale(35),
        marginRight: Scale(35),
        margin: Scale(10),
        borderBottomWidth: 1,
        borderBottomColor: Colors.EXTRA_LIGHT_GRAY
    },
    buttonStyle: {
        backgroundColor: Colors.PRIMARY,
        borderWidth: 0,
        color: Colors.PRIMARY,
        borderColor: Colors.PRIMARY,
        height: Scale(40),
        width: '80%',
        alignItems: 'center',
        borderRadius: Scale(30),
        marginLeft: Scale(35),
        marginRight: Scale(35),
        marginTop: Scale(20),
        marginBottom: Scale(25),
    },
    buttonTextStyle: {
        color: Colors.WHITE,
        paddingVertical: Scale(10),
        fontFamily: Fonts.SemiBold,
        fontSize: FontSize.Regular
    },
    inputStyle: {
        flex: 1,
        color: Colors.PRIMARY,
        fontFamily: Fonts.Regular,
        paddingLeft: Scale(15),
        paddingRight: Scale(15)
    },
    registerTextStyle: {
        color: Colors.GRAY,
        textAlign: 'center',
        fontFamily: Fonts.SemiBold,
        fontSize: FontSize.Medium,
        alignSelf: 'center',
        padding: Scale(10),
    },
    joinNowTextStyle: {
        color: Colors.LIGHT_GRAY,
        fontFamily: Fonts.Regular,
        textAlign: 'center',
        fontSize: FontSize.Medium,
        alignSelf: 'center',
        padding: Scale(10),
        marginTop: Scale(15),
        marginBottom: Scale(8)
    },
    errorTextStyle: {
        color: 'red',
        fontFamily: Fonts.Regular,
        textAlign: 'center',
        fontSize: FontSize.Medium,
    },
    reactImageStyle: {
        width: '70%',
        height: Scale(100),
        resizeMode: 'contain',
        margin: Scale(20),
    },
    loginInputIconStyle: {
        tintColor: Colors.LIGHT_GRAY,
        width: Scale(18),
        height: Scale(18)
    },
    loginContainerImage: {
        alignSelf: 'center',
        width: Scale(300),
        justifyContent: 'flex-end',
        paddingBottom: Scale(25),
        alignItems: 'center',
        height: Scale(350)
    },
    socialIconsRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    socialIconStyle: {
        marginHorizontal: Scale(8),
        width: Scale(35),
        height: Scale(35),
        tintColor: Colors.PRIMARY
    },
    darkModeButtonStyle: (theme) => {
        return {
            borderWidth: 0.6,
            borderColor: theme.fontColor,
            width: Scale(150),
            alignSelf: 'center',
            height: Scale(35),
            backgroundColor: theme.backgroundCard,
            justifyContent: 'center',
            alignItems: 'center'
        }
    },
    darkModeTextStyle: (theme) => {
        return {
            fontFamily: Fonts.Regular,
            fontSize: FontSize.Regular,
            color: theme.color,
            textAlign: 'center'
        }
    }
});

export const registerStyle = StyleSheet.create({
    scrollViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    keyboardAvoidingView: {
        flex: 1
    },
    container: (theme) => { return [ApplicationStyle.wrapper, { backgroundColor: theme.backgroundColor }] },
    reactLogoContainer: {
        alignItems: 'center'
    },
    wrapper: (insetTop) => ({
        flex: 1,
        paddingHorizontal: Scale(20),
        paddingBottom: Scale(16),
        paddingTop: insetTop,
    }),
    topCorner: {
        width: Matrics.screenWidth,
        height: Matrics.screenWidth * 0.4,
        position: 'absolute',
        zIndex: 1,
        marginTop: -2,
        // paddingTop: Scale(10)
    },
    mainBody: (theme) => {
        return {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: theme.backgroundColor,
            alignContent: 'center',
        }
    },
    SectionStyle: (theme) => {
        return {
            flexDirection: 'row',
            alignItems: 'center',
            height: Scale(45),
            marginTop: Scale(5),
            marginLeft: Scale(35),
            marginRight: Scale(35),
            margin: Scale(10),
            borderBottomWidth: 1,
            borderBottomColor: Colors.EXTRA_LIGHT_GRAY,
            paddingHorizontal: Scale(15),
            borderRadius: Scale(10),
            backgroundColor: theme.backgroundCard
        }
    },
    buttonStyle: {
        backgroundColor: Colors.PRIMARY,
        borderWidth: 0,
        color: Colors.PRIMARY,
        borderColor: Colors.PRIMARY,
        height: Scale(40),
        alignItems: 'center',
        borderRadius: Scale(30),
        marginLeft: Scale(35),
        marginRight: Scale(35),
        marginTop: Scale(20),
        marginBottom: Scale(25),
    },
    buttonTextStyle: {
        color: Colors.WHITE,
        fontFamily: Fonts.SemiBold,
        paddingVertical: Scale(10),
        fontSize: FontSize.Medium,
    },
    inputStyle: {
        flex: 1,
        color: Colors.PRIMARY,
        fontFamily: Fonts.Regular,
        paddingLeft: Scale(15),
        paddingRight: Scale(15)
    },
    registerTextStyle: (theme) => {
        return {
            color: theme.fontColor,
            fontFamily: Fonts.SemiBold,
            textAlign: 'center',
            fontSize: FontSize.Medium,
            alignSelf: 'center',
            padding: Scale(10),
        }
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: FontSize.Medium,
    },
    reactImageStyle: {
        width: '70%',
        height: Scale(120),
        resizeMode: 'contain',
        margin: Scale(30),
    },
    loginInputIconStyle: {
        tintColor: Colors.LIGHT_GRAY,
        width: Scale(18),
        height: Scale(18)
    }
});