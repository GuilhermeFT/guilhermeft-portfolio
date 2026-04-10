import { convertLexicalToHTML, defaultHTMLConverters } from '@payloadcms/richtext-lexical/html'

export async function RichText({
  content,
  className,
}: {
  content: unknown
  className?: string
}) {
  if (!content) return null

  if (typeof content === 'string') {
    return <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
  }

  const html = await convertLexicalToHTML({
    converters: defaultHTMLConverters,
    data: content as Parameters<typeof convertLexicalToHTML>[0]['data'],
  })

  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
}
