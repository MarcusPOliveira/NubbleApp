import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { RootStackParamList } from '../../../routes/Routes'
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess'
import { Screen } from '../../../components/Screen/Screen'
import { Text } from '../../../components/Text/Text'
import { Box } from '../../../components/Box/Box'
import { Button } from '../../../components/Button/Button'
import { FormTextInput } from '../../../components/Form/FormTextInput'
import { FormPasswordInput } from '../../../components/Form/FormPasswordInput'
import { SignUpSchema, signUpSchema } from './signUpSchema'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>

export function SignUp({ navigation }: ScreenProps) {
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
