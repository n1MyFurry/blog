"use client";

import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

const Chart = ({ aspect, title }: { aspect: number, title: string }) => {

  const [ready, setReady] = useState(false);

  const data = [
    { name: "Juanuary", Total: 1200 },
    { name: "February", Total: 2100 },
    { name: "March", Total: 800 },
    { name: "April", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "June", Total: 1700 }
  ];

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <div className="chart">
      <div className="mb-5 text-base font-medium">{title}</div>
      {ready && (
        <ResponsiveContainer width="100%" aspect={aspect}>
          <AreaChart 
            width={730} 
            height={250} 
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="gray" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
            <Tooltip />
            <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}

export default Chart