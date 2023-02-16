import { StyleSheet, Platform } from 'react-native';
import { Colors, Matrics, Fonts, ApplicationStyle, Scale, FontSize } from '../../CommonConfig';

export const profileStyle = StyleSheet.create({
    container: ApplicationStyle.wrapper,
    // container: [ApplicationStyle.wrapper, { backgroundColor: Colors.BACKGROUND }],
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
    imageCompStyle: {
        flex: 1
        , height: Scale(250)
    },
    flatlistStyle: {
        flex: 1
    },
    imageContainer: {
        flex: 1
    },
    descriptionTextStyle: {
        textAlign: 'center',
        fontWeight: '500',
        fontFamily: Fonts.Regular,
        margin: Scale(10)
    },

    bodyContainer: {
        width: '90%',
        paddingTop: Scale(15),
        alignSelf: 'center'
    },

    greetText: {
        fontFamily: Fonts.Regular,
        lineHeight: Scale(18),
        fontSize: FontSize.Regular,
        color: Colors.BLACK
    },

    greet1Text: {
        fontFamily: Fonts.SemiBold,
        lineHeight: Scale(30),
        fontSize: FontSize.Large,
        color: Colors.BLACK
    },

    searchBoxContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: Scale(10),
        backgroundColor: Colors.BACKGROUND,
        height: Scale(40),
        marginVertical: Scale(15),
        borderRadius: Scale(12),
        borderWidth: 0.4,
        borderColor: Colors.LIGHT_GRAY
    },

    searchIconStyle: {
        width: Scale(18),
        height: Scale(18)
    },

    searchInputStyle: {
        marginLeft: Scale(10),
        height: Scale(40),
        fontFamily: Fonts.Regular
    },

    categoryContainer: {
        paddingHorizontal: Scale(18),
        borderWidth: 1,
        borderColor: Colors.GRAY,
        paddingVertical: Scale(3),
        borderRadius: Scale(5),
        marginLeft: Scale(15),
        alignItems: 'center',
        justifyContent: 'center',
        height: Scale(26)
    },

    categoryFlatlistStyle: {
        paddingHorizontal: Scale(5)
    },

    categoryTextStyle: {
        fontFamily: Fonts.SemiBold,
        fontSize: FontSize.Small,
        color: Colors.BLACK
    },

    activeCategoryStyle: {
        backgroundColor: Colors.PRIMARY,
        borderColor: Colors.PRIMARY
    },

    activeCategoryText: {
        color: Colors.WHITE
    },

    categoryFlatlistContainer: {
        height: Scale(35)
    },

    homeScrollViewContainer: {
        width: '92%',
        alignSelf: 'center',
        flex: 1
    },

    recommendedTextStyle: {
        fontFamily: Fonts.Regular,
        color: Colors.BLACK,
        lineHeight: Scale(25),
        marginVertical: Scale(5),
        marginLeft: Scale(5),
        fontSize: FontSize.Regular
    },

    productFlatlistStyle: {
        width: '92%',
        marginTop: Scale(10),
        alignSelf: 'center'
    },

    productContainer: {
        flex: 1,
        height: Scale(160),
        borderRadius: Scale(10),
        backgroundColor: Colors.BACKGROUND,
        margin: Scale(5)
    }
});
