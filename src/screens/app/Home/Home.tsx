import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, ListRenderItemInfo } from 'react-native'

import { Post, postService } from '@domain'

import { PostItem, Screen } from '@components'
import { AppTabScreenProps } from '@routes'

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
      <FlatList
        data={postList}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </Screen>
  )
}
