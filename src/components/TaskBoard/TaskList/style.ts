import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 22px;

  margin-top: 17px;

  height: 340px;
  width: 212px;
  overflow-y: auto;

  ::-webkit-scrollbar {
  width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #5E636D;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-grey-600);
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-grey-300);
  }

  @media (min-width: 769px) {
    height: 400px;
    width: 340px;
  }
`;
