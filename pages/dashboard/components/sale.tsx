import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDate } from "@/utils/utils";

export default function Sale({
  avatarSrc,
  avatarAlt,
  avatarFallback,
  name,
  email,
  amount,
  date
}: any) {

  const formattedDate = formatDate(date);
  return (
    <div className="flex items-center">
      {/* <Avatar className="h-9 w-9">
        <AvatarImage src={avatarSrc} alt={avatarAlt} />
        <AvatarFallback>{avatarFallback}</AvatarFallback>
      </Avatar> */}
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">{name}</p>
        <div className="flex gap-2">
        <p className="text-sm text-muted-foreground">{email}</p>
        <p className="text-sm text-muted-foreground">{formattedDate}</p>
        </div>
      </div>
      <div className="ml-auto font-medium">{amount}</div>
    </div>
  );
}
