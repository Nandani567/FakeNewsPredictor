import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Container } from "react-bootstrap";

const COLORS = ["#28a745", "#dc3545"]; // Real = green, Fake = red

function NewsChart({ data }) {
  return (
    <Container className="d-flex justify-content-center my-4">
      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </Container>
  );
}

export default NewsChart;
