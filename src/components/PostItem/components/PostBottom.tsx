import React from 'react'

import { Post } from '@domain'
import { useNavigation } from '@react-navigation/native'

import { Box, Text } from '@components'

type Props = Pick<Post, 'author' | 'text' | 'commentCount' | 'id'>

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return null
  } else if (commentCount === 1) {
    return 'Ver comentário'
  } else {
    return `Ver ${commentCount} comentários`
  }
}

export function PostBottom({ author, text, commentCount, id }: Props) {
  const commentText = getCommentText(commentCount)

  const navigation = useNavigation()

  function navigateToPostCommentScreen() {
    navigation.navigate('PostCommentScreen', {
      postId: id,
    })
  }

  return (
    <Box mt="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      <Text
        preset="paragraphSmall"
        bold
        color="primary"
        mt="s8"
        onPress={navigateToPostCommentScreen}
      >
        {commentText}
      </Text>
    </Box>
  )
}
