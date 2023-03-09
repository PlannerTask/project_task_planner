import styled from 'styled-components';

export const StyledDropMenu = styled.div`
  .close-button {
    width: 33px;
    height: 33px;
  }
  .container-drop-menu {
    position: absolute;
    top: 56px;
    right: 0px;

    width: 113px;
    height: 117px;

    border-bottom-left-radius: var(--radius-default);
    background: var(--color-white);

    display: flex;
    flex-direction: column;

    div {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      a {
        cursor: default;
        font-size: var(--text-size-small);
        color: var(--color-grey-800);
      }
      .logout-button {
        color: var(--color-grey-800);
      }
    }
  }
  
`;
