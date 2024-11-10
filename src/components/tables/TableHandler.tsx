import { ReactNode } from "react";
import { TableCell, TableRow } from "../ui/table";

export const TableDataLoadingSkeleton = ({
  row = 8,
  col = 6,
}: {
  row?: number;
  col?: number;
}) => {
  return Array(row)
    ?.fill(0)
    ?.map((_, rowIndx) => (
      <TableRow key={rowIndx}>
        {Array(col)
          .fill(0)
          .map((_, index) => (
            <TableCell key={index} className="p-2">
              <div className="h-10 bg-neutral-200 animate-pulse rounded"></div>
            </TableCell>
          ))}
      </TableRow>
    ));
};

export const TableDataNotFound = ({
  col = 6,
  description = "No results found.",
}: {
  col?: number;
  description?: string;
}) => {
  return (
    <TableRow>
      <TableCell
        colSpan={col}
        className="h-24 text-center text-base text-black-700"
      >
        {description}
      </TableCell>
    </TableRow>
  );
};

export const TableDataError = ({
  col = 6,
  description = "Something went wrong.",
  refetch = () => {},
}: {
  col?: number;
  description?: string;
  refetch?: () => void;
}) => {
  return (
    <TableRow>
      <TableCell
        colSpan={col}
        className="h-24 text-center text-base text-red-300"
      >
        <div>
          {description}.{" "}
          <button
            type="button"
            className="text-black-600 underline"
            onClick={refetch}
          >
            try again
          </button>{" "}
        </div>
      </TableCell>
    </TableRow>
  );
};

export const TableResponseHandler = ({
  isLoading = false,
  isError = false,
  isNotFound = false,
  isFound = false,
  errorDescription = "Something went wrong.",
  emptyDescription = "No results found.",
  column = 6,
  rows = 8,
  refetch = () => {},
  children,
}: {
  isLoading?: boolean;
  isError?: boolean;
  isNotFound?: boolean;
  isFound?: boolean;
  column?: number;
  rows?: number;
  errorDescription?: string;
  emptyDescription?: string;
  refetch?: () => void;
  children?: ReactNode;
}) => {
  if (isLoading) return <TableDataLoadingSkeleton col={column} row={rows} />;
  else if (isError)
    return (
      <TableDataError
        col={column}
        description={errorDescription}
        refetch={refetch}
      />
    );
  else if (isNotFound)
    return <TableDataNotFound col={column} description={emptyDescription} />;
  else if (isFound) return <>{children}</>;
};
