import { Context, use } from "react";

export function useContext<T>(Provider: Context<T>) {
  const ctx = use(Provider);

  if (!ctx) {
    throw new Error("Invalid context call");
  }

  return ctx;
}
