import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { AppStackRoutes } from './AppStack.routes'
import { AuthStackRoutes } from './AuthStack.routes'

export function Router() {
  const authenticated = true

  return (
    <NavigationContainer>
      {authenticated ? <AppStackRoutes /> : <AuthStackRoutes />}
    </NavigationContainer>
  )
}
