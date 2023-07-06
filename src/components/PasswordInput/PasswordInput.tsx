import React, { useState } from 'react'

import { TextInput, TextInputProps } from '../TextInput/TextInput'
import { Icon } from '../Icon/Icon'

type Props = Omit<TextInputProps, 'RightComponent'>

export function PasswordInput(props: Props) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true)

  function toggleSecureTextEntry() {
    setIsSecureTextEntry((prev) => !prev)
  }

  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...props}
      RightComponent={
        <Icon
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
          color="gray2"
          size={20}
          onPress={toggleSecureTextEntry}
        />
      }
    />
  )
}
