import { ExternalLink } from 'lucide-react'

import { getMyPosts } from '@/services/tabnews'
import { TabnewsUsers } from '@/utils/enum'
import { env } from '@/utils/env'

export const ArticleListItems = async () => {
  const posts = await getMyPosts()

  if (!posts.success || !posts.data.length) {
    return (
      <p className="text-gft-light-gray text-center">Sem posts para exibir</p>
    )
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

        <span className="flex items-center gap-2 text-sm self-end text-zinc-400 mt-4">
          Ler no TabNews <ExternalLink size={16} />
        </span>
      </div>
    </a>
  ))
}
