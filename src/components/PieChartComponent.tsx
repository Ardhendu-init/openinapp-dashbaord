"use client";
// PieChart.js
import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 55, fill: "#98D89E" }, // Specify the color for Group A
  { name: "Group B", value: 41, fill: "#EE8484" }, // Specify the color for Group B
  { name: "Group C", value: 14, fill: "#F7DC7D" }, // Specify the color for Group C
];

const PieChartComponent = () => {
  return (
    <ResponsiveContainer width="50%" height={200}>
      <PieChart>
        <Pie
          dataKey="value"
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
