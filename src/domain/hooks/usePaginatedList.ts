import { useEffect, useState } from 'react'

import { Page } from '@types'

export function usePaginatedList<Data>(
  getList: (page: number) => Promise<Page<Data>>
) {
  const [list, setList] = useState<Data[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<boolean | null>(null)
  const [page, setPage] = useState(1)
  const [hasNextPage, setHasNextPage] = useState(true)

  async function fetchInitialData() {
    try {
      setError(null)
      setIsLoading(true)
      const { data, meta } = await getList(1)
      setList(data)
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
      const { data, meta } = await getList(page)
      setList((prev) => [...prev, ...data])
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
    list,
    refresh: fetchInitialData,
    fetchNextPage,
  }
}
