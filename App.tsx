import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { ThemeProvider } from '@shopify/restyle'

import { theme } from './src/theme/theme'
import { Text } from './src/components/Text/Text'
import { Button } from './src/components/Button/Button'
import { TextInput } from './src/components/TextInput/TextInput'
import { Icon } from './src/components/Icon/Icon'

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 24 }}>
          <Text preset="headingLarge" mb="s8">
            Olá!
          </Text>
          <Text preset="paragraphLarge" mb="s40">
            Digite seu email e senha para entrar
          </Text>
          <TextInput
            label="Email"
            placeholder="Digite seu email"
            boxProps={{ mb: 's20' }}
          />
          <TextInput
            label="Senha"
            placeholder="Digite sua senha"
            RightComponent={<Icon name="eyeOn" color="gray2" size={20} />}
            boxProps={{ mb: 's10' }}
          />
          <Text preset="paragraphSmall" bold color="primary">
            Esqueci minha senha
          </Text>
          <Button mt="s48" title="Entrar" />
          <Button preset="outline" mt="s12" title="Criar uma conta" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  )
}

export default App
