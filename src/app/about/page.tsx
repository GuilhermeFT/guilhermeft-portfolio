import type { Metadata } from 'next'
import { Section } from '@/components/section'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { tabMenuItems } from '@/app/(portfolio)/components/about-me/content'

export const metadata: Metadata = {
  title: 'Sobre — Guilherme Trindade',
  description:
    'Desenvolvedor Full Stack baseado no Brasil. Conheça minha trajetória, habilidades e experiências.',
}

export default function AboutPage() {
  return (
    <main className="min-h-dvh pt-[var(--header-height)]">
      {/* Hero */}
      <Section disableAnimation className="border-b border-border px-0">
        <div className="container py-16 md:py-24">
          <h5 className="mb-3">Desenvolvedor Full Stack</h5>
          <h1 className="max-w-xl">Sobre mim</h1>
          <h3 className="mt-4 max-w-lg text-muted-foreground">
            Construindo interfaces e sistemas que fazem a diferença — para
            pessoas e empresas que querem crescer.
          </h3>
        </div>
      </Section>

      {/* Tabs content */}
      <Section className="px-0 py-12">
        <div className="container">
          <Tabs
            defaultValue="my-journey"
            className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr]"
          >
            <TabsList className="h-max flex-col bg-transparent">
              {tabMenuItems.map((item) => (
                <TabsTrigger key={item.id} value={item.id}>
                  {item.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabMenuItems.map((item) => (
              <TabsContent
                key={item.id}
                value={item.id}
                className="min-h-[400px]"
              >
                <div className="py-2">{item.content}</div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </Section>
    </main>
  )
}
