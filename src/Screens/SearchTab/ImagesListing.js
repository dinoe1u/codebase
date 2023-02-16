// --------------- LIBRARIES ---------------
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';

// --------------- ASSETS ---------------
import { profileStyle as styles } from './styles';
import { ImageComponent } from '../../CommonConfig';


// --------------- FUNCTION DECLARATION ---------------
const ImagesListing = ({ navigation, route }) => {

    // --------------- STATE ---------------

    // --------------- REDUCER STATE ---------------

    // --------------- LIFECYCLE ---------------

    // --------------- METHODS ---------------

    // --------------- UI METHODS ---------------

    // --------------- RENDER ---------------
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={require('../../Screens/HomeTab/Components/girlsData.json')}
                style={styles.flatlistStyle}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.imageContainer}>
                            <ImageComponent source={{ uri: item.image_url }} style={styles.imageCompStyle} />
                            <Text style={styles.descriptionTextStyle}>{item.description}</Text>
                        </View>
                    )
                }}
            />
        </SafeAreaView>
    );
};

export default ImagesListing;
