import { Thermometer } from "lucide-react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "../../ui/card"
import { ParameterType } from "@/types/common";
import { SkeletonCard } from "@/components/ui";
import Moment from "react-moment";

type Props = {
  data?: ParameterType
  isLoading: boolean
  error: Error | null
}

export const WaterTemp: React.FC<Props> = ({
  data,
  isLoading,
  error
}) => {

  if (isLoading) return <SkeletonCard />

  if (error) return <p>Error: {error.message}</p>

  // Use 'temp' from the API response for the water temperature
  const waterTemp = typeof data?.temp === 'number' ? data.temp : 0.00

  const isNormal = waterTemp >= 22 && waterTemp <= 28

  // Handle the case where 'created_at' is null
  const createdAt = data?.created_at ? (
    <Moment format="MMMM Do, YYYY hh:mm:ss a ">{data.created_at}</Moment>
  ) : (
    <span>No timestamp available</span>
  );

  return (
    <Card className={`${isNormal ? "" : "border border-red text-red"}`}>
      <CardHeader>
        <CardTitle>
          <div className={`${isNormal ? "" : "text-red"} flex items-center w-full justify-between`}>
            <div className="flex items-center gap-2">
              Water Temperature
              <p className={`${isNormal ? "text-slate" : "text-red"} text-sm`}>
                (Optimal range: 22 - 28 °C)
              </p>
            </div>
            <Thermometer />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{waterTemp}°C</p>
      </CardContent>
      <CardFooter>
        <div className={`${isNormal ? "text-slate" : "text-red"} flex items-center justify-between w-full`}>
          <p>{isNormal ? "Normal" : "Abnormal"}</p>
          {createdAt}
        </div>
      </CardFooter>
    </Card>
  )
}
