'use client'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  SkeletonBox
} from "@/components/ui";
import { ParameterType } from '@/types/common';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { ParameterService } from '@/services/parameter';

export const WaterTempAnalytics = ({
}) => {
  const {
    data,
    isLoading,
    error
  } = useQuery<ParameterType>({
    queryKey: ['all_parameters'],
    queryFn: ParameterService.getParameter,
    refetchInterval: 15 * 60 * 1000,
  });

  if (isLoading) return <SkeletonBox />

  if (error) return <p>Error: {error.message}</p>

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between w-full">
          Water Temperature
          <Select>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="This Day" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select Preferable Date</SelectLabel>
                <SelectItem value="apple">This Day</SelectItem>
                <SelectItem value="banana">This Week</SelectItem>
                <SelectItem value="blueberry">This Month</SelectItem>
                <SelectItem value="grapes">This Year</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={410}>
          <LineChart
            width={700}
            height={300}
            data={Array.isArray(data) ? data : []}
            margin={{
              top: 5,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey='created_at' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="water_temperature" stroke="#48cae4" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>

  )
}