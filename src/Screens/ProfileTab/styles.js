import { StyleSheet, Platform } from 'react-native';
import { Colors, Matrics, Fonts, ApplicationStyle, Scale } from '../../CommonConfig';

export const profileStyle = StyleSheet.create({
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
    }
});
