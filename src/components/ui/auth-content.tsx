"use client";
import {
  WaterTemp,
  DissolvedOxygen,
  ParameterTrends,
  PHLevel,
  Notifications
} from "@/components/analytics";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import { CurrentParameterService } from "@/services/parameter";
import { ParameterType } from "@/types/common";
import { useQuery } from "@tanstack/react-query";
import { WaterTempAnalytics } from "../analytics/param-trends/water-temp-analytics";
import { DissolvedOxygenAnalytics } from "../analytics/param-trends/dissolved-oxygen";
import { PhLevelAnalytics } from "../analytics/param-trends/ph-analytics";

export default function AuthContent() {
  const {
    data,
    isLoading,
    error
  } = useQuery<ParameterType>({
    queryKey: ['current_parameter'],
    queryFn: CurrentParameterService.getCurrentParameter,
  });

  return (
    <div className="w-full h-full flex items-center justify-center flex-col lg:grid lg:grid-cols-6 lg:grid-rows-6 gap-2 -mt-14 lg:mx-auto lg:max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="w-full col-span-2 row-span-2 col-start-1">
        <WaterTemp
          data={data}
          isLoading={isLoading}
          error={error}
        />
      </div>
      <div className="w-full col-span-2 row-span-2 col-start-3">
        <DissolvedOxygen
          data={data}
          isLoading={isLoading}
          error={error}
        />
      </div>
      <div className="w-full col-span-2 row-span-2 col-start-5">
        <PHLevel
          data={data}
          error={error}
          isLoading={isLoading}
        />
      </div>
      <div className="w-full col-span-4 row-span-4 row-start-3">
        <div className="">
          <Tabs defaultValue="parameter" className="w-full">
            <TabsList className="grid w-full grid-cols-2 h-auto lg:grid-cols-4">
              <TabsTrigger value="parameter">Parameter</TabsTrigger>
              <TabsTrigger value="waterTemp">Water Temperature</TabsTrigger>
              <TabsTrigger value="dissolvedOxygen">Dissolved Oxygen</TabsTrigger>
              <TabsTrigger value="pH-level">pH Level</TabsTrigger>
            </TabsList>
            <TabsContent value="parameter">
              <ParameterTrends />
            </TabsContent>
            <TabsContent value="waterTemp">
              <WaterTempAnalytics />
            </TabsContent>
            <TabsContent value="dissolvedOxygen">
              <DissolvedOxygenAnalytics />
            </TabsContent>
            <TabsContent value="pH-level">
              <PhLevelAnalytics />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div className="w-full col-span-2 row-span-4 row-start-3 h-full">
        <Notifications />
      </div>
    </div>
  )
}