export function totalSales(data: any[]): number {
  return data?.reduce((total: any, item: any) => {
    return total + parseInt(item[" Selling Price"], 10);
  }, 0);
}

export function totalQuantity(data: any[]): number {
  return data?.length;
}

export function chartData(data:any[]) {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let monthlySales = monthNames.map(month => ({ name: month, total: 0 }));

  data?.forEach(item => {
    const date = new Date(item[" Updated Date"]);
    const monthIndex = date.getMonth();
    const quantityDifference = parseInt(item[" Quantity Difference"], 10);
    const sellingPrice = parseFloat(item[" Selling Price"]);
    const saleTotal = sellingPrice * quantityDifference;

    monthlySales[monthIndex].total += saleTotal;
  });


  return monthlySales;
}