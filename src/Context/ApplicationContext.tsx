import { ReactNode } from "react";
import { useMedia } from "../Hooks/useMedia.tsx";
import { ApplicationContext } from "./Contexts.ts";

/**
 * A context provider component that supplies the application-wide context.
 * It uses the `useMedia` hook to determine if the screen width matches the given media query.
 *
 * @param children - The child components that will have access to the context.
 *
 * @returns A context provider wrapping the children, providing them with the `mobile` state.
 */
export const ApplicationStorage = ({ children }: { children: ReactNode }) => {
  const mobile = useMedia("(max-width: 1023px)");

  return (
    <ApplicationContext.Provider value={{ mobile }}>
      {children}
    </ApplicationContext.Provider>
  );
};
