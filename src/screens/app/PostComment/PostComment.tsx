import React from 'react'

import { usePostCommentList } from '@domain'

import { Screen } from '@components'
import { AppScreenProps } from '@routes'

export function PostComment({ route }: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId
  const { list } = usePostCommentList(postId)

  return (
    <Screen canGoBack title="Comentários">
      <></>
    </Screen>
  )
}
