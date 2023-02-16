// --------------- LIBRARIES ---------------
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Image, Button, StatusBar, Platform, Switch } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

// --------------- ASSETS ---------------
import { cartStyle as styles } from './styles';
import { Icons, Images, Fonts, Constants, Colors, setHeader } from '../../CommonConfig';
import { getEvents } from '../../Redux/Actions';
import Loader from '../../Components/Common/Loader';

// EITHER WE CAN USE NAVIGATION FROM HERE IF COMPONENT IS NOT IMPORTED INTO NAVIGATION FILE
import { Navigation, Localization, Popup } from '../../Helpers';
import LargeList from '../SearchTab/Components/LargeList';

// --------------- FUNCTION DECLARATION ---------------
const CartScreen = ({ navigation, route }) => {

    // --------------- REDUCER STATE ---------------
    const { Common, Auth, Home } = useSelector((state) => state);
    const dispatch = useDispatch();

    // --------------- STATE ---------------
    const [isLoadingGetEvents, setLoadingGetEvent] = useState(false);
    const [eventList, setEventList] = useState(Home?.eventListResponse?.entries ? Home.eventListResponse.entries : []);

    // --------------- LIFECYCLE ---------------    

    // HANDLE GET EVENT RESPONSE
    React.useEffect(() => {
        if (isLoadingGetEvents && Home.isEventSuccess == true) {
            setLoadingGetEvent(false);
            setEventList(Home?.eventListResponse?.entries ? Home.eventListResponse.entries : [])
        } else if (isLoadingGetEvents && Home.isEventSuccess == false) {
            Popup.error(Home.errorMsg)
            setEventList(Home?.eventListResponse?.entries ? Home.eventListResponse.entries : [])
            setLoadingGetEvent(false);
        }
    }, [Home.isEventSuccess]);

    useEffect(() => {
        Platform.OS == 'android' && StatusBar.setBackgroundColor(Colors.WHITE)
    }, []);

    // --------------- METHODS ---------------
    const callGetEvents = () => {
        setLoadingGetEvent(true);
        dispatch(getEvents.Request());
    }

    // --------------- UI METHODS ---------------
    // --------------- RENDER ---------------
    return (
        <SafeAreaView style={styles.container}>
            <LargeList data={eventList} />
            <Button title={'GET DATA'} onPress={callGetEvents} color={Colors.PRIMARY} />
            <Loader visible={isLoadingGetEvents} />
        </SafeAreaView>
    );
};

export default CartScreen;
