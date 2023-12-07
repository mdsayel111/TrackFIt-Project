/* eslint-disable react/prop-types */
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const PieChar = ({ paidSuscribers, newsLetterSuscribers }) => {
  const data = [
    { name: "Group A", value: paidSuscribers },
    { name: "Group B", value: newsLetterSuscribers },
  ];
  const COLORS = ["#0088FE", "#00C49F"];

  console.log("hi");

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <h1 className="text-5xl text-primary font-bold text-center mt-12">
        newsletter <br className="lg:hidden" /> vs <br className="lg:hidden" />{" "}
        paid suscibers
      </h1>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={800} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 space-x-8">
        <div className="flex justify-center items-center">
          <div className="w-4 h-4 bg-[#0088FE] rounded-full mr-3"></div>
          <span>Paid Suscribers</span>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-4 h-4 bg-[#00C49F] rounded-full mr-3"></div>
          <span>Newsletter Suscribers</span>
        </div>
      </div>
    </div>
  );
};

export default PieChar;
