import React, { useEffect, useState } from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'

import { Post, postService } from '@domain'

import { PostItem, Screen } from '@components'
import { AppTabScreenProps } from '@routes'

import { HomeHeader } from './components/HomeHeader'

export function Home({ navigation }: AppTabScreenProps<'Home'>) {
  const [postList, setPostList] = useState<Post[]>([])

  useEffect(() => {
    postService.getList().then((list) => {
      setPostList(list)
      console.log('list', list)
    })
  }, [])

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />
  }

  return (
    <Screen style={{ paddingBottom: 0, paddingHorizontal: 0, paddingTop: 0 }}>
      <HomeHeader />
      <FlatList
        data={postList}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </Screen>
  )
}
