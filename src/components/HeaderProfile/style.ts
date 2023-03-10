import styled from 'styled-components';

export const StyledHeaderProfile = styled.header`
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 20px;

  & h1 {
    font-size: var(--title-size-2);
    font-weight: 700;
    }

  background: var(--color-white);
  .container-desktop-menu{
    display:none;
  }
  nav {
    div {
      button {
        display:flex;
        align-items:center;
        border:none;
        background:none;
      }
    }
  }
  @media (min-width:768px) {
    height: 70px;

    & h1 {
      font-size: 22px;
    }
    
    .container-menu-mobile{
      display:none;
    }
    .container-desktop-menu{
      display:flex;
    }
  }
`;
