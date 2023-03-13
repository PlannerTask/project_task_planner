import styled from 'styled-components';

export const StyledSearch = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 22px;
  input {
    width: 165px;
    height: 18px;

    color:var(--color-white);
    background-color: var(--color-grey-600);
    border-radius: 8px 0 0 8px;
    border: 1px solid var(--color-grey-600);

    padding: 10px;

    outline: none;

    &:hover {
      border: 1px solid var(--color-primary-hover);
    }

    &:focus {
      border: 1px solid var(--color-primary-hover);
    }
  }
  .button-search {
    display: flex;
    background: none;
    border: none;
    padding: 0;
  }
  .icon {
    width: 32px;
    height: 30px;
    padding: 5px;

    background-color:var(--color-primary);
    mix-blend-mode: normal;
    border-radius: 0px 8px 8px 0px;

    &:hover {
      background-color: var(--color-primary-hover);
    }
  }
  @media (min-width:769px) {

    input {
    width: 200px;
    height: 23px;

  }

    .button-search {
      cursor: pointer;
  }

  .icon {
    width: 40px;
    height: 35px;
    padding: 5px;

  }
  }
`;
