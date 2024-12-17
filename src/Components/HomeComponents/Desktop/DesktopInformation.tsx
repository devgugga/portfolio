import * as S from "../_style.ts";

export const DesktopInformation = () => {
  return (
    <S.DesktopInformationContainer>
      <S.DesktopInformationContent>
        <p>Hi all. I am</p>
        <h1>Gustavo Gomes</h1>
        <span> {">"} Front-end Developer </span>
      </S.DesktopInformationContent>
      <S.DesktopGithubLink>
        <div className="comments">
          <span>// complete the game to continue</span>
          <span>// you can also see it on my Github page</span>
        </div>
        <p>
          <span className="const">const </span>
          <span className="varName">githubLink </span>=
          <span className="quote"> “</span>
          <a href="https://github.com/devgugga" target="_blank">
            https://github.com/devgugga/
          </a>
          <span className="quote">”</span>
        </p>
      </S.DesktopGithubLink>
    </S.DesktopInformationContainer>
  );
};
