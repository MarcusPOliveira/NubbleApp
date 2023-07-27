import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Screen, Text } from '@components'
import { AppStackParamList } from '@routes'

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'Settings'>

export function Settings(props: ScreenProps) {
  return (
    <Screen canGoBack>
      <Text>Settings</Text>
    </Screen>
  )
}
