import * as S from "./_style.ts";
import { MobileNav, MobileNavProps } from "./Mobile/MobileNav.tsx";
import { useContext } from "react";
import { ApplicationContext } from "../../Context/Contexts.ts";
import { DesktopNav } from "./Desktop/DesktopNav.tsx";

export const Header = ({ isOpen, onToggle }: MobileNavProps) => {
  const { mobile } = useContext(ApplicationContext);

  return (
    <S.HeaderContainer>
      {mobile ? (
        <MobileNav isOpen={isOpen} onToggle={onToggle} />
      ) : (
        <DesktopNav />
      )}
    </S.HeaderContainer>
  );
};
