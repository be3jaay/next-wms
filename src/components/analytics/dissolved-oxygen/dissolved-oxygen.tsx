import { EqualApproximately } from "lucide-react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "../../ui/card"
import React from "react"
import { ParameterType } from "@/types/common"
import { SkeletonCard } from "@/components/ui"
import Moment from "react-moment"

type Props = {
  data?: ParameterType
  isLoading: boolean
  error: Error | null
}

export const DissolvedOxygen: React.FC<Props> = ({ data, isLoading, error }) => {

  if (isLoading) return <SkeletonCard />

  if (error) return <p>Error: {error.message}</p>

  // Use 'do' from the response
  const dissolvedVal = typeof data?.do === 'number' ? data.do : 0.00

  const isNormal = dissolvedVal >= 6 && dissolvedVal <= 9

  // Handle 'created_at' if null
  const createdAt = data?.created_at ? (
    <Moment format="MMMM Do, YYYY hh:mm:ss a">{data.created_at}</Moment>
  ) : (
    <span>No timestamp available</span>
  );

  return (
    <Card className={`${isNormal ? "" : "border border-red text-red"}`}>
      <CardHeader>
        <CardTitle>
          <div className={`${isNormal ? "" : " text-red"} flex items-center w-full justify-between`}>
            <div className='flex items-center gap-2'>
              Dissolved Oxygen
              <p className={`${isNormal ? "text-slate" : " text-red"} text-sm`}>
                (Optimal range: 6 - 9 mg/L)
              </p>
            </div>
            <EqualApproximately />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{data?.do}</p>
      </CardContent>
      <CardFooter>
        <div className={`${isNormal ? "text-slate" : " text-red"} flex items-center justify-between w-full`}>
          <p>{isNormal ? "Normal" : "Abnormal"}</p>
          {createdAt}
        </div>
      </CardFooter>
    </Card>
  )
}
