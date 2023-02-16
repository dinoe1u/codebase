// --------------- LIBRARIES ---------------
import React from 'react';
import { View, Animated, Modal, ActivityIndicator, StyleSheet, Text, FlatList } from 'react-native';
import { Colors, Fonts, Matrics, Scale } from '../../../CommonConfig';

// --------------- ASSETS ---------------

// --------------- COMPONENT DECLARATION ---------------
const LargeList = ({ data }) => {
    const animation = new Animated.Value(0);
    return (
        <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event([{
                nativeEvent: {
                    contentOffset: {
                        y: animation
                    }
                }
            }], { useNativeDriver: false })}
            scrollEventThrottle={1}
            renderItem={(item) => <RenderItem item={item.item} index={item.index} />}
            ListEmptyComponent={() => <ListEmptyComponent />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
        />
    );
};

/* Separator component rendered between each item on the list */
const SeparatorComponent = () => {
    return <View style={styles.separatorLine} />
}

const RenderItem = ({ item, index }) => {
    const { Description } = item
    return (
        <View style={styles.renderItemStyle}>
            <Text style={styles.descriptionTextStyle}>{Description}</Text>
        </View>
    )
}

const ListEmptyComponent = ({ item, index }) => {
    return (
        <View style={styles.listEmptyContainer}>
            <Text style={styles.noDataTextStyle}>No data found</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    separatorLine: {
        height: 1,
        backgroundColor: Colors.GRAY,
        paddingTop: Scale(2),
    },
    renderItemStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        height: Scale(80),
        backgroundColor: Colors.PRIMARY,
        marginBottom: Scale(5)
    },
    descriptionTextStyle: {
        fontSize: Scale(15),
        fontWeight: 'bold',
        color: Colors.WHITE
    },
    noDataTextStyle: {
        fontFamily: Fonts.Regular,
        fontSize: Scale(14),
        color: Colors.LIGHT_GRAY
    },
    listEmptyContainer: {
        height: Matrics.screenWidth,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});

export default LargeList;
