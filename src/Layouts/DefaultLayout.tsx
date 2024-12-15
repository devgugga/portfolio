import { Outlet } from "react-router-dom";
import * as S from "./_style.ts";
import { Header } from "../Components/HeaderComponents/Header.tsx";
import { Footer } from "../Components/FooterComponents/Footer.tsx";
import { useContext, useState } from "react";
import { ApplicationContext } from "../Context/Contexts.ts";
import { MobileNavLinks } from "../Components/HeaderComponents/Mobile/MobileNavLinks.tsx";

export const DefaultLayout = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const { mobile } = useContext(ApplicationContext);

  return (
    <S.LayoutContainer>
      <Header isOpen={isNavOpen} onToggle={() => setIsNavOpen(!isNavOpen)} />
      {mobile && isNavOpen ? (
        <MobileNavLinks />
      ) : (
        <>
          <Outlet /> {!mobile && <Footer />}
        </>
      )}
    </S.LayoutContainer>
  );
};
