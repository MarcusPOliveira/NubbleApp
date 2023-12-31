import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { Box, BoxProps } from '@components'
import { useAppSafeArea, useAppTheme } from '@hooks'

import { ScreenHeader, ScrollViewContainer, ViewContainer } from './components'

export interface ScreenProps extends BoxProps {
  children: React.ReactNode
  canGoBack?: boolean
  scrollable?: boolean
  title?: string
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  title,
  style,
  ...boxProps
}: ScreenProps) {
  const { top, bottom } = useAppSafeArea()
  const { colors } = useAppTheme()
  const navigation = useNavigation()

  const Container = scrollable ? ScrollViewContainer : ViewContainer

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={[{ paddingTop: top, paddingBottom: bottom }, style]}
          {...boxProps}
        >
          <ScreenHeader title={title} canGoBack={canGoBack} />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  )
}
