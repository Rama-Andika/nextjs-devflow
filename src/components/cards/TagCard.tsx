import ROUTES from "@/constants/routes";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { getDeviconClassname } from "@/lib/utils";
import Image from "next/image";

interface props {
  _id: string;
  name: string;
  questions?: number;
  showCount?: boolean;
  compact?: boolean;
  remove?: boolean;
  isButton?: boolean;
  handleRemove?: () => void;
}
const TagCard = ({
  _id,
  name,
  questions,
  showCount = true,
  compact,
  remove,
  isButton,
  handleRemove,
}: props) => {
  const iconClass = getDeviconClassname(name);

  const content = (
    <>
      <Badge className="background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase flex gap-2">
        <div className="flex-center space-x-2">
          <i className={`${iconClass} text-sm dark:invert`}></i>
          <span>{name}</span>
        </div>

        {remove && (
          <Image
            src="/icons/close.svg"
            width={12}
            height={12}
            alt="close icon"
            className="cursor-pointer object-contain invert-0 dark:invert"
            onClick={handleRemove}
          />
        )}
      </Badge>
      {showCount && (
        <p className="small-medium text-dark500_light700">{questions}</p>
      )}
    </>
  );

  if (compact && isButton) {
    return <button type="button" className="flex justify-between gap-2">{content}</button>;
  } else {
    return (
      <Link href={ROUTES.TAG(_id)} className="flex justify-between gap-2">
        {content}
      </Link>
    );
  }
};

export default TagCard;
