import { LazyExoticComponent } from "react";

type RoutePath = {
  name: string;
  path: string;
  activePath: string;
  element: LazyExoticComponent<React.ComponentType<any>>; 
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
