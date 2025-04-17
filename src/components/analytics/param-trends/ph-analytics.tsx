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
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ParameterTrendingService } from '@/services/parameter';
import moment from 'moment';

export const PhLevelAnalytics = ({
}) => {
  const [range, setRange] = useState<string>('daily');

  const {
    data,
    isLoading,
    error
  } = useQuery<ParameterType[]>({
    queryKey: ['parameters', range],
    queryFn: () => ParameterTrendingService.GetParametersReadingRange(range),
  });


  const formattedData = data?.map(item => ({
    ...item,
    created_at: moment(item.timestamp).format('"YYYY-MM-DD HH:mm:ss"')
  })) || [];

  if (isLoading) return <SkeletonBox />

  if (error) return <p>Error: {error.message}</p>

  const handleRangeChange = (value: string) => {
    setRange(value);
  };


  const CustomToolTip = ({ active, payload, label }: {
    active?: boolean,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any[],
    label?: string
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray p-6 shadow-md rounded-md text-sm">
          <p>{`Time Stamp: ${label}`}</p>
          <p>{`pH Level: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between w-full text-[#fb8500]">
          pH Level
          <Select onValueChange={handleRangeChange}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="This Day" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select Preferable Date</SelectLabel>
                <SelectItem value="daily">This Day</SelectItem>
                <SelectItem value="weekly">This Week</SelectItem>
                <SelectItem value="monthly">This Month</SelectItem>
                <SelectItem value="yearly">This Year</SelectItem>
                <SelectItem value="all">All</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {formattedData.length === 0 && <p>No data available...</p>}
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
            <XAxis dataKey='timestamp' />
            <YAxis />
            <Tooltip content={<CustomToolTip />} />
            <Legend />
            <Line type="monotone" dataKey="ph" stroke="#fb8500" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>

  )
}