import styled from 'styled-components';

export const StyledDesktopMenu = styled.div`
  .container-desktop-menu {
    div {
      display: flex;
      align-items: center;
      gap: 76px;

      a {
        font-size: var(--text-size-small);
        color: var(--color-grey-800);
        
        &:hover {
          text-decoration: underline;
        }

        &:focus {
          text-decoration: underline;
        }
      }
      .logout-button {
        display:flex;
        justify-content:center;

        width: 105px;
        height: 30px;

        border:none;
        border-radius:var(--radius-default);
        background: var(--color-grey-600);

        color:var(--color-white) ;

        cursor: pointer;

        &:hover {
          background-color: var(--color-grey-300);
        }
      }
    }
  }

  @media(min-width: 768px) {

    .container-desktop-menu {

      div {

        a {
            font-size: var(--title-size-2);
            color: var(--color-grey-800);
          }

          .logout-button {
            font-size: var(--title-size-2);
            font-weight: 600;
          }
      }

    }
  }
`;
