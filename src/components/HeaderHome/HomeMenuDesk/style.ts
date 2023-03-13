import styled from 'styled-components';

export const StyledHomeMenuDesk = styled.div`
  .container-desktop-menu-home {
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

      .btn-sign-up-home {

        &:hover {
            background-color: var(--color-primary-hover);
            text-decoration: none;
        }

        &:focus {
            text-decoration: none;
        }
      }
    }
  }

  @media(min-width: 768px) {

    .container-desktop-menu-home {

      div {

        a {
            font-size: var(--title-size-2);
            color: var(--color-grey-800);
            font-weight: 600;
          }

          .btn-sign-up-home {
            border-radius: 8px;
            background-color: var(--color-primary);
            padding: 8px 25px;
            font-weight: 500;
          }
      }
    }
  }
`;
