import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Button, Screen, Text } from '@components'
import { AppStackParamList } from '@routes'

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'Home'>

export function Home({ navigation }: ScreenProps) {
  return (
    <Screen>
      <Text>Home</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </Screen>
  )
}
