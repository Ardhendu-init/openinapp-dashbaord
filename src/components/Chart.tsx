"use client";

import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
const datax = [
  {
    name: "Week 1",
    uv: 150,
    pv: 300,
  },
  {
    name: "Week 2",
    uv: 300,
    pv: 170,
  },
  {
    name: "Week 3",
    uv: 150,
    pv: 300,
  },
  {
    name: "Week 4",
    uv: 300,
    pv: 170,
  },
];

const Chart = ({ data }: any) => {
  return (
    <ResponsiveContainer width="100%">
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
