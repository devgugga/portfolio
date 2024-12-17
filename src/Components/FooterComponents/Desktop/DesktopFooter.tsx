import * as S from "../_style.ts";
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
} from "@remixicon/react";
import { theme } from "../../../Styles/theme.ts";

export const DesktopFooter = () => {
  return (
    <S.DesktopFooterContent>
      <p>Find me in:</p>
      <a
        href="https://www.linkedin.com/in/gusgomes-dev/"
        target="_blank"
        className="icons"
      >
        <RiLinkedinFill size={24} color={theme.colors.text.default} />
      </a>
      <a
        href="https://www.instagram.com/devguga/"
        target="_blank"
        className="icons instaIcon"
      >
        <RiInstagramFill size={24} color={theme.colors.text.default} />
      </a>
      <a
        href="https://github.com/devgugga"
        target="_blank"
        className="icons lastIcon"
      >
        @devgugga <RiGithubFill size={24} color={theme.colors.text.default} />
      </a>
    </S.DesktopFooterContent>
  );
};
