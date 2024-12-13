import { ChartLine, } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../ui/card"
// import { useQuery } from "@tanstack/react-query"
// import { SkeletonCard } from "@/components/ui"

export const Parameter = () => {
  // const { isPending, error, data } = useQuery({
  //   queryKey: ['repoData'],
  //   queryFn: () =>
  //     fetch('http://localhost:5105/weatherforecast').then((res) =>
  //       res.json(),
  //     ),
  // })

  // if (isPending) return <SkeletonCard />

  // if (error) return 'Fetched no data: ' + error.message

  // console.log(data)

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex items-center w-full justify-between">
            Parameter
            <ChartLine />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>5</p>
      </CardContent>
      <CardFooter>
        <p>Normal</p>
      </CardFooter>
    </Card>
  )
}