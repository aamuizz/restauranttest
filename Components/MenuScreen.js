import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import Menu from "./Menu";
import All_Tabs from "./All_Tabs";

export default class MenuScreen extends React.Component {
    render() {
        const Stack = createStackNavigator();
        return (
            <Stack.Navigator  screenOptions={{ headerStyle: { backgroundColor: '#ef4528',shadowOffset:0,elevation:0 },headerTitleStyle:{color:'white'} }}>
                <Stack.Screen name="Home" component={All_Tabs} options={{
                    title: 'Menu', headerLeft : () => (
                        <Button
                            onPress={() => { this.props.navigation.openDrawer() }}
                            icon={<Icon name={'menu'} size={25} color="#fff" />}
                            buttonStyle={{ backgroundColor: 'ef4528', marginLeft: 8 }}
                        />
                    ), headerRight: () => (
                        <Icon  style={{marginRight: 8}} name={'qrcode'} type='antdesign' size={25} color="#fff" />
                    )
                }} />

            </Stack.Navigator>
        );
    }
}
