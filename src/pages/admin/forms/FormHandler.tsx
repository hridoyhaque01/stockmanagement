import { ReactNode } from "react";

export const FormInputHelper = ({
  isLoading = false,
  isError = false,
  isNotFound = false,
  isFound = false,
  errorDescription = "Something went wrong.",
  emptyDescription = "No results found.",
  refetch = () => {},
  children,
}: {
  isLoading?: boolean;
  isError?: boolean;
  isNotFound?: boolean;
  isFound?: boolean;
  errorDescription?: string;
  emptyDescription?: string;
  refetch?: () => void;
  children?: ReactNode;
}) => {

  if (isLoading) return <div className="input">Loading...</div>;
  else if (isError)
    return (
      <div className="input read-only:text-red-300 read-only:bg-transparent">
        {errorDescription}.{" "}
        <button
          type="button"
          className="text-black-600 underline"
          onClick={refetch}
        >
          try again
        </button>
      </div>
    );
  else if (isNotFound) return <div className="input">{emptyDescription}</div>;
  else if (isFound) return children;
};
