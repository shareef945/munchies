import { BarChart, Card, Title } from "@tremor/react";

const valueFormatter = (number: any) =>
  `GHS ${new Intl.NumberFormat("us").format(number).toString()}`;

function StackedBarChart(data: any) {

  return (
    <div>
      <BarChart
        className="mt-6"
        stack={true}
        data={data ? data.data : []}
        index="month"
        categories={["mobilemoney", "cash", "card"]}
        colors={["blue", "teal", "amber", "rose", "indigo", "emerald"]}
        valueFormatter={valueFormatter}
        yAxisWidth={48}
      />
    </div>
  );
}

export default StackedBarChart;
