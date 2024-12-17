import * as S from "./_style.ts";
import { ApplicationContext } from "../../Context/Contexts.ts";
import { useContext } from "react";
import { MobileFooter } from "./Mobile/MobileFooter.tsx";
import { DesktopFooter } from "./Desktop/DesktopFooter.tsx";

export const Footer = () => {
  const { mobile } = useContext(ApplicationContext);

  return (
    <S.FooterContainer>
      {mobile ? <MobileFooter /> : <DesktopFooter />}
    </S.FooterContainer>
  );
};
