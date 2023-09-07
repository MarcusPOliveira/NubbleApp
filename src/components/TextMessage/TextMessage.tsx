import React, { useRef } from 'react'
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native'

import { $textInput, Box, Text } from '@components'
import { useAppTheme } from '@hooks'

interface TextMessageProps extends RNTextInputProps {
  onPressSend: (message: string) => void
}

export function TextMessage({
  onPressSend,
  value,
  ...rnTextMessageProps
}: TextMessageProps) {
  const inputRef = useRef<RNTextInput>(null) //ref para conseguir clicar na Box que envolve o input de texto, deve iniciar como null
  const { colors } = useAppTheme()

  function focusInput() {
    inputRef.current?.focus()
  }

  const sendIsDisabled = value?.trim().length === 0

  return (
    <Pressable onPress={focusInput}>
      <Box
        paddingHorizontal="s16"
        paddingVertical="s14"
        backgroundColor="gray5"
        borderRadius="s12"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <RNTextInput
          ref={inputRef}
          value={value}
          placeholderTextColor={colors.gray2}
          style={[$textInput, { color: colors.gray1 }]}
          {...rnTextMessageProps}
        />
        <Pressable
          onPress={() => onPressSend(value || '')}
          disabled={sendIsDisabled}
        >
          <Text bold color={sendIsDisabled ? 'gray2' : 'primary'}>
            Enviar
          </Text>
        </Pressable>
      </Box>
    </Pressable>
  )
}
