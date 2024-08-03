import { getDictionary } from './dictionaries'

export default async function Home() {
  const dict = await getDictionary()

  return <main></main>
}
