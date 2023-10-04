import React from 'react'

import { ToastProvider } from '@services'
import { ThemeProvider } from '@shopify/restyle'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Toast } from '@components'

import { Router } from './src/routes/Routes'
import { theme } from './src/theme/theme'

const queryClient = new QueryClient()

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <ToastProvider>
            <Router />
            <Toast />
          </ToastProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  )
}

export default App
