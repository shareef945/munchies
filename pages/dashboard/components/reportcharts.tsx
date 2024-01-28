import {
  Card,
  Metric,
  Text,
  AreaChart,
  BadgeDelta,
  Flex,
  DeltaType,
  Grid,
  Title,
  Col
} from "@tremor/react";
import PieChart from "./chartcomponents/piechart";
import StackedBarChart from "./chartcomponents/stacked-barchart";
import TrendAnalysis from "./chartcomponents/trend-analysis-chart";
import React from "react";

const data = [
  {
    Month: "Jan 21",
    Sales: 2890,
    Profit: 2400,
    Customers: 4938,
  },
  {
    Month: "Feb 21",
    Sales: 1890,
    Profit: 1398,
    Customers: 2938,
  },
  // ...
  {
    Month: "Jul 21",
    Sales: 3490,
    Profit: 4300,
    Customers: 2345,
  },
];

const categories = [
  {
    title: "Sales",
    metric: "$ 12,699",
    metricPrev: "$ 9,456",
    delta: "34.3%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Profit",
    metric: "$ 12,348",
    metricPrev: "$ 10,456",
    delta: "18.1%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Customers",
    metric: "948",
    metricPrev: "1,082",
    delta: "12.3%",
    deltaType: "moderateDecrease",
  },
  {
    title: "Customers",
    metric: "948",
    metricPrev: "1,082",
    delta: "12.3%",
    deltaType: "moderateDecrease",
  },
  {
    title: "Customers",
    metric: "948",
    metricPrev: "1,082",
    delta: "12.3%",
    deltaType: "moderateDecrease",
  },
  {
    title: "Customers",
    metric: "948",
    metricPrev: "1,082",
    delta: "12.3%",
    deltaType: "moderateDecrease",
  },
  {
    title: "Customers",
    metric: "948",
    metricPrev: "1,082",
    delta: "12.3%",
    deltaType: "moderateDecrease",
  },
];

const valueFormatter = (number: any) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`;

export default function ReportCharts() {
  return (
  
  <>
  <Grid numItemsSm={5} numItemsLg={3} className="gap-6">
    {categories.map((item, index) => (
      <React.Fragment key={item.title}>
        {index === 0 ? (
          <Col numColSpan={1} numColSpanLg={2}>
            <Card>
              <Flex alignItems="start">
                <Text>{item.title}</Text>
                <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
              </Flex>
              <Flex
                className="space-x-3 truncate"
                justifyContent="start"
                alignItems="baseline"
              >
                <Metric>{item.metric}</Metric>
                <Text>from {item.metricPrev}</Text>
              </Flex>
              {index === 0 && <StackedBarChart />}
            </Card>
          </Col>
        ) : index === 1 ? (
          <Card>
            <Flex alignItems="start">
              <Text>{item.title}</Text>
              <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
            </Flex>
            <Flex
              className="space-x-3 truncate"
              justifyContent="start"
              alignItems="baseline"
            >
              <Metric>{item.metric}</Metric>
              <Text>from {item.metricPrev}</Text>
            </Flex>
            {index === 1 && <PieChart />}
          </Card>
        ) : index === categories.length - 2 ? (
          <Col numColSpan={1} numColSpanLg={2}>
            <Card>
              <Flex alignItems="start">
                <Text>{item.title}</Text>
                <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
              </Flex>
              <Flex
                className="space-x-3 truncate"
                justifyContent="start"
                alignItems="baseline"
              >
                <Metric>{item.metric}</Metric>
                <Text>from {item.metricPrev}</Text>
              </Flex>
              {index >= 2 && <TrendAnalysis />}
            </Card>
          </Col>
        ) : (
          <Card>
            <Flex alignItems="start">
              <Text>{item.title}</Text>
              <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
            </Flex>
            <Flex
              className="space-x-3 truncate"
              justifyContent="start"
              alignItems="baseline"
            >
              <Metric>{item.metric}</Metric>
              <Text>from {item.metricPrev}</Text>
            </Flex>
            {index >= 2 && <TrendAnalysis />}
          </Card>
        )}
      </React.Fragment>
    ))}
  </Grid>
</>


  
  );
}
