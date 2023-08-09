import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Image, ListRenderItemInfo } from 'react-native'

import { Post, postService } from '@domain'

import { Box, Button, PostItem, Screen, Text } from '@components'
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
    <Screen>
      <FlatList
        data={postList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </Screen>
  )
}
