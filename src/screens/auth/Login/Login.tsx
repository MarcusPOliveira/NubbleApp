import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components'
import { AuthScreenProps } from '@routes'

import { LoginSchema, loginSchema } from './loginSchema'

export function Login({ navigation }: AuthScreenProps<'Login'>) {
  const { control, formState, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  })

  function submitForm({ email, password }: LoginSchema) {
    console.log('email', email)
    console.log('password', password)
  }

  function navigateToSignUpScreen() {
    navigation.navigate('SignUp')
  }

  function navigateToForgotPassword() {
    navigation.navigate('ForgotPassword')
  }

  return (
    <Screen>
      <Text preset="headingLarge" mb="s8">
        Olá!
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu email e senha para entrar
      </Text>
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
      <Text
        preset="paragraphSmall"
        bold
        color="primary"
        mt="s12"
        onPress={navigateToForgotPassword}
      >
        Esqueci minha senha
      </Text>
      <Button
        mt="s48"
        title="Entrar"
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
      />
      <Button
        preset="outline"
        mt="s12"
        title="Criar uma conta"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  )
}
