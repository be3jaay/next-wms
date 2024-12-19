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
  SkeletonBox,
  ScrollArea,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction
} from "@/components/ui"
import { useRouter } from "next/navigation"
import { AnomaliesType } from "@/types/common"
import { GetAllAnomalousService } from "@/services/parameter"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import Moment from "react-moment"
import { useToast } from "@/hooks/use-toast"

export const Notifications = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast()
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

  const mutation = useMutation({
    mutationFn: (id: number) => GetAllAnomalousService.deleteAnomaly(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['show_daily_notification'] });
    },
  });

  const deleteDailyAnomaly = useMutation({
    mutationFn: GetAllAnomalousService.deleteDailyAnomaly,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['show_daily_notification'] });
    },
  });

  if (isLoading) return <SkeletonBox />

  if (error) return <p>Error: {error.message}</p>


  const handleClear = (id: number) => {
    mutation.mutate(id);
    toast({
      variant: "default",
      title: "Successfully Deleted.",
      description: "Anomaly has been deleted successfully.",
    })
  };

  const deleteDaily = () => {
    deleteDailyAnomaly.mutate();
    toast({
      variant: "default",
      title: "Successfully Deleted.",
      description: "Anomaly has been deleted successfully.",
    })
  }

  const redirectToLogs = () => {
    router.push("/view-logs")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex items-center w-full justify-between text-primary">
            Daily Notifications
            <div className="flex items-center gap-2">
              <Button onClick={redirectToLogs}>
                View All Logs
              </Button>
              <AlertDialog>
                <AlertDialogTrigger className="text-white text-sm bg-red/80 py-2.5 px-6 rounded-md">
                  Clear All
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete anomaly data from the database.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={deleteDaily}>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <ScrollArea className="h-[32.2rem] w-full ">
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
                    <Moment format="hh:mm:ss a ">{item.created_at}</Moment>
                  </div>
                </AlertTitle>
                <AlertDescription className="flex flex-col items-start gap-1">
                  {item.suggestion}
                  <AlertDialog>
                    <AlertDialogTrigger className="text-white mt-4 text-sm bg-red/80 py-2.5 px-6 rounded-md">
                      Clear
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete anomaly data from the database.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleClear(item.id)}>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </AlertDescription>
              </Alert>
            </div>
          ))}
        </CardContent>
      </ScrollArea>
    </Card>
  )
}