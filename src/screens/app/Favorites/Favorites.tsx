import React from 'react'

import { Screen, Text } from '@components'
import { AppTabScreenProps } from '@routes'

export function Favorites({ navigation }: AppTabScreenProps<'Favorites'>) {
  return (
    <Screen>
      <Text>Favorites</Text>
    </Screen>
  )
}
