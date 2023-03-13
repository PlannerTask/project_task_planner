import styled from 'styled-components';

export const StyledHeaderProfile = styled.header`
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 20px;

  font-family: var(--font-text-default);

  background: var(--color-white);
  .container-desktop-menu {
    display: none;
  }

  nav {
    div {
      button {
        display: flex;
        align-items: center;
        border: none;
        background: none;
      }
    }
  }
  @media (min-width: 768px) {
    .container-menu-mobile {
      display: none;
    }
    .container-desktop-menu {
      display: flex;
    }
  }
`;
