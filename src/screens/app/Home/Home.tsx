import React from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'

import { Post, usePostList } from '@domain'

import { PostItem, Screen } from '@components'
import { AppTabScreenProps } from '@routes'

import { HomeEmpty } from './components/HomeEmpty'
import { HomeHeader } from './components/HomeHeader'

export function Home({ navigation }: AppTabScreenProps<'Home'>) {
  const { postList, error, isLoading, refetch, fetchNextPage } = usePostList()

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />
  }

  return (
    <Screen
      style={{ flex: 1, paddingBottom: 0, paddingHorizontal: 0, paddingTop: 0 }}
    >
      <HomeHeader />
      <FlatList
        data={postList}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        ListEmptyComponent={
          <HomeEmpty error={error} isLoading={isLoading} refetch={refetch} />
        }
        contentContainerStyle={{ flex: postList.length === 0 ? 1 : undefined }}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
      />
    </Screen>
  )
}
