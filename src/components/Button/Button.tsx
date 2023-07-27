import React from 'react'

import {
  ActivityIndicator,
  Text,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components'

import { buttonPresets } from './buttonPresets'

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string
  isLoading?: boolean
  isDisabled?: boolean
  preset?: ButtonPreset
}

export type ButtonPreset = 'primary' | 'outline'

export function Button({
  title,
  isLoading,
  isDisabled,
  preset = 'primary',
  ...TouchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset =
    buttonPresets[preset][isDisabled ? 'disabled' : 'default']

  return (
    <TouchableOpacityBox
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      disabled={isDisabled || isLoading}
      {...buttonPreset.container}
      {...TouchableOpacityBoxProps}
    >
      {isLoading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  )
}
