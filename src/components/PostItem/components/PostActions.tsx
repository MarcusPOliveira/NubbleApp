import React from 'react'

import { Post } from '@domain'

import { Box, Icon, IconProps, Text, TouchableOpacityBox } from '@components'

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>

export function PostActions({
  commentCount,
  favoriteCount,
  reactionCount,
}: Props) {
  function handleLikePost() {}

  function handleOpenComments() {}

  function handleFavoritePost() {}

  return (
    <Box flexDirection="row" mt="s16" gap="s24">
      <Item
        icon={{ default: 'heart', marked: 'heartFill' }}
        text={reactionCount}
        marked
        onPress={handleLikePost}
      />
      <Item
        icon={{ default: 'comment', marked: 'comment' }}
        text={commentCount}
        marked={false}
        onPress={handleOpenComments}
      />
      <Item
        icon={{ default: 'bookmark', marked: 'bookmarkFill' }}
        text={favoriteCount}
        marked={false}
        onPress={handleFavoritePost}
      />
    </Box>
  )
}

interface ItemProps {
  onPress: () => void
  icon: {
    default: IconProps['name']
    marked: IconProps['name']
  }
  marked: boolean
  text: number
}

function Item({ onPress, icon, marked, text }: ItemProps) {
  return (
    <TouchableOpacityBox
      flexDirection="row"
      alignItems="center"
      gap="s4"
      onPress={onPress}
    >
      <Icon
        name={marked ? icon.marked : icon.default}
        color={marked ? 'marked' : undefined}
      />
      {text > 0 && (
        <Text preset="paragraphSmall" bold>
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  )
}
