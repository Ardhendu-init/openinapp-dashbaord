"use client";

import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const PieChartComponent = ({ data }: any) => {
  return (
    <ResponsiveContainer width="50%" height={200}>
      <PieChart>
        <Pie
          dataKey="salesPercentage"
          cx={80}
          cy={80}
          startAngle={360}
          endAngle={0}
          data={data}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
