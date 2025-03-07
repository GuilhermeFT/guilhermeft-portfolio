import { Section } from '@/components/section'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { tabMenuItems } from './content'

export const AboutMe = () => {
  return (
    <Section id="about-me" className="min-h-dvh px-0 pt-8">
      <header className="border-g-dark-gray grid h-max gap-2 border-b py-6">
        <h3 className="gradient-text text-center text-2xl font-normal uppercase md:text-4xl">
          Sobre Mim
        </h3>
      </header>

      <div className="container mx-auto grid gap-4 px-4 py-8">
        <Tabs
          defaultValue="my-journey"
          className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_2fr]"
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
              className="relative overflow-hidden md:h-[calc(100vh-20rem)]"
            >
              <div className="h-full overflow-y-auto px-2 py-2 pb-4">
                {item.content}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Section>
  )
}
