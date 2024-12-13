"use client"
import { BellRing } from "lucide-react"
import {
  Alert,
  AlertDescription,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  SkeletonBox
} from "@/components/ui"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ParameterType } from "@/types/common"
import { GetAnomalousService } from "@/services/parameter"
import { useQuery } from "@tanstack/react-query"

export const Notifications = () => {
  const router = useRouter();
  const [showWarning] = useState(false);
  const {
    data,
    isLoading,
    error
  } = useQuery<ParameterType>({
    queryKey: ['get_anomalous'],
    queryFn: GetAnomalousService.getAnomalous,
    refetchInterval: 15 * 60 * 1000,
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
            Notifications
            <Button onClick={redirectToLogs}>
              View All Logs
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center py-1 gap-1" >
          <Alert variant={showWarning ? "destructive" : "default"}>
            <BellRing className="h-4 w-4 " />
            <Dialog>
              <DialogTrigger>{data?.dissolved_oxygen}</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>All parameters are normal</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <AlertDescription>
              {data?.created_at}
            </AlertDescription>
          </Alert>
        </div>
      </CardContent>
    </Card>
  )
}