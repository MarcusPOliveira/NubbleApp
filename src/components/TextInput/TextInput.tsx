import React, { useRef } from 'react'
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native'

import { useAppTheme } from '@hooks'

import { Box, BoxProps } from '../Box/Box'
import { $fontFamily, $fontSizes, Text } from '../Text/Text'

export interface TextInputProps extends RNTextInputProps {
  label: string
  errorMessage?: string
  RightComponent?: React.ReactElement
  boxProps?: BoxProps
}

//rnTextInputProps é como se fosse o rest, passando o restante das propriedades da interface pro componente
export function TextInput({
  label,
  errorMessage,
  RightComponent,
  boxProps,
  ...rnTextInputProps
}: TextInputProps) {
  const { colors } = useAppTheme()
  const inputRef = useRef<RNTextInput>(null) //ref para conseguir clicar na Box que envolve o input de texto, deve iniciar como null

  const $textInputContainer: BoxProps = {
    borderWidth: errorMessage ? 2 : 1,
    borderColor: errorMessage ? 'error' : 'gray4',
    flexDirection: 'row',
    padding: 's16',
    borderRadius: 's12',
  }

  function focusInput() {
    inputRef.current?.focus()
  }

  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Text preset="paragraphMedium" mb="s4">
          {label}
        </Text>
        <Box {...$textInputContainer}>
          <RNTextInput
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            style={$textInput}
            {...rnTextInputProps}
          />
          {RightComponent && (
            <Box ml="s16" justifyContent="center">
              {RightComponent}
            </Box>
          )}
        </Box>
        {errorMessage && (
          <Text preset="paragraphSmall" bold color="error">
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  )
}

//cifrão para declarar estilos
const $textInput: TextStyle = {
  padding: 0,
  flexGrow: 1,
  flexShrink: 1,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
}
