import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Menu from "./Menu";

const Tab = createMaterialTopTabNavigator();

export default function All_Tabs() {
    return (
        <Tab.Navigator   tabBarOptions={{ indicatorStyle: {
                borderBottomWidth: 2,
                borderColor: "#258423",
            },
            style: { backgroundColor: '#ef4528',shadowOffset:0,elevation:0 },labelStyle: { color:'#fff',fontSize:12 },tabStyle: { width: 80 }
        }}>
            <Tab.Screen name="MENU" component={Menu} />
            <Tab.Screen name="CART" component={Menu} />
            <Tab.Screen name="ORDERS" component={Menu} />
            <Tab.Screen name="GROUPS" component={Menu} />

        </Tab.Navigator>
    );
}