import React from 'react'

import { Button, Screen, Text } from '@components'
import { AppTabScreenProps } from '@routes'

export function Home({ navigation }: AppTabScreenProps<'Home'>) {
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
