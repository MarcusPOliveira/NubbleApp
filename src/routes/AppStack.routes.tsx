import React from 'react'

import { NavigatorScreenParams } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home, PostComment, Profile, Settings } from '@screens'

import { AppTabBottomParamList, AppTabRoutes } from './AppTab.routes'

export type AppStackParamList = {
  // Home: undefined
  AppTabRoutes: NavigatorScreenParams<AppTabBottomParamList> //Conceito de Nesting Navigator
  Settings: undefined
  PostCommentScreen: {
    postId: number
    postAuthorId: number
  }
  Profile: {
    userId: number
  }
}

const Stack = createNativeStackNavigator<AppStackParamList>()

export function AppStackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="AppTabRoutes"
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
    >
      <Stack.Screen name="AppTabRoutes" component={AppTabRoutes} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="PostCommentScreen" component={PostComment} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}
