import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CalendarDateRangePicker  from "./components/date-range-picker";
import Chart  from "./components/chart";
import  RecentSales  from "./components/recent-sales";
import DataCards from "./components/data-cards";
import { useEffect, useState } from "react";
import supabase from "@/utils/supabase";
import Transactions  from "./components/transactions";
import { formatDateQuery, handleDownload } from "@/utils/utils";
import Navbar from "@/components/shared/navbar";


export default function DashboardPage() {
  const [date, setDate] = useState<any>("");
  const [data, setData] = useState<any>("");

  useEffect(() => {
    const getData = async () => {
      const { data: transactions, error } = await supabase
        .from("hubtel-transactions")
        .select("*")
        .gt('" Updated Date"', formatDateQuery(date ? date.from : null))
        .lt('" Updated Date"', formatDateQuery(date ? date.to : null));
      setData(transactions);
    };
    getData();
  }, [date]);

  return (
    <>
    <Navbar />
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker onDateChange={(e) => setDate(e)} />
              <Button onClick={() => handleDownload(data)}>Download</Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="reports" disabled>
                Reports
              </TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                Notifications
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <DataCards data={data ? data : []} />
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Chart data={data} />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RecentSales data={data ? data : []} />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="transactions" className="space-y-4">
              <Transactions data={data ? data : []} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
