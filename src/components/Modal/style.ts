import styled from "styled-components";

export const StyledDialog = styled.dialog`
  padding: 0;

  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 230px;

  background: var(--color-grey-800);
  border-radius: 8px;
  border: none;
`;
