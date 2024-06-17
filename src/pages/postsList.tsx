import { getLayoutWithSidebar } from 'layouts'
import { PostsList } from 'templates/postsList'

export default function PostsPage() {
  return <PostsList />
}

PostsPage.getLayout = getLayoutWithSidebar
