import Sale from "./sale";

interface RecentSalesProps extends React.HTMLAttributes<HTMLDivElement> {
  data: any;
}

export default function RecentSales({ data }: RecentSalesProps) {
  const sortedSales = data?.sort((a: any, b: any) => {
    const dateA = new Date(a["Date"]);
    const dateB = new Date(b["Date"]);
    return dateB.getTime() - dateA.getTime();
  });

  const recentSales = sortedSales?.slice(0, 5);

  return (
    <div className="space-y-8 w-full">
      {recentSales?.map((sale: any, index: number) => (
        <Sale
          key={index}
          name={sale["Employee Name"]}
          email={sale["Payment Type"]}
          amount={`₵ ${sale["Amount After Charges"]}`}
          date={sale["Date"]}
        />
      ))}
    </div>
  );
}
