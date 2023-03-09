import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100vw;
  height: 58px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 0px;

  background: var(--color-grey-600);

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;

  @media (width: 426px) {
    height: 86px;
  }
`;
