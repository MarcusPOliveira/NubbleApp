import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { IconProps } from '../components/Icon/Icon'
import { Login } from '../screens/auth/Login/Login'
import { SignUp } from '../screens/auth/SignUp/SignUp'
import { Success } from '../screens/auth/Success/Success'
import { ForgotPassword } from '../screens/auth/ForgotPassword/ForgotPassword'

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

export function Router() {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  )
}
