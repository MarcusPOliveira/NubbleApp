import React from 'react'
import { Screen } from '../../../components/Screen/Screen'
import { Text } from '../../../components/Text/Text'
import { TextInput } from '../../../components/TextInput/TextInput'
import { Button } from '../../../components/Button/Button'
import { Box } from '../../../components/Box/Box'

export function ForgotPassword() {
  return (
    <Screen canGoBack>
      <Box gap="s16" mb="s32">
        <Text preset="headingLarge">Esqueci minha{'\n'}senha</Text>
        <Text preset="paragraphLarge">
          Digite seu email e enviaremos as instruções para redefinição de senha
        </Text>
      </Box>
      <TextInput label="Email" placeholder="Digite seu email" />
      <Button title="Recuperar senha" mt="s48" />
    </Screen>
  )
}
