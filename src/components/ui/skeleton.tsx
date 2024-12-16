import { cn } from "@/lib/utils"
import { Card } from "./card"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-800", className)}
      {...props}
    />
  )
}

export { Skeleton }


export function SkeletonCard() {
  return (
    <Card className="flex flex-col space-y-3">
      <Skeleton className="h-[160px] w-full rounded-xl" />
    </Card>
  )
}

export function SkeletonBox() {
  return (
    <Card className="flex flex-col space-y-3">
      <Skeleton className="h-[470px] w-full rounded-xl" />
    </Card>
  )
}