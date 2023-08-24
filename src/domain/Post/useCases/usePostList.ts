import { useEffect, useState } from 'react'

import { postService } from '../postService'
import { Post } from '../postTypes'

export function usePostList() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<boolean | null>(null)
  const [postList, setPostList] = useState<Post[]>([])
  const [page, setPage] = useState(1)
  const [hasNextPage, setHasNextPage] = useState(true)

  async function fetchInitialData() {
    try {
      setError(null)
      setIsLoading(true)
      const { data, meta } = await postService.getList(1)
      setPostList(data)
      if (meta.hasNextPage) {
        setPage(2)
      } else {
        setHasNextPage(false)
      }
    } catch (err) {
      console.log('error - fetchInitialData:', err)
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }

  async function fetchNextPage() {
    if (isLoading || !hasNextPage) {
      return
    }
    try {
      setIsLoading(true)
      const { data, meta } = await postService.getList(page)
      setPostList((prev) => [...prev, ...data])
      if (meta.hasNextPage) {
        setPage((prev) => prev + 1)
      } else {
        setHasNextPage(false)
      }
    } catch (err) {
      console.log('error - fetchNextPage: ', err)
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchInitialData()
  }, [])

  return {
    isLoading,
    error,
    postList,
    refresh: fetchInitialData,
    fetchNextPage,
  }
}
