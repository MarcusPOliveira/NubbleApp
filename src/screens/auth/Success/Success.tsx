import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList } from '../../../routes/Routes'
import { Screen } from '../../../components/Screen/Screen'
import { Icon } from '../../../components/Icon/Icon'
import { Text } from '../../../components/Text/Text'
import { Button } from '../../../components/Button/Button'

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
