import { useState } from 'react'

export interface MutationOptions<TData> {
  onSuccess?: (data: TData) => void
  onError?: (message: string) => void
  errorMessage?: string
}

export function useMutation<TVariables, TData>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: MutationOptions<TData>
) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<boolean | null>(null)

  async function mutate(variables: TVariables) {
    try {
      setIsLoading(true)
      setError(null)
      const data = await mutationFn(variables)
      if (options?.onSuccess) {
        options.onSuccess(data)
      }
    } catch (err) {
      setError(true)
      console.log('error createComment - usePostCommentCreate', err)
      if (options?.onError) {
        options.onError(options.errorMessage || '')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return {
    mutate,
    isLoading,
    error,
  }
}
