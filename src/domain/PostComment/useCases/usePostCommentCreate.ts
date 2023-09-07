import { PostComment } from '@domain'
import { MutationOptions, useMutation } from '@infra'

import { postCommentService } from '../postCommentService'

export function usePostCommentCreate(
  postId: number,
  options?: MutationOptions<PostComment>
) {
  const { mutate, isLoading, error } = useMutation<
    { message: string },
    PostComment
  >(({ message }) => postCommentService.createComment(postId, message), options)

  async function createComment(message: string) {
    await mutate({ message })
  }

  return {
    createComment,
    isLoading,
    error,
  }
}
