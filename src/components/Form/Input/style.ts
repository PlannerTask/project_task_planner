import styled from "styled-components";

export const StyledDivInput = styled.div`
  
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 14.125rem;
  label {
    color: var(--color-white);
    font-family: var(--font-text-default);
    font-size: var(--text-size-small);
    font-weight: 500;
  }
  input {
    height: 2rem;
    padding-left: 1.25rem;
    background-color: var(--color-grey-600);
    border: solid 1px var(--color-grey-800);
    border-radius: var(--radius-default);
    color: var(--color-grey-0);
    font-size: var(--text-size-small);
    font-family: var(--font-text-default);
    outline: none;

    &:hover {
      border: solid 1px var(--color-primary-hover);
    }
    
    &:focus {
        border: solid 1px var(--color-primary-hover);
      }
  }


  input::placeholder {
    color: var(--color-grey-300);
  }
  @media (min-width: 769px) {
    width: fit-content;
    gap: 0.6725rem;

    label{
      font-size: var(--text-size-default);
    }
    input {
      width: 314px;
      height: 2.625rem;
    }
  }
`;
