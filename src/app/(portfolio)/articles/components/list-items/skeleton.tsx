export const ArticleListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-2">
      <div className="flex h-32 flex-col gap-2 overflow-hidden py-4">
        <div className="bg-g-dark-blue/15 h-6 w-1/4 animate-pulse rounded-md" />
        <div className="bg-g-dark-blue/15 h-7 w-3/4 animate-pulse rounded-md" />
        <div className="bg-g-dark-blue/15 h-6 w-full animate-pulse rounded-md" />
      </div>
      <div className="flex h-32 flex-col gap-2 overflow-hidden py-4">
        <div className="bg-g-dark-blue/15 h-6 w-1/4 animate-pulse rounded-md" />
        <div className="bg-g-dark-blue/15 h-7 w-3/4 animate-pulse rounded-md" />
        <div className="bg-g-dark-blue/15 h-6 w-full animate-pulse rounded-md" />
      </div>
      <div className="flex h-32 flex-col gap-2 overflow-hidden py-4">
        <div className="bg-g-dark-blue/15 h-6 w-1/4 animate-pulse rounded-md" />
        <div className="bg-g-dark-blue/15 h-7 w-3/4 animate-pulse rounded-md" />
        <div className="bg-g-dark-blue/15 h-6 w-full animate-pulse rounded-md" />
      </div>
    </div>
  )
}
