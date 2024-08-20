import { getMyPosts } from '@/services/tabnews'
import { TabnewsUsers } from '@/utils/enum'
import { env } from '@/utils/env'

export const ArticleListItems = async () => {
  const posts = await getMyPosts()

  if (!posts.success) {
    return null
  }

  return posts.data.map((post) => (
    <a
      key={post.id}
      href={`${env.NEXT_PUBLIC_TABNEWS_API_URL}/${TabnewsUsers.guilhermeft}/${post.slug}`}
      target="_blank"
      className="border-b border-gft-light-gray group flex gap-4 py-4 min-h-32"
    >
      <div className="flex flex-col gap-2 overflow-hidden">
        <time
          dateTime={post.created_at}
          className="text-gft-light-gray font-semibold"
        >
          {post.created_at}
        </time>
        <strong className="text-xl transition-colors group-hover:text-gft-light-purple">
          {post.title}
        </strong>

        <p className="text-gft-light-gray font-semibold text-ellipsis whitespace-nowrap overflow-hidden">
          {post.excerpt}
        </p>
      </div>
    </a>
  ))
}
