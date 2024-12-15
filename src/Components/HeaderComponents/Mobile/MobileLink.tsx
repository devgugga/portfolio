import { Link } from "react-router-dom";

interface MobileNavLinkProps {
  linkTo: string;
  label: string;
}

export const MobileLink = ({ linkTo, label }: MobileNavLinkProps) => {
  return <Link to={linkTo}>{label}</Link>;
};
