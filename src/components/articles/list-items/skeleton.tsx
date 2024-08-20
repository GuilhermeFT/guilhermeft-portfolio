export const ArticleListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-8">
      <div className="flex flex-col gap-2 overflow-hidden h-32 py-4">
        <div className="bg-gft-light-gray w-1/4 h-6 animate-pulse rounded-md" />
        <div className="bg-gft-light-gray w-3/4 h-7 animate-pulse rounded-md" />
        <div className="bg-gft-light-gray w-full h-6 animate-pulse rounded-md" />
      </div>
      <div className="flex flex-col gap-2 overflow-hidden h-32 py-4">
        <div className="bg-gft-light-gray w-1/4 h-6 animate-pulse rounded-md" />
        <div className="bg-gft-light-gray w-3/4 h-7 animate-pulse rounded-md" />
        <div className="bg-gft-light-gray w-full h-6 animate-pulse rounded-md" />
      </div>
      <div className="flex flex-col gap-2 overflow-hidden h-32 py-4">
        <div className="bg-gft-light-gray w-1/4 h-6 animate-pulse rounded-md" />
        <div className="bg-gft-light-gray w-3/4 h-7 animate-pulse rounded-md" />
        <div className="bg-gft-light-gray w-full h-6 animate-pulse rounded-md" />
      </div>
    </div>
  )
}
