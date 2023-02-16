// --------------- LIBRARIES ---------------
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Image, Button, StatusBar, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

// --------------- ASSETS ---------------
import { profileStyle as styles } from './styles';
import { Icons, Images, Fonts, Constants, Colors, setHeader, ImageComponent } from '../../CommonConfig';
import Loader from '../../Components/Common/Loader';


// --------------- FUNCTION DECLARATION ---------------
const ImagesListing = ({ navigation, route }) => {

    // --------------- STATE ---------------
    const [isLoadingGetEvents, setLoadingGetEvent] = useState(false);
    const [eventList, setEventList] = useState([]);

    // --------------- REDUCER STATE ---------------
    const { Common, Auth, Home } = useSelector((state) => state);
    const dispatch = useDispatch();

    // --------------- LIFECYCLE ---------------

    // HANDLE GET EVENT RESPONSE
    // setHeader(navigation, "Images List")

    // --------------- METHODS ---------------

    // --------------- UI METHODS ---------------

    // --------------- RENDER ---------------
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={require('../../Screens/HomeTab/Components/data.json')}
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
            <Loader visible={isLoadingGetEvents} />
        </SafeAreaView>
    );
};

export default ImagesListing;
