import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./style/charts.css";
export default function charts({ title, data, dataKey, grid }) {
  return (
    <div className="charts">
      <h3 className="Chartitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name"></XAxis>
          <Line type="monotone" dataKey={dataKey}></Line>
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray=" 5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
