import React from 'react'
import { SafeAreaView } from 'react-native'
import { ThemeProvider } from '@shopify/restyle'

import { theme } from './src/theme/theme'
import { Text } from './src/components/Text'
import { Button } from './src/components/Button'

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ paddingHorizontal: 24 }}>
        <Text preset="paragraphMedium">Marcus</Text>
        <Text preset="headingLarge">Marcus</Text>
        <Button title="Entrar" preset="primary" />
      </SafeAreaView>
    </ThemeProvider>
  )
}

export default App
