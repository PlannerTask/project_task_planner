import styled from 'styled-components';

export const StyledSearch = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 22px;
  input {
    width: 200px;
    height: 23px;

    color:var(--color-white);
    background: #252a34;
    border-radius: 8px 0 0 8px;
    border: none;

    padding: 10px;
  }
  .button-search {
    display: flex;
    background: none;
    border: none;
    padding: 0;
  }
  .icon {
    width: 40px;
    height: 33px;
    padding: 5px;

    background: #c5ff75;
    mix-blend-mode: normal;
    border-radius: 0px 8px 8px 0px;
  }
  @media (min-width:768px) {
    .button-search {
      cursor: pointer;
  }
  }
`;
