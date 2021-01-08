import React, { ReactElement } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import RootTabs from './RootTabs'
const Stack = createStackNavigator()
const RootNavigator: React.FC = (): ReactElement => {
  return (
    <NavigationContainer>
			<RootTabs />
    </NavigationContainer>
  )
}

  
export default RootNavigator