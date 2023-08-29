import React from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'

import { PostComment as PostCommentTypes, usePostCommentList } from '@domain'

import { Screen } from '@components'
import { useAppSafeArea } from '@hooks'
import { AppScreenProps } from '@routes'

import { PostCommentBottom, PostCommentItem } from './components'

export function PostComment({ route }: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId
  const { list, fetchNextPage, hasNextPage } = usePostCommentList(postId)

  const { bottom } = useAppSafeArea()

  function renderItem({ item }: ListRenderItemInfo<PostCommentTypes>) {
    return <PostCommentItem postComment={item} />
  }

  return (
    <Screen canGoBack title="Comentários">
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
    </Screen>
  )
}
