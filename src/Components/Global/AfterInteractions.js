import React, { useContext, useEffect, useState } from 'react';
import { Animated, InteractionManager, View } from 'react-native';
import { Colors } from '../../CommonConfig';

export const AfterInteractions = ({ children }) => {

    const [interactionsComplete, setInteractionsComplete] = useState(false);
    const [fadeValue, setFadeValue] = useState(new Animated.Value(0));
    let interactionHandle = null;

    useEffect(() => {
        interactionHandle = InteractionManager.runAfterInteractions(() => {
            _start();
        });
        return () => {
            interactionHandle && interactionHandle.cancel();
            setFadeValue(new Animated.Value(0));
        };
    }, []);

    const _start = () => {
        setInteractionsComplete(true);
        Animated.timing(fadeValue, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start(() => interactionHandle = null);
    };

    if (interactionsComplete) {
        return (
            <Animated.View style={[{ flex: 1 }, { opacity: fadeValue, backgroundColor: Colors.TRANSPARENT }]}>
                {children}
            </Animated.View>
        );
    }
    return <View style={[{ flex: 1 }, { backgroundColor: Colors.BACKGROUND }]} />;
};


AfterInteractions.propTypes = {
    children: 0,
};
