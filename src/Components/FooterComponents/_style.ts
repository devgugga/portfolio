import styled from "styled-components";

export const FooterContainer = styled.footer`
  grid-area: footer;

  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

// Mobile Styles

export const MobileFooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto auto;

  p {
    padding-left: 18px;

    color: ${({ theme }) => theme.colors.text.default};

    align-self: center;
  }

  .icons {
    padding: 12px 15px;

    border-left: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

// Desktop Styles

export const DesktopFooterContent = styled.div`
  display: grid;
  grid-template-columns: auto auto auto 1fr;

  p {
    padding: 0 18px;

    color: ${({ theme }) => theme.colors.text.default};

    align-self: center;
  }

  .icons {
    padding: 12px 15px;

    border-left: 1px solid ${({ theme }) => theme.colors.border};
  }

  .instaIcon {
    border-right: 1px solid ${({ theme }) => theme.colors.border};
  }

  .lastIcon {
    display: flex;
    align-items: center;
    justify-self: right;
    gap: 5px;

    color: ${({ theme }) => theme.colors.text.default};
  }
`;
