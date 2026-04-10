import { ExternalLink } from 'lucide-react'

import { getMyPosts } from '@/services/tabnews'
import { TabnewsUsers } from '@/utils/enum'
import { ENV } from '@/utils/env'
import Link from 'next/link'

export const ArticleListItems = async () => {
  const posts = await getMyPosts()

  if (!posts.success || !posts.data.length) {
    return (
      <p className="text-muted-foreground text-center">Sem posts para exibir</p>
    )
  }

  return posts.data.map((post) => (
    <Link
      key={post.id}
      href={`${ENV.NEXT_PUBLIC_TABNEWS_API_URL}/${TabnewsUsers.guilhermeft}/${post.slug}`}
      target="_blank"
      className="group border-border flex min-h-32 gap-4 border-b py-4"
    >
      <div className="flex flex-col gap-2 overflow-hidden">
        <time
          dateTime={post.created_at}
          className="text-muted-foreground font-semibold"
        >
          {post.created_at}
        </time>
        <strong className="group-hover:text-accent text-xl font-normal transition-colors">
          {post.title}
        </strong>

        <p className="text-muted-foreground overflow-hidden text-ellipsis whitespace-nowrap transition-colors">
          {post.excerpt}
        </p>

        <span className="text-muted-foreground group-hover:text-foreground mt-4 flex items-center gap-2 self-end text-sm transition-colors">
          Ler no TabNews <ExternalLink size={16} />
        </span>
      </div>
    </Link>
  ))
}
