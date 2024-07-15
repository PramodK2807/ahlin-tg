// src/components/RechartLocalAndGuest.js

import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const dataPerDay = [
    { date: "2024-07-01", users: 400 },
    { date: "2024-07-02", users: 300 },
    { date: "2024-07-03", users: 350 },
    { date: "2024-07-04", users: 450 },
    { date: "2024-07-05", users: 200 },
    { date: "2024-07-06", users: 500 },
    { date: "2024-07-07", users: 600 },
    { date: "2024-07-08", users: 700 },
    { date: "2024-07-09", users: 800 },
    { date: "2024-07-10", users: 250 },
    { date: "2024-07-11", users: 450 },
    { date: "2024-07-12", users: 550 },
    { date: "2024-07-13", users: 650 },
    { date: "2024-07-14", users: 750 },
    { date: "2024-07-15", users: 850 },
    { date: "2024-07-16", users: 150 },
    { date: "2024-07-17", users: 250 },
    { date: "2024-07-18", users: 350 },
    { date: "2024-07-19", users: 450 },
    { date: "2024-07-20", users: 550 },
    { date: "2024-07-21", users: 650 },
    { date: "2024-07-22", users: 750 },
    { date: "2024-07-23", users: 850 },
    { date: "2024-07-24", users: 950 },
    { date: "2024-07-25", users: 1050 },
    { date: "2024-07-26", users: 1150 },
];

const dataPerMonth = [
  // Sample data
  { date: "2024-01", users: 4000 },
  { date: "2024-02", users: 3000 },
  // Add more monthly data points
];

const dataPerYear = [
  // Sample data
  { date: "2023", users: 24000 },
  { date: "2024", users: 22000 },
  // Add more yearly data points
];

const RechartLocalAndGuest = () => {
  const [data, setData] = useState(dataPerDay);
  const [filter, setFilter] = useState("day");

  const handleFilterChange = (e) => {
    const filter = e.target.value;
    setFilter(filter);
    switch (filter) {
      case "month":
        setData(dataPerMonth);
        break;
      case "year":
        setData(dataPerYear);
        break;
      default:
        setData(dataPerDay);
    }
  };

  return (
    <>
      <div className="pt-4">
        <div className="card dz-card" id="bootstrap-table1">
          <div className="col-12 card-body position-relative card-body-2">
            <p>Guest & Locals</p>

            <div>
              <label>
                Filter by:
                <select value={filter} onChange={handleFilterChange}>
                  <option value="day">Day</option>
                  <option value="month">Month</option>
                  <option value="year">Year</option>
                </select>
              </label>
            </div>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default RechartLocalAndGuest;
