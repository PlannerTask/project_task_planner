import styled from "styled-components";

export const StyledLi = styled.li`
  width: 205px;
  height: 33px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--color-grey-600);
  border-radius: 8px;

  &:hover {
    background: var(--color-grey-300);
  }

  .taskName {
    margin-left: 15px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: var(--title-size-2);
    line-height: 22px;

    color: var(--color-white);
  }

  .btnContainer {
    display: flex;
    align-items: center;
    gap: 13px;
    margin-right: 10px;
  }

  .delete {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--color-negative);
    border-radius: 4px;
    border: none;
  }

  .patch {
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;

    border-radius: 8px;
    border: none;
  }

  @media (min-width: 769px) {
    width: 333px;
    height: 42px;
    .taskName {
      margin-left: 25px;
    }

    .btnContainer {
      gap: 15px;
      margin-right: 12px;
    }

    .delete {
      width: 22.74px;
      height: 14px;
    }

    .patch {
      width: 17.87px;
      height: 16px;

      border-radius: 100px;
    }
  }
`;
