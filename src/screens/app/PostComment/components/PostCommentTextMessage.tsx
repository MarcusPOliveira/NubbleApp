import React, { useState } from 'react'
import { Keyboard } from 'react-native'

import { usePostCommentCreate } from '@domain'

import { TextMessage } from '@components'

interface Props {
  postId: number
  onAddComment: () => void
}

export function PostCommentTextMessage({ postId, onAddComment }: Props) {
  const [comment, setComment] = useState('')

  const { createComment } = usePostCommentCreate(postId, {
    onSuccess: () => {
      onAddComment()
      setComment('')
      Keyboard.dismiss()
    },
  })

  return (
    <TextMessage
      value={comment}
      onChangeText={setComment}
      onPressSend={createComment}
      placeholder="Adicione um comentário"
    />
  )
}
