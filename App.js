
import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import {StatusBar, StyleSheet} from "react-native";
import MenuScreen from "./Components/MenuScreen";


const THEME_COLOR = '#ef4528';
const Drawer = createDrawerNavigator();
export default class App extends React.Component {
    render() {
        return (
            <>
                <StatusBar backgroundColor={THEME_COLOR}  />
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="Home" component={MenuScreen}/>
                </Drawer.Navigator>
            </NavigationContainer>
                </>
        );
    }
};