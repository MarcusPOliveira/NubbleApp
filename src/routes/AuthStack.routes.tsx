import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { IconProps } from '@components'
import { ForgotPassword, Login, SignUp, Success } from '@screens'

export type RootStackParamList = {
  Login: undefined
  SignUp: undefined
  Success: {
    title: string
    description: string
    icon: Pick<IconProps, 'name' | 'color'> //usando Pick para selecionar quais propriedades eu quero de tal tipagem (contrário de Omit)
  }
  ForgotPassword: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export function AuthStackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Success" component={Success} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  )
}
