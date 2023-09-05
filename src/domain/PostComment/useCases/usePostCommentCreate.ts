import { useState } from 'react'

import { postCommentService } from '../postCommentService'

export function usePostCommentCreate(postId: number) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<boolean | null>(null)

  async function createComment(message: string) {
    try {
      setIsLoading(true)
      setError(null)
      await postCommentService.createComment(postId, message)
    } catch (err) {
      setError(true)
      console.log('error createComment - usePostCommentCreate', err)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    createComment,
  }
}
