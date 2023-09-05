import React, { useState } from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'

import { PostComment as PostCommentTypes, usePostCommentList } from '@domain'

import { Box, Screen, TextMesssage } from '@components'
import { useAppSafeArea } from '@hooks'
import { AppScreenProps } from '@routes'

import { PostCommentBottom, PostCommentItem } from './components'

export function PostComment({ route }: AppScreenProps<'PostCommentScreen'>) {
  const [comment, setComment] = useState('')

  const postId = route.params.postId
  const { list, fetchNextPage, hasNextPage } = usePostCommentList(postId)

  const { bottom } = useAppSafeArea()

  function renderItem({ item }: ListRenderItemInfo<PostCommentTypes>) {
    return <PostCommentItem postComment={item} />
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
        <TextMesssage
          value={comment}
          onChangeText={setComment}
          onPressSend={() => {}}
          placeholder="Adicione um comentário"
        />
      </Box>
    </Screen>
  )
}
