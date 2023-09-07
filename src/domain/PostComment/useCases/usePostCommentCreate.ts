import { useState } from 'react'

import { PostComment } from '@domain'

import { postCommentService } from '../postCommentService'

interface Options {
  onSuccess?: (data: PostComment) => void
  onError?: (message: string) => void
}

export function usePostCommentCreate(postId: number, options?: Options) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<boolean | null>(null)

  async function createComment(message: string) {
    try {
      setIsLoading(true)
      setError(null)
      const postComment = await postCommentService.createComment(
        postId,
        message
      )
      if (options?.onSuccess) {
        options.onSuccess(postComment)
      }
    } catch (err) {
      setError(true)
      console.log('error createComment - usePostCommentCreate', err)
      if (options?.onError) {
        options.onError('Erro ao criar comentário')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return {
    createComment,
  }
}
