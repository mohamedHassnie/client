import React from "react";
import Chart from "./charts";
import { DataUser } from "../../api/data";
export default function HomeDash() {
  return (
    <div>
      <Chart data={DataUser} title="User Analytics" grid dataKey="countUser" />
      <div className="homedash"></div>
    </div>
  );
}
