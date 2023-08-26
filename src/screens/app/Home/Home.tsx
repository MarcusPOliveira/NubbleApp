import React from 'react'
import { FlatList, ListRenderItemInfo, RefreshControl } from 'react-native'

import { Post, usePostList } from '@domain'
import { useScrollToTop } from '@react-navigation/native'

import { PostItem, Screen } from '@components'
import { AppTabScreenProps } from '@routes'

import { HomeEmpty } from './components/HomeEmpty'
import { HomeHeader } from './components/HomeHeader'

export function Home({ navigation }: AppTabScreenProps<'Home'>) {
  const {
    list: postList,
    error,
    isLoading,
    refresh,
    fetchNextPage,
  } = usePostList()

  const flatListRef = React.useRef<FlatList<Post>>(null)
  useScrollToTop(flatListRef)

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />
  }

  return (
    <Screen
      style={{ flex: 1, paddingBottom: 0, paddingHorizontal: 0, paddingTop: 0 }}
    >
      <HomeHeader />
      <FlatList
        ref={flatListRef}
        data={postList}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        ListEmptyComponent={
          <HomeEmpty error={error} isLoading={isLoading} refetch={refresh} />
        }
        contentContainerStyle={{ flex: postList.length === 0 ? 1 : undefined }}
        refreshing={isLoading}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refresh} />
        }
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.3}
      />
    </Screen>
  )
}
