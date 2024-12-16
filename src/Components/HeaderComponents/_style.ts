import styled from "styled-components";

export const HeaderContainer = styled.header`
  grid-area: header;
`;

// Mobile Nav Section

export const MobileNavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 17px 18px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  color: ${({ theme }) => theme.colors.text.default};
`;

export const BurgerButton = styled.button<{ $isOpen: boolean }>`
  background-color: transparent;

  border-radius: 0.2rem;
  border: 1px solid transparent;

  height: 40px;
  width: 40px;

  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.3s ease;

  cursor: pointer;

  position: relative;

  &:after,
  &:before {
    content: "";

    position: absolute;

    width: 1.4rem;
    height: 2px;

    border-radius: 2px;

    background-color: ${({ theme }) => theme.colors.text.default};

    transition: 0.3s ease;
  }

  &:before {
    transform: ${({ $isOpen }) =>
      $isOpen ? "rotate(45deg)" : "translateY(-6px)"};
  }

  &:after {
    transform: ${({ $isOpen }) =>
      $isOpen ? "rotate(-45deg)" : "translateY(6px)"};
  }

  span {
    display: block;
    width: 1.4rem;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.text.default};
    transition: 0.3s ease;
    opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
  }
`;

export const MobileNavLinksContainer = styled.div`
  display: grid;
  grid-template-areas: "links" "footer";
  grid-template-rows: 1fr auto;
`;

export const MobileLinksContainer = styled.div`
  grid-area: links;

  display: flex;
  flex-direction: column;

  a {
    padding: 17px 18px;

    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

// Nav Section

export const DesktopNavContainer = styled.nav`
  padding: 0 22px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  display: grid;
  grid-template-columns: auto 1fr;
`;

export const DesktopNavTitle = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.border};

  display: flex;
  align-items: center;

  padding-right: 100px;

  a {
    color: ${({ theme }) => theme.colors.text.default};
  }
`;

export const DesktopNavLinksContainer = styled.div`
  display: grid;
  grid-template-areas: "main contact";
  grid-template-columns: 1fr auto;
  align-items: center;

  .links {
    grid-area: main;

    display: flex;
  }
`;

export const DesktopLink = styled.div<{
  $isLastChild: boolean;
  $isActive: boolean;
}>`
  grid-area: contact;

  padding: 17px 32px;

  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.text.light : theme.colors.text.default};

  border-right: 1px solid
    ${({ theme, $isLastChild }) =>
      $isLastChild ? "transparent" : theme.colors.border};
  border-left: 1px solid
    ${({ theme, $isLastChild }) =>
      !$isLastChild ? "transparent" : theme.colors.border};
  border-bottom: 2px solid
    ${({ theme, $isActive }) =>
      $isActive ? theme.colors.highlights.warning : "transparent"};

  &:hover {
    color: ${({ theme }) => theme.colors.text.light};
  }
`;
