import Sale from "./sale";

interface RecentSalesProps extends React.HTMLAttributes<HTMLDivElement> {
  data: any;
}

export default function RecentSales({ data }: RecentSalesProps) {
  const sortedSales = data?.sort((a: any, b: any) => {
    const dateA = new Date(a[" Updated Date"]);
    const dateB = new Date(b[" Updated Date"]);
    return dateB.getTime() - dateA.getTime();
  });

  const recentSales = sortedSales.slice(0, 5);

  return (
    <div className="space-y-8">
      {recentSales?.map((sale: any, index: number) => (
        <Sale
          key={index}
          name={sale[" Name"]}
          email={sale["Updated By"]}
          amount={`₵ ${sale[" Selling Price"]}`}
          date={sale[" Updated Date"]}
        />
      ))}
    </div>
  );
}
