import { Card, LineChart, Title } from "@tremor/react";

const valueFormatter = (number: any) =>
  `GHS ${new Intl.NumberFormat("us").format(number).toString()}`;

export default function TrendAnalysis(data: any) {
  return (
    <>
      <LineChart
        className="h-72 mt-4"
        data={data ? data.data : []}
        index="date"
        categories={["mobilemoney", "cash"]}
        colors={["neutral", "indigo"]}
        yAxisWidth={48}
        connectNulls={true}
        valueFormatter={valueFormatter}
      />
    </>
  );
}
