import styled from "styled-components";

export const StyledHeaderRegister = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    .container-btn-back {
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
        width: 320px;

        & a {
            font-size: var(--text-size-small);
            font-weight: 500;
            color: var(--color-white);
            background-color: var(--color-grey-600);
            border-radius: 8px;
            text-decoration: none;
            padding: 8px 20px;
            margin: 18px 22px 0px 0px;
            cursor: pointer;
        }

        & a:hover {
            background-color: var(--color-grey-300);
        }
    }

    

    & h1 {
        font-size: var(--title-size-2);
        font-weight: 700;
        color: var(--color-white);
    }

    & h6 {
        font-size: var(--title-size-3);
        font-weight: 600;
        color: var(--color-grey-300);
    };

    @media (min-width: 768px) {
        & {
            gap: 34px;
        }

        .container-btn-back {
            width: 400px;

            & a {
                font-size: var(--text-size-default);
                padding: 12px 22px;
            }
        }


        & h1 {
        font-size: var(--title-size-1);
        
        }

         & h6 {
        font-size: var(--text-size-default);
        
        };
  }
`