import { sortPosts, allCoreContent, coreContent } from 'pliny/utils/contentlayer'
import { Authors, allBlogs, allAuthors } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)
  return (
    <>
      <Main posts={posts} />
    </>
  )
}
