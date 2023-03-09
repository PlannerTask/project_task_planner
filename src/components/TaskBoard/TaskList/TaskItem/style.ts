import styled from "styled-components";

export const StyledLi = styled.li`
  width: 205px;
  height: 33px;

  background: var(--color-grey-600);
  border-radius: 8px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: var(--title-size-2);
  line-height: 22px;

  color: var(--color-white);

  @media (min-width: 426px) {
    width: 333px;
    height: 42px;
  }
`;
