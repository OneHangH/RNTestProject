import React, { ReactElement } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeStackScreen from './HomeStackScreen'
import ProfileStackScreen from './ProfileStackScreen'
import { styleParameter } from '../styles'
const Tab = createBottomTabNavigator()
const RootTabs: React.FC = (): ReactElement => {
  return (
    <Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName = 'podium';
					if (route.name === 'Home') {
						iconName = focused
							? 'podium'
							: 'podium-outline'
					} else if (route.name === 'Profile') {
						iconName = focused ? 'person' : 'person-outline'
					}
					return <Ionicons name={iconName} size={size} color={color} />;
				}
			})}
			tabBarOptions={{
				activeTintColor: styleParameter.themeColor,
				inactiveTintColor: styleParameter.gray,
			}}
		>
			<Tab.Screen name="Home" component={HomeStackScreen} options={{ title: '首页' }}/>
			<Tab.Screen name="Profile" component={ProfileStackScreen} options={{ title: '我的' }}/>
		</Tab.Navigator>
  )
}

  
export default RootTabs