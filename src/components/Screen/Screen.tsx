import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {
  ScrollViewContainer,
  ViewContainer,
} from './components/ScreenContainer'
import { useAppSafeArea, useAppTheme } from '@hooks'
import { Box, Icon, Text, TouchableOpacityBox } from '@components'

interface Props {
  children: React.ReactNode
  canGoBack?: boolean
  scrollable?: boolean
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
}: Props) {
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
          paddingBottom="s24"
          style={{ paddingTop: top, paddingBottom: bottom }}
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
