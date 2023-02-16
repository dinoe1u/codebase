// --------------- LIBRARIES ---------------
import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, SafeAreaView, View, Image, Platform, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, useSafeAreaInsets, } from 'react-native-safe-area-context';
import NetInfo from '@react-native-community/netinfo';
import { useSelector, useDispatch } from 'react-redux';

// --------------- ASSETS ---------------
import { navigationRef } from './Helpers/Navigation';
import { getNetwork } from './Redux/Actions';
import { Colors, Matrics, Scale, ApplicationStyle, Fonts, Images } from './CommonConfig';

// --------------- SCREENS ---------------
import Splash from './Screens/Splash';
import Login from './Screens/Auth/Login';
import Register from './Screens/Auth/Register';

// --------------- SCREENS - Home Tab Bar ---------------
import Home from './Screens/HomeTab/Home';

// --------------- SCREENS - Profile Tab Bar ---------------
import Profile from './Screens/ProfileTab/Profile';
import ImagesListing from './Screens/HomeTab/ImagesListing';
import Search from './Screens/SearchTab/Search';
import CartScreen from './Screens/CartTab/CartScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


// --------------- BOTTOM TAB STACKS ---------------
const HomeStack = () => (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
);

const ProfileStack = () => (
    <Stack.Navigator>
        <Stack.Screen name='Profile' component={Profile} options={BlankHeader} />
    </Stack.Navigator>
);

const SearchStack = () => (
    <Stack.Navigator>
        <Stack.Screen name='Search' component={Search} options={{ title: "Search" }} />
    </Stack.Navigator>
);

const CartStack = () => (
    <Stack.Navigator>
        <Stack.Screen name='Cart' component={CartScreen} options={{ title: "Search" }} />
    </Stack.Navigator>
);

// --------------- BOTTOM TAB BAR---------------
const BottomTabNavigator = (props) => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            backBehavior='initialRoute'
            screenOptions={{ headerShown: false }}
            tabBar={({ navigation, state, route }) => <BottomTab navigation={navigation} state={state} route={route} />}
        >
            <Tab.Screen name='Home' component={HomeStack} options={{ headerShown: false }} />
            <Tab.Screen name='Search' component={SearchStack} />
            <Tab.Screen name='Cart' component={CartStack} />
            <Tab.Screen name='Notification' component={ProfileStack} />
        </Tab.Navigator>
    );
};

// --------------- ROUTES ---------------
const Routes = () => {
    // --------------- REDUCER STATE ---------------
    const { Common } = useSelector((state) => state); // Get reducer state
    const dispatch = useDispatch(); // dispatch method to dispatch our actions to reducer and saga

    // --------------- LIFECYCLE ---------------
    React.useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            dispatch(getNetwork.Request(state.isConnected));
        });

        return () => {
            unsubscribe();
        };
    }, []);

    // --------------- RENDER ---------------
    return (
        <SafeAreaProvider>
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator initialRouteName='Splash'>
                    <Stack.Screen name='Splash' options={{ headerShown: false }} component={Splash} />
                    <Stack.Screen name='Login' options={{ headerShown: false }} component={Login} />
                    <Stack.Screen name='Register' options={{ headerShown: false }} component={Register} />
                    <Stack.Screen name='ImagesListing' component={ImagesListing} />
                    <Stack.Screen name='Root' options={{ headerShown: false }} component={BottomTabNavigator} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};


const BottomTab = ({ navigation, state, route }) => {
    return (
        <SafeAreaView style={Styles.mainView}>
            {state.routes.map((route, index) => {
                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };
                return (
                    <TouchableOpacity onPress={onPress} activeOpacity={1} style={Styles.mainTabView}>
                        {
                            index == 0 &&
                            <View style={Styles.tabView}>
                                <Image source={Images.HOME_TAB_ICON} resizeMode={'contain'} style={[Styles.tabImage, isFocused && Styles.activeTabStyle]} />
                            </View>
                        }
                        {
                            index == 1 &&
                            <View style={Styles.tabView}>
                                <Image source={Images.SEARCH_TAB_ICON} resizeMode={'contain'} style={[Styles.tabImage, isFocused && Styles.activeTabStyle]} />
                            </View>
                        }
                        {
                            index == 2 &&
                            <View style={Styles.tabView}>
                                <Image source={Images.CART_TAB_ICON} resizeMode={'contain'} style={[Styles.tabImage, isFocused && Styles.activeTabStyle]} />
                            </View>
                        }
                        {
                            index == 3 &&
                            <View style={Styles.tabView}>
                                <Image source={Images.BELL_TAB_ICON} resizeMode={'contain'} style={[Styles.tabImage, isFocused && Styles.activeTabStyle]} />
                            </View>
                        }
                    </TouchableOpacity>
                )
            })}
        </SafeAreaView>
    )
}

// =============== STYLSHEET ===============
const Styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row', height: Scale(50), shadowColor: Colors.GRAY,
        borderTopWidth: 0,
        backgroundColor: Colors.WHITE,
        borderTopColor: Colors.EXTRA_LIGHT,
        shadowOffset: { width: 0, height: -10 }, shadowOpacity: 0.1, shadowRadius: 3, elevation: 3
    },
    mainTabView: {
        flex: 1,
        height: Scale(60),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
    },
    tabView: {
        height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: Scale(10)
    },
    tabImage: {
        height: Scale(20), width: Scale(20), tintColor: Colors.LIGHT_GRAY
    },
    tabLabel: {
        fontSize: Scale(12.5), fontWeight: '600', marginTop: Scale(5), textAlign: 'center'
    },
    activeTabStyle: {
        height: Scale(25), width: Scale(25), tintColor: Colors.PRIMARY
    }
})

export default Routes;

const BlankHeader = () => {
    return {
        headerStyle: { height: 0 },
        headerTitle: '',
        headerLeft: () => <View />,
        headerRight: () => <View />
    }
}