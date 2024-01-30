import { Card } from "@tremor/react";
import PieChart from "./chartcomponents/piechart";
import StackedBarChart from "./chartcomponents/stacked-barchart";
import TrendAnalysis from "./chartcomponents/trend-analysis-chart";
import React from "react";

export default function ReportCharts(data: any) {
  const stackedBarChartData = data ? data?.data?.monthlyRevenueChart : [];
  const pieChartData = data ? data?.data?.pieChart : [];
  const momoTrendsChart = data ? data?.data?.monthlyRevenueChart : [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="col-span-1 sm:col-span-2 lg:col-span-2">
        <Card className="p-4 shadow rounded bg-white">
          <h2 className="text-lg font-bold mb-2">Monthly Revenue Breakdown</h2>
          <StackedBarChart data={stackedBarChartData} />
        </Card>
      </div>
      <div className="col-span-1 sm:col-span-2 lg:col-span-1">
        <Card className="p-4 shadow rounded bg-white h-full">
          <h2 className="text-lg font-bold mb-2">Sales by Category</h2>
          <PieChart data={pieChartData} />
        </Card>
      </div>
      <div className="col-span-1 sm:col-span-2 lg:col-span-3">
        <Card className="p-4 shadow rounded bg-white">
          <h2 className="text-lg font-bold mb-2">Monthly Revenue Trend</h2>
          <TrendAnalysis data={momoTrendsChart} />
        </Card>
      </div>
    </div>
  );
}
