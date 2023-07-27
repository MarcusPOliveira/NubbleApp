import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  Box,
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components'
import { useResetNavigationSuccess } from '@hooks'
import { AuthScreenProps } from '@routes'

import { SignUpSchema, signUpSchema } from './signUpSchema'

export function SignUp({ navigation }: AuthScreenProps<'SignUp'>) {
  const { reset } = useResetNavigationSuccess()

  const { control, formState, handleSubmit } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  })

  function submitForm(formValues: SignUpSchema) {
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
        <FormTextInput
          control={control}
          name="username"
          label="Seu username"
          placeholder="@"
        />
        <FormTextInput
          control={control}
          name="fullName"
          label="Nome completo"
          placeholder="Digite seu nome completo"
          autoCapitalize="words"
        />
        <FormTextInput
          control={control}
          name="email"
          label="Email"
          placeholder="Digite seu email"
          keyboardType="email-address"
        />
        <FormPasswordInput
          control={control}
          name="password"
          label="Senha"
          placeholder="Digite sua senha"
        />
      </Box>
      <Button
        title="Criar uma conta"
        mt="s48"
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
      />
    </Screen>
  )
}
