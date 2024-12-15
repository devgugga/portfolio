import * as S from "../_style.ts";
import { Link } from "react-router-dom";

export type MobileNavProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export const MobileNav = ({ isOpen, onToggle }: MobileNavProps) => {
  return (
    <S.MobileNavContainer>
      <Link to="/">gustavo-gomes</Link>
      <S.BurgerButton onClick={onToggle} $isOpen={isOpen}>
        <span></span>
      </S.BurgerButton>
    </S.MobileNavContainer>
  );
};
