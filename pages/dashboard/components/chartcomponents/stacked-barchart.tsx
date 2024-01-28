import { BarChart, Card, Title } from "@tremor/react";
      
const chartdata2 = [
  {
    name: "Topic 1",
    "Group A": 890,
    "Group B": 338,
    "Group C": 538,
    "Group D": 396,
    
  },
  {
    name: "Topic 2",
    "Group A": 289,
    "Group B": 233,
    "Group C": 253,
    "Group D": 333,
    
  },
  {
    name: "Topic 3",
    "Group A": 380,
    "Group B": 535,
    "Group C": 352,
    "Group D": 718,
    
  },
  {
    name: "Topic 4",
    "Group A": 90,
    "Group B": 98,
    "Group C": 28,
    "Group D": 33,
    
  },
];

const valueFormatter = (number:any) => `$ ${new Intl.NumberFormat("us").format(number).toString()}`;



function StackedBarChart() {
  return (
    <div>
        <BarChart
      className="mt-6"
      stack="true"
      data={chartdata2}
      index="name"
      categories={["Group A", "Group B", "Group C", "Group D"]}
      colors={["blue", "teal", "amber", "rose", "indigo", "emerald"]}
      valueFormatter={valueFormatter}
      yAxisWidth={48}
    />
    </div>
  )
}

export default StackedBarChart