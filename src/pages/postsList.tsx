import { getLayoutWithSidebar } from 'layouts'
import { PostsList } from 'templates'

export default function PostsPage() {
  return <PostsList />
}

PostsPage.getLayout = getLayoutWithSidebar
