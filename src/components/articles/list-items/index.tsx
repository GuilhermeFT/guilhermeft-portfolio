import { ExternalLink } from 'lucide-react'

import { getMyPosts } from '@/services/tabnews'
import { TabnewsUsers } from '@/utils/enum'
import { env } from '@/utils/env'

export const ArticleListItems = async () => {
  const posts = await getMyPosts()

  if (!posts.success || !posts.data.length) {
    return (
      <p className="text-g-light-gray text-center">Sem posts para exibir</p>
    )
  }

  return posts.data.map((post) => (
    <a
      key={post.id}
      href={`${env.NEXT_PUBLIC_TABNEWS_API_URL}/${TabnewsUsers.guilhermeft}/${post.slug}`}
      target="_blank"
      className="group flex min-h-32 gap-4 border-b border-zinc-700 py-4"
    >
      <div className="flex flex-col gap-2 overflow-hidden">
        <time
          dateTime={post.created_at}
          className="font-semibold text-zinc-500"
        >
          {post.created_at}
        </time>
        <strong className="text-xl font-normal transition-colors group-hover:text-g-blue">
          {post.title}
        </strong>

        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-zinc-400 transition-colors">
          {post.excerpt}
        </p>

        <span className="mt-4 flex items-center gap-2 self-end text-sm text-zinc-400 transition-colors group-hover:text-zinc-200">
          Ler no TabNews <ExternalLink size={16} />
        </span>
      </div>
    </a>
  ))
}
