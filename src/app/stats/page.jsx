"use client";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const data = [
  { name: "Text", value: 400, fill: "#0088FE" },
  { name: "Call", value: 300, fill: "#00C49F" },
  { name: "Video", value: 300, fill: "#FFBB28" },
];

const StatsPage = () => {
  return (
    <section>
      <div className="container mx-auto px-2 pt-5 pb-10">
        <header className="space-y-5">
          <h2 className="text-3xl md:text-5xl font-bold">
            Friendship Analytics
          </h2>
          <p className="text-2xl font-bold text-[#244d3f]">
            By Interaction Type
          </p>
        </header>

        <div className="flex items-center justify-center">
          <PieChart
            style={{
              width: "100%",
              maxWidth: "500px",
              maxHeight: "80vh",
              aspectRatio: 1,
            }}
            responsive
          >
            <Pie
              data={data}
              innerRadius="80%"
              outerRadius="100%"
              cornerRadius="50%"
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={true}
            />
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </section>
  );
};

export default StatsPage;
