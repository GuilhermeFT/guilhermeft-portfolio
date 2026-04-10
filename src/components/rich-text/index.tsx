export function RichText({
  content,
}: {
  content: string | object | undefined
}) {
  if (typeof content === 'string') {
    return <div dangerouslySetInnerHTML={{ __html: content }} />
  }
  return null
}
