import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { Box, Icon, ScreenProps, Text, TouchableOpacityBox } from '@components'

type Props = Pick<ScreenProps, 'title' | 'canGoBack'>

export function ScreenHeader({ title, canGoBack }: Props) {
  const navigation = useNavigation()

  const ICON_SIZE = 20

  return (
    <Box
      flexDirection="row"
      mb="s24"
      alignItems="center"
      justifyContent="space-between"
    >
      {canGoBack && (
        <TouchableOpacityBox
          flexDirection="row"
          alignItems="center"
          onPress={navigation.goBack}
        >
          <Icon name="arrowLeft" color="primary" size={ICON_SIZE} />
          {!title && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box width={ICON_SIZE} />}
    </Box>
  )
}
