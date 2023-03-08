import styled from 'styled-components';

export const StyledDivInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 12.8125rem;

  label {
    color: var(--color-white);
    font-family: var(--font-text-default);
    font-size: var(--text-size-small);
    font-weight: 500;
  }

  input {
    width: 100%;
    height: 2rem;
    padding-left: 1.25rem;

    background-color: var(--color-grey-600);

    border: none;
    border-radius: var(--radius-default);

    color: var(--color-grey-0);

    font-size: var(--text-size-small);
    font-family: var(--font-text-default);
  }
  input::placeholder {
    color: var(--color-grey-300);
  }
`;
