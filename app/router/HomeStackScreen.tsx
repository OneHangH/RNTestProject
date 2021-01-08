import React, { ReactElement } from 'react'
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import HomePage from '../component/HomePage'
import WebviewPage from '../component/WebviewPage'
import ScanCode from '../component/ScanCode'
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const HomeStack = createStackNavigator();
const HomeStackScreen: React.FC = (): ReactElement => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home_index" component={HomePage}  options={{ title: '首页' }}/>
      <HomeStack.Screen name="Home_webview" component={WebviewPage}  options={{ title: '我的单据', header: () => null }}/>
      <HomeStack.Screen name="Home_scanCode" component={ScanCode}  options={{ title: '扫码'}}/>
    </HomeStack.Navigator>
  );
}
  
export default HomeStackScreen