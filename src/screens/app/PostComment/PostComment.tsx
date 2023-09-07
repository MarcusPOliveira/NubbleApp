import React from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'

import {
  PostComment as PostCommentTypes,
  usePostCommentList,
  useUser,
} from '@domain'

import { Box, Screen } from '@components'
import { useAppSafeArea } from '@hooks'
import { AppScreenProps } from '@routes'

import {
  PostCommentBottom,
  PostCommentItem,
  PostCommentTextMessage,
} from './components'

export function PostComment({ route }: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId
  const postAuthorId = route.params.postAuthorId
  const { list, fetchNextPage, hasNextPage, refresh } =
    usePostCommentList(postId)
  const { id } = useUser()

  const { bottom } = useAppSafeArea()

  function renderItem({ item }: ListRenderItemInfo<PostCommentTypes>) {
    return (
      <PostCommentItem
        userId={id}
        postComment={item}
        postAuthorId={postAuthorId}
        onRemoveComment={refresh}
      />
    )
  }

  return (
    <Screen flex={1} canGoBack title="Comentários">
      <Box flex={1} justifyContent="space-between">
        <FlatList
          data={list}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: bottom * 2 }}
          ListFooterComponent={
            <PostCommentBottom
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
            />
          }
        />
        <PostCommentTextMessage postId={postId} onAddComment={refresh} />
      </Box>
    </Screen>
  )
}
