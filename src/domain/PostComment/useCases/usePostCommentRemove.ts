import { postCommentService } from '@domain'
import { MutationOptions, useMutation } from '@infra'

export function usePostCommentRemove(options?: MutationOptions<string>) {
  return useMutation<{ postCommentId: number }, string>(
    ({ postCommentId }) => postCommentService.removeComment(postCommentId),
    options
  )
}
