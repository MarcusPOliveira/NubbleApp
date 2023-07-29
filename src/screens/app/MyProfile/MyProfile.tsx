import React from 'react'

import { Screen, Text } from '@components'
import { AppTabScreenProps } from '@routes'

export function MyProfile({ navigation }: AppTabScreenProps<'MyProfile'>) {
  return (
    <Screen>
      <Text>My Profile</Text>
    </Screen>
  )
}
