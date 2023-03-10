import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin: 69px 0px 14px 0px;
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
    border-radius: 100px;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 500;
  }

  @media(min-width: 768px){
    h2 {
      margin: 69px 0px 69px 0px;
      font-size: var(--text-size-large);
    }

    h3 {
      font-size: var(--text-size-medium);
    }

    .create {
      width: 20px;
      height: 20px;
    }
  }
`;

export const DeleteModal = styled.main`
  width: 260px;
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .deleteContainer {
    display: flex;
    flex-direction: column;
  }

  .deleteTitle {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: var(--title-size-3);
    line-height: 17px;

    color: #ffffff;
  }

  .deleteInput {
    margin-top: 8px;

    width: 185px;
    height: 33px;

    background: var(--color-grey-600);
    border-radius: 8px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: var(--title-size-3);
    line-height: 17px;

    color: #e3e3e3;
    padding-left: 20px;
    border: none;
  }

  .deleteInput::placeholder {
    color: #e3e3e3;
  }

  .deleteBtn {
    margin: 19px 20px 17px 0;

    width: 90px;
    height: 33px;

    background-color: var(--color-negative);
    border-radius: 8px;
    border: none;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: var(--title-size-3);
    line-height: 17px;

    color: #ffffff;
  }

  .cancelBtn {
    width: 90px;
    height: 33px;

    background: #252a34;
    border-radius: 8px;
    border: none;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: var(--title-size-3);
    line-height: 17px;

    color: #ffffff;
  }
`;
