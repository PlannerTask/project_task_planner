import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-top: 69px;
    font-family: "Inter";
    font-weight: 600;
    font-size: var(--title-size-2);
    line-height: 22px;

    color: var(--color-white);
  }

  .taskBoardTitle {
    margin-top: 21px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 108px;
  }

  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: var(--title-size-3);
    line-height: 17px;

    color: var(--color-white);
  }

  .create {
    width: 11px;
    height: 11px;

    background: #c5ff75;
    border-radius: 8px;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 500;
  }
`;
