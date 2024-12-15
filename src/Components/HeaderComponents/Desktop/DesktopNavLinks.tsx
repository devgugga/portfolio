import * as S from "../_style.ts";
import { DesktopLink } from "./DesktopLink.tsx";
import { useState } from "react";

const links = [
  {
    linkTo: "/",
    label: "_hello",
  },
  {
    linkTo: "/about-me",
    label: "_about-me",
  },
  {
    linkTo: "/projects",
    label: "_projects",
  },
];

export const DesktopNavLinks = () => {
  const [activeLink, setActiveLink] = useState("/");

  return (
    <S.DesktopNavLinksContainer>
      <div className="links">
        {links.map((link) => (
          <DesktopLink
            isActive={activeLink === link.linkTo}
            onClick={() => setActiveLink(link.linkTo)}
            key={link.label}
            linkTo={link.linkTo}
            label={link.label}
          />
        ))}
      </div>
      <DesktopLink
        isActive={activeLink === "/contact-me"}
        onClick={() => setActiveLink("/contact-me")}
        isLastChild={true}
        linkTo="/contact-me"
        label="_contact-me"
      />
    </S.DesktopNavLinksContainer>
  );
};
