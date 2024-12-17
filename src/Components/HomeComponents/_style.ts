// Mobile Styles

import styled from "styled-components";

export const MobileInformationContainer = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;

  height: 100%;

  padding: 85px 27px;

  @media (max-width: 320px) {
    padding: 15px;
  }
`;

export const MobileInformationContent = styled.div`
  align-self: center;
  justify-self: center;

  position: relative;

  p {
    font-weight: 200;
    font-size: 1.125rem;
  }

  h1 {
    font-size: 3.875rem;
    font-weight: 400;

    padding-top: 10px;
    padding-bottom: 5px;
  }

  span {
    color: ${({ theme }) => theme.colors.highlights.success};
    font-weight: 500;
    font-size: 1.25rem;
  }

  &::before,
  &::after {
    content: "";

    position: absolute;

    border-radius: 50%;

    filter: blur(100px);

    width: 13rem;
    height: 13rem;

    @media (max-width: 320px) {
      width: 8rem;
      height: 8rem;
    }
  }

  &::before {
    background: ${({ theme }) => theme.colors.gradient.end};
    top: -30%;
    left: 30%;
    transform: translateX(-50%);
    z-index: 1;

    opacity: 0.7;
  }

  &::after {
    background-color: ${({ theme }) => theme.colors.gradient.start};

    top: 40%;
    left: 75%;

    transform: translateX(-50%);

    z-index: 1;

    opacity: 0.8;
  }
`;

export const MobileGithubLink = styled.div`
  align-self: end;
  justify-self: center;

  > span {
    font-size: 0.875rem;

    color: ${({ theme }) => theme.colors.text.default};
  }

  p {
    margin-top: 16px;

    font-size: 0.875rem;

    .const {
      color: ${({ theme }) => theme.colors.text.link};
    }

    .varName {
      color: ${({ theme }) => theme.colors.text.highlight};
    }

    .quote {
      color: ${({ theme }) => theme.colors.highlights.error};
    }

    > a {
      color: ${({ theme }) => theme.colors.highlights.error};
      text-decoration: underline;
      text-decoration-color: ${({ theme }) => theme.colors.highlights.error};
    }
  }
`;
