import { useEffect, useState } from 'react'

import { postService } from '../postService'
import { Post } from '../postTypes'

export function usePostList() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<boolean | null>(null)
  const [postList, setPostList] = useState<Post[]>([])
  const [page, setPage] = useState(1)

  async function fetchData() {
    try {
      setError(null)
      setIsLoading(true)
      const list = await postService.getList(page)
      setPostList((prev) => [...prev, ...list])
      setPage((prev) => prev + 1)
    } catch (er) {
      console.log('error fetchData', er)
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }

  function fetchNextPage() {
    if (!isLoading) {
      fetchData()
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    isLoading,
    error,
    postList,
    refetch: fetchData,
    fetchNextPage,
  }
}
