import { createContext } from "react";

interface ApplicationContextType {
  mobile: boolean;
}

export const ApplicationContext = createContext<ApplicationContextType>({
  mobile: false,
});
