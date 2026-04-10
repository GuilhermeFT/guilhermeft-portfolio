export const richTextComponents = {
  heading1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="mt-4 text-4xl font-bold text-zinc-300">{children}</h1>
  ),
  heading2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="mt-4 text-3xl font-semibold text-zinc-300">{children}</h2>
  ),
  heading3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="mt-4 text-2xl font-medium text-zinc-300">{children}</h3>
  ),
  paragraph: ({ children }: { children: React.ReactNode }) => (
    <p className="text-muted-foreground indent-10 text-lg">{children}</p>
  ),
  listItem: ({ children }: { children: React.ReactNode }) => (
    <li className="text-muted-foreground ml-4 list-disc">{children}</li>
  ),
}
