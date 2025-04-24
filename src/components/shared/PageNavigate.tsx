import { PageHeaderProps } from "@/common/types";
import { cn } from "@/lib/utils";
import { MoveLeft, PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";

function PageNavigate({
  title = "",
  quantity,
  path = "",
  pathname = "",
  prevPath = "",
  wrapper = "",
  children,
}: PageHeaderProps) {
  if (!title) return null;
  return (
    <div
      className={cn(
        "w-full flex items-center justify-between gap-2 pb-3 sm:pb-4",
        wrapper
      )}
    >
      {prevPath ? (
        <Link
          to={prevPath}
          className="text-sm sm:text-base md:text-lg font-medium text-black-700 flex items-center gap-1"
        >
          <MoveLeft className="w-5 h-5" />
          <span>
<<<<<<< HEAD
            {title} <span className="text-green">({quantity || 0})</span>
=======
            {title}{" "}
            {quantity && <span className="text-green">({quantity})</span>}
>>>>>>> 5543df6 (fix tables and add some api's)
          </span>
        </Link>
      ) : (
        <h4 className="text-sm sm:text-base md:text-lg font-medium text-black-700">
<<<<<<< HEAD
          {title} <span className="text-green">({quantity || 0})</span>
=======
          {title} {quantity && <span className="text-green">({quantity})</span>}
>>>>>>> 5543df6 (fix tables and add some api's)
        </h4>
      )}
      <div className="w-full sm:max-w-max flex items-center gap-2 justify-between">
        {children}
        {pathname && path && (
          <Link
            to={path}
            className="bg-green-500 text-sm sm:text-base text-white px-2 sm:px-4 py-2 sm:py-3 rounded-lg flex items-center gap-1 shrink-0"
          >
            <PlusIcon className="w-4 sm:h-5 aspect-square" />
            <span>{pathname}</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default PageNavigate;
