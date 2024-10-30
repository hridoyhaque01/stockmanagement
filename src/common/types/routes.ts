import { ReactNode } from "react";

type RoutePath = {
  name: string;
  path: string;
  activePath: string;
  element: ReactNode;
};

type Route = {
  path: string;
  element: React.ReactNode;
  children?: Route[];
};

type RoutePathConfig = {
  [key: string]: RoutePath;
};

export type { Route, RoutePath, RoutePathConfig };
