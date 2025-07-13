import ROUTES from "@/constants/routes";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { getDeviconClassname } from "@/lib/utils";

interface props {
  _id: string;
  name: string;
  questions?: number;
  showCount?: boolean;
  compact?: boolean;
}
const TagCard = ({
  _id,
  name,
  questions,
  showCount = true,
  compact,
}: props) => {
  const iconClass = getDeviconClassname(name);
  return (
    <Link href={ROUTES.TAG(_id)} className="flex justify-between gap-2">
      <Badge className="background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
        <div className="flex-center space-x-2">
          <i className={`${iconClass} text-sm dark:invert`}></i>
          <span>{name}</span>
        </div>
      </Badge>
      {showCount && (
        <p className="small-medium text-dark500_light700">{questions}</p>
      )}
    </Link>
  );
};

export default TagCard;
