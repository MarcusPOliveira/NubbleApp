import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList } from '@routes'
import { Button, Icon, Screen, Text } from '@components'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Success'>

export function Success({ route, navigation }: ScreenProps) {
  function goBack() {
    navigation.goBack()
  }

  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text preset="headingLarge" mt="s24">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {route.params.description}
      </Text>
      <Button title="Voltar ao inicio" mt="s40" onPress={goBack} />
    </Screen>
  )
}
