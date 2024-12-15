import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-areas: "header" "content" "footer";
  grid-template-rows: auto 1fr auto;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
`;
