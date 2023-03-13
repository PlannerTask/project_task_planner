import styled from "styled-components";

export const ShowTaskHeader = styled.header`
  height: 79px;
  width: 335px;

  background: #c5ff75;
  border-radius: 8px 8px 0px 0px;

  display: flex;
  align-items: center;

  position: relative;

  .closeTaskBtn {
    position: absolute;
    width: 10px;
    height: 10px;
    border: none;
    background-color: #c5ff75;

    display: flex;
    align-items: center;
    justify-content: center;

    top: 14px;
    right: 10px;
  }

  .TaskTitle {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: var(--text-size-medium);
    line-height: 27px;

    margin: 0;
    margin-left: 16px;

    color: #252a34;
  }
  @media (min-width: 769px) {
    width: 375.62px;

    .closeTaskBtn {
      top: 27px;
      right: 15px;

      font-size: 30px;
    }

    .TaskTitle {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: var(--text-size-medium);
      line-height: 27px;

      margin: 0;
      margin-left: 23px;

      color: #252a34;
    }
  }
`;
