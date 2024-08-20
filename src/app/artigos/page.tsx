import { Suspense } from 'react'

import { ArticleListItems } from '@/components/articles/list-items'
import { ArticleListSkeleton } from '@/components/articles/list-items/skeleton'

export default async function Blog() {
  return (
    <main>
      <section className="min-h-[calc(100dvh-8.5rem)] px-4 bg-gradient-to-b from-gft-dark-gray from-60%% to-gft-background flex flex-col justify-center items-center gap-8">
        <div className="container max-w-4xl flex flex-1 flex-col pt-36 pb-32 gap-2 md:items-start">
          <div className="w-full grid grid-cols-1 gap-8">
            <Suspense fallback={<ArticleListSkeleton />}>
              <ArticleListItems />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  )
}
