import * as S from "../_style.ts";
import { Link } from "react-router-dom";
import { DesktopNavLinks } from "./DesktopNavLinks.tsx";

export const DesktopNav = () => {
  return (
    <S.DesktopNavContainer>
      <S.DesktopNavTitle>
        <Link to="/">gustavo-gomes</Link>
      </S.DesktopNavTitle>
      <DesktopNavLinks />
    </S.DesktopNavContainer>
  );
};
