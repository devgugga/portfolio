import { ApplicationContext } from "../../Context/Contexts.ts";
import { useContext } from "react";
import { MobileInformation } from "../../Components/HomeComponents/Mobile/MobileInformation.tsx";
import * as S from "./_style.ts";
import { DesktopInformation } from "../../Components/HomeComponents/Desktop/DesktopInformation.tsx";

export const Home = () => {
  const { mobile } = useContext(ApplicationContext);

  return (
    <main>
      {mobile ? (
        <MobileInformation />
      ) : (
        <S.MainSection>
          <DesktopInformation />
          <div>Snake</div>
        </S.MainSection>
      )}
    </main>
  );
};
