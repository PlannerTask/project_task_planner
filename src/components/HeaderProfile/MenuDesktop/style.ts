import styled from 'styled-components';

export const StyledDesktopMenu = styled.div`
  .container-desktop-menu {
    div {
      display: flex;
      align-items: center;
      gap: 76px;

      a {
        font-size: var(--text-size-default);
        color: var(--color-grey-800);
      }
      .logout-button {
        display: flex;
        justify-content: center;

        width: 105px;
        height: 30px;

        border: none;
        font-size: var(--text-size-default);
        border-radius: var(--radius-default);
        background: var(--color-grey-800);

        color: var(--color-white);

        cursor: pointer;
      }
    }
  }
`;
