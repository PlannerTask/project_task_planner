import styled from 'styled-components';

export const StyledMain = styled.main`
  .container-profile-update {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 40px;

    font-family: var(--font-text-default);
    .container-info-profile {
      color: var(--color-white);
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 90px;
        height: 90px;
        background:var(--color-white);
        border-radius:45px;
      }
      h1 {
        font-size: var(--title-size-2);
        font-weight: 700;
      }
    }

    .container-user {
      div {
        display: flex;
        align-items: center;
        gap: 21px;
        padding: 27px 0 14px;
      }
    }
  }
  @media (min-width: 768px) {
  }
`;
