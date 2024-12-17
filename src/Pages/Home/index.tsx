import { ApplicationContext } from "../../Context/Contexts.ts";
import { useContext } from "react";
import { MobileInformation } from "../../Components/HomeComponents/Mobile/MobileInformation.tsx";

export const Home = () => {
  const { mobile } = useContext(ApplicationContext);

  return <main>{mobile && <MobileInformation />}</main>;
};
