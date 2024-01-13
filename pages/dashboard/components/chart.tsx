import { chartData } from "@/functions/dashboard";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";


interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: any;
}

export function Chart({ data }: ChartProps) {

  const data1 = chartData(data ? data : []);
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data1} >
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `₵ ${value}`}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
