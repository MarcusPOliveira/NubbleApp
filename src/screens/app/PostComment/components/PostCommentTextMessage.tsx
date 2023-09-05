import React, { useState } from 'react'
import { Keyboard } from 'react-native'

import { usePostCommentCreate } from '@domain'

import { TextMesssage } from '@components'

interface Props {
  postId: number
}

export function PostCommentTextMessage({ postId }: Props) {
  const [comment, setComment] = useState('')

  const { createComment } = usePostCommentCreate(postId)

  function onSendComment() {
    createComment(comment)
    setComment('')
    Keyboard.dismiss()
  }

  return (
    <TextMesssage
      value={comment}
      onChangeText={setComment}
      onPressSend={onSendComment}
      placeholder="Adicione um comentário"
    />
  )
}
