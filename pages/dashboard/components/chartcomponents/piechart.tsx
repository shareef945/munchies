import { Card, DonutChart, Legend } from "@tremor/react";

const valueFormatter = (number: any) =>
  `GHS ${new Intl.NumberFormat("us").format(number).toString()}`;

function PieChart(data: any) {
  return (
    <>
      <DonutChart
        className="mt-24"
        data={data ? data.data : []}
        category="sales"
        index="name"
        valueFormatter={valueFormatter}
        colors={["slate", "violet", "red"]}
        variant="pie"
      />
      <Legend
        className="mt-8 items-center flex justify-center"
        categories={["Mobile Money", "Card", "Cash"]}
        colors={["slate", "violet", "red"]}
      />
    </>
  );
}

export default PieChart;
