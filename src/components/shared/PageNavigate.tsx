import { PageHeaderProps } from "@/common/types";
import { PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";

function PageNavigate({
  title = "",
  quantity,
  path = "",
  pathname = "",
}: PageHeaderProps) {
  if (!title) return null;
  return (
    <div className="w-full flex items-center justify-between gap-2 pb-4">
      <h4 className="text-lg font-medium text-black-900">
        {title} {quantity && <span className="text-green">({quantity})</span>}
      </h4>
      {pathname && path && (
        <Link
          to={path}
          className="bg-green-500 text-white px-4 py-3 rounded-lg flex items-center gap-1"
        >
          <PlusIcon />
          <span>{pathname}</span>
        </Link>
      )}
    </div>
  );
}

export default PageNavigate;
