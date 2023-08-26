import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { Box, BoxProps, Icon, Text, TouchableOpacityBox } from '@components'
import { useAppSafeArea, useAppTheme } from '@hooks'

import {
  ScrollViewContainer,
  ViewContainer,
} from './components/ScreenContainer'

interface ScreenProps extends BoxProps {
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
          {canGoBack && (
            <TouchableOpacityBox
              mb="s24"
              flexDirection="row"
              alignItems="center"
              onPress={navigation.goBack}
            >
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" semiBold ml="s8">
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  )
}
