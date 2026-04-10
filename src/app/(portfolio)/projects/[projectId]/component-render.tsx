export const richTextComponents = {
  heading1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-foreground mt-4 text-4xl font-bold">{children}</h1>
  ),
  heading2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-foreground mt-4 text-3xl font-semibold">{children}</h2>
  ),
  heading3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-foreground mt-4 text-2xl font-medium">{children}</h3>
  ),
  paragraph: ({ children }: { children: React.ReactNode }) => (
    <p className="text-muted-foreground indent-10 text-lg">{children}</p>
  ),
  listItem: ({ children }: { children: React.ReactNode }) => (
    <li className="text-muted-foreground ml-4 list-disc">{children}</li>
  ),
}
