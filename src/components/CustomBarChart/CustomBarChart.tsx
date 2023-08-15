import dynamic from 'next/dynamic';
import { Bar, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
const BarChart = dynamic(
  () => import('recharts').then((recharts) => recharts.BarChart),
  {
    ssr: false,
  }
);

// Applied fix relating to https://github.com/recharts/recharts/issues/3615
const error = console.error;
console.error = (...args) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};

type CustomBarChartProps<T> = {
  data: T[];
  title: string;
  dataKey: string;
};

export const CustomBarChart = <T,>({
  data,
  title,
  dataKey,
}: CustomBarChartProps<T>) => {
  return (
    <div className="flex flex-col items-center text-center mb-6">
      <h1 className="text-2xl font-semibold mb-4">{title}</h1>
      <BarChart width={600} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={dataKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#0D9ECA" />
      </BarChart>
    </div>
  );
};
