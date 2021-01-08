import React, { ReactElement } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfilePage from '../component/ProfilePage'

const ProfileStack = createStackNavigator();
const ProfileStackScreen: React.FC = (): ReactElement => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile_index" component={ProfilePage}  options={{ title: '我的' }}/>
    </ProfileStack.Navigator>
  );
}
  
export default ProfileStackScreen