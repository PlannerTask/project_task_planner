import styled from "styled-components";

export const StyledCard = styled.li`
    
    & {
        min-width: 162px;
        width: 162px;
        height: 150px;
        border-radius: 8px;
        background-color: var(--color-white);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 16px;
    }

    .container-img-card {
        width: 83px;
        height: 83px;

    }

    .container-text-card {

        & p {

            font-weight: 600;
            font-size: 12px;
            line-height: 25px;
            text-align: center;
            color: var(--color-grey-800);
        }
    }

    @media (min-width: 890px){
        & {
            width: 182px;
            height: 170px;
            gap: 21px;
        }
    }
`