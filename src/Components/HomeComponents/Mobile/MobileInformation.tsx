import * as S from "../_style.ts";

export const MobileInformation = () => {
  return (
    <S.MobileInformationContainer>
      <S.MobileInformationContent>
        <p>Hi all. I am</p>
        <h1>Gustavo Gomes</h1>
        <span> {">"} Front-end Developer </span>
      </S.MobileInformationContent>
      <S.MobileGithubLink>
        <span>// find my profile on Github:</span>
        <p>
          <span className="const">const</span>{" "}
          <span className="varName">githubLink</span> ={" "}
          <span className="quote">“</span>
          <a href="https://github.com/devgugga" target="_blank">
            https://github.com/devgugga/
          </a>
          <span className="quote">”</span>
        </p>
      </S.MobileGithubLink>
    </S.MobileInformationContainer>
  );
};
