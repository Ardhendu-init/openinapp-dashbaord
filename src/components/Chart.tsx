"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

type ChartProps = {
  data: {
    week: number;
    userVisits: number;
    guestVisits: number;
  }[];
};

const Chart: React.FC<ChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart
        width={500}
        height={200}
        data={data}
        margin={{
          right: 30,
        }}
      >
        <CartesianGrid horizontal={true} vertical={false} />
        <XAxis
          dataKey="week"
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => `Week-${value}`}
        />
        <YAxis axisLine={false} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="userVisits"
          stroke="#E9A0A0"
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="guestVisits"
          stroke="#9BDD7C"
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
