export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-background">
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-primary animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  )
}

export function LoadingSpinner() {
  return (
    <div className="w-full h-[20rem] flex items-center justify-center">
      <div
        className="w-10 h-10 border-4 border-t-cyan-500 border-gray-300 rounded-full animate-spin"
      ></div>
    </div>
  )
}