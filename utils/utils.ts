export function formatDate(dateString: string): string {
  function getOrdinalSuffix(day: number): string {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  const date = new Date(dateString);
  const day = date.getDate();
  const year = date.getFullYear();
  const month = date.toLocaleDateString("en-US", { month: "short" }); // 'short' gives the abbreviated month name

  const dayWithSuffix = `${day}${getOrdinalSuffix(day)}`;

  const formattedDate = `${dayWithSuffix} ${month} ${year}`;
  return formattedDate;
}

export function formatDateQuery(date: Date): string {
  const pad = (num: number): string => num?.toString().padStart(2, "0");

  const year = date?.getUTCFullYear();
  const month = pad(date?.getUTCMonth() + 1); // getUTCMonth() returns 0-11
  const day = pad(date?.getUTCDate());
  const hours = pad(date?.getUTCHours());
  const minutes = pad(date?.getUTCMinutes());
  const seconds = pad(date?.getUTCSeconds());

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}+00`;
}

export const handleDownload = (data: any) => {
  const csvContent = data
    .map((row: any) => Object.values(row).join(","))
    .join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "transactions.csv";
  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};
