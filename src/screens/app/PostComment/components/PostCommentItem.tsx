import React from 'react'
import { Alert, Pressable } from 'react-native'

import { PostComment, postCommentService, usePostCommentRemove } from '@domain'
import { useToast } from '@services'

import { Box, ProfileAvatar, Text } from '@components'

interface Props {
  postComment: PostComment
  userId: number
  postAuthorId: number
  onRemoveComment: () => void
}

export function PostCommentItem({
  postComment,
  userId,
  postAuthorId,
  onRemoveComment,
}: Props) {
  const { showToast } = useToast()
  const { mutate } = usePostCommentRemove({
    onSuccess: () => {
      onRemoveComment()
      showToast({ message: 'Comentário deletado' })
    },
  })

  const isAllowToRemoveComment = postCommentService.isAllowToRemoveComment(
    userId,
    postComment,
    postAuthorId
  )

  function confirmRemoveComment() {
    Alert.alert('Excluir comentário', 'Deseja excluir esse comentário?', [
      {
        text: 'Confirmar',
        onPress: () => mutate({ postCommentId: postComment.id }),
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ])
  }

  return (
    <Pressable
      onLongPress={confirmRemoveComment}
      disabled={!isAllowToRemoveComment}
    >
      <Box flexDirection="row" alignItems="center" gap="s12" mb="s16">
        <ProfileAvatar imageURL={postComment.author.profileURL} />
        <Box flex={1}>
          <Text preset="paragraphSmall" bold>
            {postComment.author.userName}
          </Text>
          <Text preset="paragraphSmall" color="gray1">
            {postComment.message} - {postComment.createdAtRelative}
          </Text>
        </Box>
      </Box>
    </Pressable>
  )
}
