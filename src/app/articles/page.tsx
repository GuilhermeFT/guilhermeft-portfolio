import { Suspense } from 'react'

import { ArticleListItems } from '@/components/articles/list-items'
import { ArticleListSkeleton } from '@/components/articles/list-items/skeleton'
import { Section } from '@/components/section'

export default async function Blog() {
  return (
    <main>
      <Section>
        <div className="container flex max-w-4xl flex-1 flex-col gap-2 pb-32 pt-36 md:items-start">
          <div className="grid w-full grid-cols-1 gap-8">
            <Suspense fallback={<ArticleListSkeleton />}>
              <ArticleListItems />
            </Suspense>
          </div>
        </div>
      </Section>
    </main>
  )
}
