import type { FC, ReactNode } from "react";

/**
 * React Functional Component that receives a children prop and returns a JSX element.
 */
export type ParentComponent<T = {}> = FC<{ children: ReactNode } & T>;
