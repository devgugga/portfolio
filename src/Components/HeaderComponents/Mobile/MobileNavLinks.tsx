import { MobileLink } from "./MobileLink.tsx";
import * as S from "../_style.ts";
import { Footer } from "../../FooterComponents/Footer.tsx";

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
  {
    linkTo: "/contact-me",
    label: "_contact-me",
  },
];

export const MobileNavLinks = () => {
  return (
    <S.MobileNavLinksContainer>
      <S.MobileLinksContainer>
        {links.map((link) => (
          <MobileLink
            key={link.label}
            linkTo={link.linkTo}
            label={link.label}
          />
        ))}
      </S.MobileLinksContainer>
      <Footer />
    </S.MobileNavLinksContainer>
  );
};
