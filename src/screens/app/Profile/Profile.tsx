import React from 'react'

import { useUserGetById } from '@domain'

import {
  ActivityIndicator,
  Box,
  ProfileAvatar,
  Screen,
  Text,
} from '@components'
import { AppScreenProps } from '@routes'

export function Profile({ route }: AppScreenProps<'Profile'>) {
  const userId = route.params.userId

  const { isLoading, error, user } = useUserGetById(userId)

  return (
    <Screen canGoBack>
      {isLoading && <ActivityIndicator />}
      {error && <Text> error ao carregar perfil do usuário</Text>}
      {user && (
        <Box alignItems="center">
          <ProfileAvatar
            imageURL={user.profileURL}
            size={64}
            borderRadius={24}
          />
          <Text preset="headingMedium" bold>
            {user.fullName}
          </Text>
          <Text>@{user.userName}</Text>
        </Box>
      )}
    </Screen>
  )
}
