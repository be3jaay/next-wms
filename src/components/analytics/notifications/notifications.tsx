"use client"
import { AlertCircle } from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  SkeletonBox
} from "@/components/ui"
import { useRouter } from "next/navigation"
import { AnomaliesType } from "@/types/common"
import { GetAllAnomalousService } from "@/services/parameter"
import { useQuery } from "@tanstack/react-query"
import Moment from "react-moment"

export const Notifications = () => {
  const router = useRouter();
  const {
    data,
    isLoading,
    error
  } = useQuery<AnomaliesType[]>({
    queryKey: ['show_daily_notification'],
    queryFn: GetAllAnomalousService.getDailyNotification,
    refetchInterval: 60 * 1000,
  });

  if (isLoading) return <SkeletonBox />

  if (error) return <p>Error: {error.message}</p>

  const redirectToLogs = () => {
    router.push("/view-logs")
  }

  console.log(data)

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex items-center w-full justify-between text-primary">
            Daily Notifications
            <Button onClick={redirectToLogs}>
              View All Logs
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {data?.map((item) => (
          <div key={item.id} className="flex items-center py-1 gap-1" >
            <Alert variant="destructive" className="flex items-start gap-2 flex-col">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <span>{item.type}</span>
                  <span>(  {item.value}  ) </span>
                </div>
                <div className="">
                  <Moment format="MMMM Do, YYYY hh:mm:ss a ">{item.created_at}</Moment>
                </div>
              </AlertTitle>
              <AlertDescription>
                <div className="">
                  <p>
                    {item.suggestion}
                  </p>
                </div>
              </AlertDescription>
            </Alert>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}