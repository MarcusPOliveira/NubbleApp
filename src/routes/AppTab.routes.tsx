import React from 'react'

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'

import { Icon, Text } from '@components'
import { Favorites, Home, MyProfile, NewPost } from '@screens'

import { AppTabBar } from './AppTabBar'

export type AppTabBottomParamList = {
  Home: undefined
  NewPost: undefined
  Favorites: undefined
  MyProfile: undefined
}

const Tab = createBottomTabNavigator<AppTabBottomParamList>()

export function AppTabRoutes() {
  function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />
  }

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingTop: 20,
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="NewPost" component={NewPost} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="MyProfile" component={MyProfile} />
    </Tab.Navigator>
  )
}
