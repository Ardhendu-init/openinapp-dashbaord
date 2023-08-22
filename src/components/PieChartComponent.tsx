"use client";

import { PieChartData } from "@/types";
import React from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

interface PieChartProps {
  data: PieChartData[];
}

const PieChartComponent: React.FC<PieChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="50%" height={200}>
      <PieChart>
        <Pie
          data={data}
          dataKey="salesPercentage"
          cx={80}
          cy={80}
          startAngle={360}
          endAngle={0}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
