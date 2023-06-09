import React from 'react'
import {
  ActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native'
import { useTheme } from '@shopify/restyle'

import { ThemeColors } from '../../theme/theme'

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors
}

export function ActivityIndicator({ color }: Props) {
  const { colors } = useTheme()

  return <RNActivityIndicator color={colors[color]} />
}
