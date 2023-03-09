import styled from "styled-components";

export const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 22px;
  input {
    width: 200px;
    height: 23px;

    background: #252a34;
    border-radius: 8px 0 0 8px;
    border: none;

    padding: 10px;
  }

  .icon {
    width: 40px;
    height: 30px;
    padding: 5px;

    background: #c5ff75;
    mix-blend-mode: normal;
    border-radius: 0px 8px 8px 0px;
  }
`;
