import { StyleSheet, Platform } from 'react-native';
import { Colors, Matrics, Fonts, ApplicationStyle, Scale } from '../../CommonConfig';

export const cartStyle = StyleSheet.create({
    container: ApplicationStyle.wrapper,
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
    imageCompStyle: { flex: 1, height: Scale(250) },
    flatlistStyle: { flex: 1 },
    imageContainer: { flex: 1 },
    descriptionTextStyle: { textAlign: 'center', fontWeight: '500', margin: Scale(10) }
});
