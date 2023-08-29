export interface PostComment {
  id: number
  message: string
  createdAt: string
  createdAtRelative: string //1 h, 2 sem
  author: {
    id: number
    profileURL: string
    name: string
    userName: string
  }
}

export interface PostCommentAPI {
  id: number
  message: string
  user_id: number
  post_id: number
  created_at: string
  updated_at: string
  user: {
    id: number
    first_name: string
    last_name: string
    username: string
    email: string
    profile_url: string
    is_online: boolean
    full_name: string
  }
}
