import React, { useEffect, useState } from 'react'

import { Post, postService } from '@domain'

import { Button, Screen, Text } from '@components'
import { AppTabScreenProps } from '@routes'

export function Home({ navigation }: AppTabScreenProps<'Home'>) {
  const [postList, setPostList] = useState<Post[]>([])

  useEffect(() => {
    postService.getList().then((list) => {
      setPostList(list)
      console.log('list', list)
    })
  }, [])

  return (
    <Screen>
      {postList.map((post) => (
        <Text>{post.text}</Text>
      ))}
    </Screen>
  )
}
