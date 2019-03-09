import React from 'react';
import { Dimensions } from 'react-native'
import {
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator,
    createBottomTabNavigator
} from 'react-navigation';
import {
    ListScreen,
    ProfileScreen
} from '../screens';
import { DrawerMenu } from "../components";
import { Icon } from "../components";
import globalStyles from '../styles/GlobalStyles';

const WIDTH = Dimensions.get('window').width;
const navConfigs = {
    headerMode: 'none'
};

const drawerConfigs = {
    drawerPosition: "left",
    drawerWidth: WIDTH / 1.3,
    contentComponent: props => <DrawerMenu {...props} />,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle",
    contentOptions: {
        activeTintColor: "#000",
        inactiveTintColor: "#000",
        activeBackgroundColor: "#FFFFFF",
        inactiveBackgroundColor: "#FFFFFF"
    }
};

const BottomTabNavigator = createBottomTabNavigator({
    Lists: {
        screen: ListScreen,
        navigationOptions: () => ({
            title: "Lists",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="ios-list"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
    Inspiration: {
        screen: ListScreen,
        navigationOptions: () => ({
            title: "Inspiration",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="ios-albums"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: () => ({
            title: "Profile",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="ios-person"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
}, {
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#fff',
            style: {
                backgroundColor: '#435a68'
            },
        }
    }
);

const HomeStack = createStackNavigator({
    Home: BottomTabNavigator,
}, navConfigs);

const Drawer = createDrawerNavigator({
    Home: HomeStack
}, drawerConfigs);

const RootNav = createStackNavigator({
    HomeStack: { screen: Drawer }
}, navConfigs);

export default createAppContainer(RootNav)