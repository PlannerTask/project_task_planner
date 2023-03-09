import styled from "styled-components";

export const StyledHeaderModal = styled.header`
  width: 100%;
  height: 35px;

  background: var(--color-white);
  border-radius: 8px 8px 0px 0px;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Inter";
    font-weight: 600;
    font-size: var(--text-size-default);
    line-height: var(--title-size-2);

    color: var(--color-grey-600);
  }

  button {
    background-color: var(--color-white);
    position: absolute;

    top: 10px;
    right: 10px;

    border: none;
  }
`;
