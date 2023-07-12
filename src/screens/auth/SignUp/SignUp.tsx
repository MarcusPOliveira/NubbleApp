import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList } from '../../../routes/Routes'
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess'
import { Screen } from '../../../components/Screen/Screen'
import { Text } from '../../../components/Text/Text'
import { TextInput } from '../../../components/TextInput/TextInput'
import { Box } from '../../../components/Box/Box'
import { Button } from '../../../components/Button/Button'
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>

export function SignUp({ navigation }: ScreenProps) {
  const { reset } = useResetNavigationSuccess()

  function submitForm() {
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma.',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    })
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>
      <Box gap="s20">
        <TextInput label="Seu username" placeholder="@" />
        <TextInput
          label="Nome completo"
          placeholder="Digite seu nome completo"
        />
        <TextInput label="Email" placeholder="Digite seu email" />
        <PasswordInput label="Senha" placeholder="Digite sua senha" />
      </Box>
      <Button title="Criar uma conta" mt="s48" onPress={submitForm} />
    </Screen>
  )
}
