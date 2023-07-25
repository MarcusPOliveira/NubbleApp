import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { RootStackParamList } from '../../../routes/Routes'
import { LoginSchema, loginSchema } from './loginSchema'
import { Text } from '../../../components/Text/Text'
import { Button } from '../../../components/Button/Button'
import { Screen } from '../../../components/Screen/Screen'
import { FormTextInput } from '../../../components/Form/FormTextInput'
import { FormPasswordInput } from '../../../components/Form/FormPasswordInput'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>

export function Login({ navigation }: ScreenProps) {
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
