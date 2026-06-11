export default function Loading() {
  return (
    <main className="flex min-h-screen bg-gray-950">
      <div className="w-56 bg-gray-900 border-r border-gray-800 min-h-screen p-4">
        <div className="h-6 w-24 bg-gray-800 rounded animate-pulse mb-6" />
        {[1,2,3,4].map(i => (
          <div key={i} className="h-10 bg-gray-800 rounded-lg animate-pulse mb-2" />
        ))}
      </div>
      <div className="flex-1 p-8">
        <div className="grid grid-cols-2 gap-4 max-w-4xl">
          <div className="col-span-2 h-40 bg-gray-900 rounded-2xl animate-pulse border border-gray-800" />
          <div className="h-48 bg-gray-900 rounded-2xl animate-pulse border border-gray-800" />
          <div className="h-48 bg-gray-900 rounded-2xl animate-pulse border border-gray-800" />
          <div className="h-36 bg-gray-900 rounded-2xl animate-pulse border border-gray-800" />
          <div className="h-36 bg-gray-900 rounded-2xl animate-pulse border border-gray-800" />
        </div>
      </div>
    </main>
  )
}