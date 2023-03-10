import styled from "styled-components";

export const StyledFormModal = styled.form`
  background: var(--color-grey-800);
  border-radius: 8px;

  margin: 20px;
  display: flex;
  flex-direction: column;

  p {
    max-width: 200px;
    margin: 5px 0 5px 10px;
    font-family: "Inter";
    font-weight: 500;
    font-size: var(--title-size-3);
    line-height: var(--text-size-default);

    color: rgb(300, 1, 1);
  }

  label {
    margin-top: 20px;
    font-family: "Inter";
    font-weight: 500;
    font-size: var(--title-size-3);
    line-height: var(--text-size-default);

    color: var(--color-white);
  }

  textarea {
    margin-top: 0.5rem;
    width: 205px;
    height: 92px;

    background: #252a34;
    border-radius: 8px;
    border: none;
    padding-left: 20px;
    padding-top: 9px;

    font-family: "Inter";
    font-weight: 500;
    font-size: var(--title-size-3);
    line-height: var(--title-size-2);

    color: var(--color-grey-300);
  }

  textarea::placeholder {
    color: var(--color-grey-300);
  }

  .btnArea {
    margin-top: 22px;
    display: flex;
    gap: 25px;
    align-items: center;
    justify-content: center;
  }

  .green {
    width: 100px;
    height: 43px;

    background: var(--color-primary);
    border-radius: 8px;
    border: none;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: var(--title-size-3);
    line-height: var(--text-size-default);

    color: var(--color-grey-800);
  }

  .cancel {
    width: 100px;
    height: 43px;

    background: var(--color-grey-600);
    border-radius: 8px;
    border: none;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: var(--title-size-3);
    line-height: var(--text-size-default);

    color: var(--color-white);
  }

  @media (min-width: 769px) {
    p {
      max-width: 300px;
    }

    textarea {
      width: 314px;
    }

    .green {
      width: 150px;
      height: 43px;
    }

    .cancel {
      width: 150px;
      height: 43px;
    }
  }
`;
