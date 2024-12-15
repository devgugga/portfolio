import * as S from "../_style.ts";
import { Link } from "react-router-dom";

type DesktopLinkProps = {
  linkTo: string;
  label: string;
  isLastChild?: boolean;
  isActive: boolean;
  onClick: () => void;
};

export const DesktopLink = ({
  linkTo,
  label,
  isLastChild,
  isActive,
  onClick,
}: DesktopLinkProps) => {
  return (
    <S.DesktopLink $isActive={isActive} $isLastChild={isLastChild ?? false}>
      <Link onClick={onClick} to={linkTo}>
        {label}
      </Link>
    </S.DesktopLink>
  );
};
