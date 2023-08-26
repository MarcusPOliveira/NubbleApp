import { postService, usePaginatedList, Post } from '@domain'

export function usePostList() {
  return usePaginatedList<Post>(postService.getList)
}
