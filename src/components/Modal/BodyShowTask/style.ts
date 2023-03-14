import styled from "styled-components";

export const MainShowTask = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 254px;
  width: 335px;

  border-radius: 8px;

  .taskTitleDescription {
    margin: 11px 0 25px 24px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: var(--text-size-default);
    line-height: 19px;

    color: #ffffff;
  }

  .taskDescription {
    margin: 0 24px 11px 24px;

    word-wrap: break-word;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: var(--text-size-small);
    line-height: 17px;

    color: #ffffff;
  }
`;
