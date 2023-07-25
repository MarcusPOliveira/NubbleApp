import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  forgotPasswordSchema,
  ForgotPasswordSchema,
} from './forgotPasswordSchema'
import { RootStackParamList } from '../../../routes/Routes'
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess'
import { Screen } from '../../../components/Screen/Screen'
import { Text } from '../../../components/Text/Text'
import { Button } from '../../../components/Button/Button'
import { Box } from '../../../components/Box/Box'
import { FormTextInput } from '../../../components/Form/FormTextInput'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ForgotPassword'>

export function ForgotPassword({ navigation }: ScreenProps) {
  const { reset } = useResetNavigationSuccess()

  const { control, formState, handleSubmit } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  })

  function submitForm(formValues: ForgotPasswordSchema) {
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
        <Text preset="headingLarge">Esqueci minha senha</Text>
        <Text preset="paragraphLarge">
          Digite seu email e enviaremos as instruções para redefinição de senha
        </Text>
      </Box>
      <FormTextInput
        control={control}
        name="email"
        label="Email"
        placeholder="Digite seu email"
        keyboardType="email-address"
      />
      <Button
        title="Recuperar senha"
        mt="s48"
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  )
}
