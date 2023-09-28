import React from 'react'
import { Dimensions } from 'react-native'

import { Toast, ToastPosition, ToastType } from '@services'

import { Box, BoxProps, Icon, IconProps, Text } from '@components'
import { $shadowProps } from '@theme'

const MAX_WIDTH = Dimensions.get('screen').width * 0.95

const mapTypeToIcon: Record<ToastType, IconProps> = {
  success: {
    color: 'success',
    name: 'checkRound',
  },
  error: {
    color: 'error',
    name: 'errorRound',
  },
}

interface Props {
  toast: Toast
}

export function ToastContent({ toast }: Props) {
  const position: ToastPosition = toast?.position || 'top'
  const type: ToastType = toast?.type || 'success'

  return (
    <Box {...$boxStyle} style={[{ [position]: 100 }, $shadowProps]}>
      <Icon {...mapTypeToIcon[type]} />
      <Text preset="paragraphMedium" bold style={{ flexShrink: 1 }}>
        {toast?.message}
      </Text>
    </Box>
  )
}

const $boxStyle: BoxProps = {
  alignItems: 'center',
  flexDirection: 'row',
  padding: 's16',
  borderRadius: 's16',
  gap: 's16',
  backgroundColor: 'background',
  maxWidth: MAX_WIDTH,
  opacity: 0.95,
}
