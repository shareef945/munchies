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
