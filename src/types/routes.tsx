import { LazyExoticComponent } from "react";

type RoutePath = {
  name: string;
  path: string;
  activePath: string;
  element: LazyExoticComponent<React.ComponentType<any>>; // This is correct for lazy-loaded components
};

type Route = {
  path: string;
  element: React.ReactNode; // Change this to ReactNode to accept both components and lazy-loaded components
};

type RoutePathConfig = {
  [key: string]: RoutePath;
};

export type { Route, RoutePath, RoutePathConfig };
