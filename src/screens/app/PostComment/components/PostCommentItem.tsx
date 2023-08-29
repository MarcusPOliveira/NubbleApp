import React from 'react'

import { PostComment } from '@domain'
import { dateUtils } from '@utils'

import { Box, ProfileAvatar, Text } from '@components'

interface Props {
  postComment: PostComment
}

export function PostCommentItem({ postComment }: Props) {
  return (
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
  )
}
