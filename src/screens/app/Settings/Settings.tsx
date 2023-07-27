import React from 'react'

import { Screen, Text } from '@components'
import { AppScreenProps } from '@routes'

export function Settings(props: AppScreenProps<'Settings'>) {
  return (
    <Screen canGoBack>
      <Text>Settings</Text>
    </Screen>
  )
}
