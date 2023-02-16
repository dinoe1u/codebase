// --------------- LIBRARIES ---------------
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Image, StatusBar, Platform, FlatList, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

// --------------- ASSETS ---------------
import { profileStyle as styles } from './styles';
import { Images, Colors } from '../../CommonConfig';
import HomeHeader from './Components/HomeHeader';

// EITHER WE CAN USE NAVIGATION FROM HERE IF COMPONENT IS NOT IMPORTED INTO NAVIGATION FILE
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

// --------------- FUNCTION DECLARATION ---------------
const Home = ({ navigation, route }) => {


    // --------------- REDUCER STATE ---------------
    const { Common, Auth, Home } = useSelector((state) => state);
    const dispatch = useDispatch();

    // --------------- STATE ---------------
    const [selectedCategory, setSelectedCategory] = useState('All');

    // --------------- LIFECYCLE ---------------    

    useEffect(() => {
        Platform.OS == 'android' && StatusBar.setBackgroundColor(Colors.WHITE)
    }, []);

    // --------------- METHODS ---------------

    // --------------- UI METHODS ---------------

    // --------------- RENDER ---------------
    const RenderCategory = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => setSelectedCategory(item)} style={[styles.categoryContainer, selectedCategory == item && styles.activeCategoryStyle]}>
                <Text style={[styles.categoryTextStyle, selectedCategory == item && styles.activeCategoryText]}>{item}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <HomeHeader onDrawerPress={() => alert("Hi")} onUserPress={() => { }} />
            <View style={styles.bodyContainer}>
                <Text style={styles.greetText}>Hi Hriday,</Text>
                <Text style={styles.greet1Text}>Choose your favourite shoes</Text>


                {/* ------  SEARCH INPUT  ------ */}
                <View style={styles.searchBoxContainer}>
                    <Image source={Images.SEARCH_TAB_ICON} style={styles.searchIconStyle} />
                    <TextInput
                        placeholder={'Search shoes'}
                        placeholderTextColor={Colors.GRAY}
                        style={styles.searchInputStyle}
                    />
                </View>
            </View>

            {/* ------ CATEGORY LISTING ------- */}
            <View style={styles.categoryFlatlistContainer}>
                <FlatList
                    data={['All', 'Nike', 'Adidas', 'Puma', 'Fila']}
                    horizontal
                    style={styles.categoryFlatlistStyle}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => <RenderCategory item={item} />}
                />
            </View>

            {/* ------- RECOMMENDED FOR YOU ------- */}
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                    <Text style={styles.recommendedTextStyle}>Recommended for you</Text>
                )}
                keyExtractor={(item, index) => item.key}
                style={styles.productFlatlistStyle}
                renderItem={() => {
                    return (
                        <View style={styles.productContainer}>
                        </View>
                    )
                }}
            />
        </SafeAreaView>
    );
};

export default Home;
