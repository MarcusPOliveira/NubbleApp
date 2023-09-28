import React, { useEffect } from 'react'
import { Dimensions } from 'react-native'

import { Toast as ToastType, useToast, useToastService } from '@services'

import { Box, BoxProps, Icon, Text } from '@components'
import { $shadowProps } from '@theme'

const MAX_WIDTH = Dimensions.get('screen').width * 0.95
const DEFAULT_DURATION = 2000

export function Toast() {
  const toast = useToast()
  const { hideToast } = useToastService()

  const position: Required<ToastType>['position'] = toast?.position || 'top'

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        hideToast()
      }, toast.duration || DEFAULT_DURATION)
    }
  }, [toast])

  if (!toast) {
    return null
  }

  return (
    <Box {...$boxStyle} style={[{ [position]: 100 }, $shadowProps]}>
      <Icon name="checkRound" color="success" />
      <Text preset="paragraphMedium" bold style={{ flexShrink: 1 }}>
        {toast?.message}
      </Text>
    </Box>
  )
}

const $boxStyle: BoxProps = {
  alignSelf: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  padding: 's16',
  borderRadius: 's16',
  gap: 's16',
  position: 'absolute',
  backgroundColor: 'background',
  maxWidth: MAX_WIDTH,
  opacity: 0.95,
}
