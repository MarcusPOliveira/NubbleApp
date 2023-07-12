import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList } from '../../../routes/Routes'
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess'
import { Screen } from '../../../components/Screen/Screen'
import { Text } from '../../../components/Text/Text'
import { TextInput } from '../../../components/TextInput/TextInput'
import { Button } from '../../../components/Button/Button'
import { Box } from '../../../components/Box/Box'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ForgotPassword'>

export function ForgotPassword({ navigation }: ScreenProps) {
  const { reset } = useResetNavigationSuccess()

  function submitForm() {
    reset({
      title: `Enviamos as instruções${'\n'}para seu email!`,
      description:
        'Clique no link enviado ao seu email para recuperar sua senha.',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    })
  }

  return (
    <Screen canGoBack>
      <Box gap="s16" mb="s32">
        <Text preset="headingLarge">Esqueci minha{'\n'}senha</Text>
        <Text preset="paragraphLarge">
          Digite seu email e enviaremos as instruções para redefinição de senha
        </Text>
      </Box>
      <TextInput label="Email" placeholder="Digite seu email" />
      <Button title="Recuperar senha" mt="s48" onPress={submitForm} />
    </Screen>
  )
}
