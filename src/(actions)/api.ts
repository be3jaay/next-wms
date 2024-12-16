import { GetAllAnomalousService } from "@/services/parameter";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteAllAnomaly = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: GetAllAnomalousService.deleteDailyAnomaly,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['all_anomalies'] });
    },
  });
};