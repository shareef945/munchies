import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CalendarDateRangePicker from "./components/date-range-picker";
import RecentSales from "./components/recent-sales";
import DataCards from "./components/data-cards";
import { useEffect, useState } from "react";
import Transactions from "./components/transactions";
import { handleDownload } from "@/utils/utils";
import Navbar from "@/components/shared/navbar";
import ReportCharts from "./components/reportcharts";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useToast } from "@/components/ui/use-toast";
import { getHubtelData, getHubtelTransactions } from "../api/dashboard";
import OverviewChart from "./components/chart";

function DashboardPage() {
  const [date, setDate] = useState<any>("");
  const [data, setData] = useState<any>("");
  const { toast } = useToast();

  const {
    isLoading: isLoading,
    error: error,
    data: hubtelData,
    isError: isError,
  } = useQuery({
    queryKey: ["hubtel-data", date],
    queryFn: () =>
      getHubtelData(
        format(date.from, "yyyy-MM-dd"),
        format(date.to, "yyyy-MM-dd")
      ),
  });

  const {
    isLoading: isLoadingTx,
    error: errorTx,
    data: transactions,
    isError: isErrorTx,
  } = useQuery({
    queryKey: ["transactions", date],
    queryFn: () =>
      getHubtelTransactions(
        format(date.from, "yyyy-MM-dd"),
        format(date.to, "yyyy-MM-dd")
      ),
  });

  useEffect(() => {
    if (isError) {
      toast({
        title: "Error",
        description: "An error occured",
      });
    }
    if (isLoading) {
      toast({
        title: "Loading Data..",
        description: "Relax your nerves",
      });
    }
    if (hubtelData) {
      toast({
        title: "Data Loaded",
        description: "Data has been loaded successfully",
      });
    }
  }, [isError, isLoading, hubtelData]);

  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 sm:space-x-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker onDateChange={(e) => setDate(e)} />
              <Button onClick={() => handleDownload(hubtelData?.data)}>
                Download
              </Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="flex justify-between lg:inline-block">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                Notifications
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <DataCards data={hubtelData} />
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 w-full">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <OverviewChart data={hubtelData?.monthlyRevenueChart} />
                  </CardContent>
                </Card>
                <Card className="col-span-4 md:col-span-3 w-full">
                  <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RecentSales
                      data={hubtelData?.recentTransactions?.results}
                    />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="transactions" className="space-y-4">
              <Transactions
                data={transactions?.results ? transactions?.results : []}
              />
            </TabsContent>
            <TabsContent value="reports" className="space-y-4">
              <ReportCharts analyticsData={hubtelData} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}

//deploying

export default DashboardPage;
