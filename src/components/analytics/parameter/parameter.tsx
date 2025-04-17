import { ChartLine, } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../ui/card"

export const Parameter = () => {

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