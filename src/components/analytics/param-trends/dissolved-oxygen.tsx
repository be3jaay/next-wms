'use client'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
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
import moment from 'moment';

export const DissolvedOxygenAnalytics = ({
}) => {
  const {
    data,
    isLoading,
    error
  } = useQuery<ParameterType[]>({
    queryKey: ['all_parameters'],
    queryFn: ParameterService.getParameter,
    refetchInterval: 60 * 1000,
  });

  const formattedData = data?.map(item => ({
    ...item,
    created_at: moment(item.created_at).format('hh:mm:ss')
  })) || [];

  if (isLoading) return <SkeletonBox />

  if (error) return <p>Error: {error.message}</p>

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between w-full">
          Dissolved Oxygen
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
            data={formattedData}
            margin={{
              top: 5,
              bottom: 5,
            }}
          >
            <XAxis dataKey="created_at" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="dissolved_oxygen" stroke="#06d6a0" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>

  )
}