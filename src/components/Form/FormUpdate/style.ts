import styled from 'styled-components';

export const StyledDivForm = styled.div`
 width: fit-content;
  height: 400px;
  form {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 1.5rem;
  }
  .button-update {
      margin-top:3rem;
      height: 2rem;
      width: 227px;

      font-weight:500;
      font-size:var(--text-size-small);

      background: var(--color-primary);
      border: none;
      border-radius: var(--radius-default);

      &:hover {
        background-color: var(--color-primary-hover);
      }
    
  }
  @media (min-width: 768px) {
    .button-update{
      width:100%;
      height: 42px;
    }
  
    
  }
`;
