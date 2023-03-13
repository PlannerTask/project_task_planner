import styled from "styled-components";

export const StyledCardlist = styled.ul`
    & {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 66px;
        margin-top: 128px;
    }

@media (min-width: 769px){
        & {
            flex-direction: row;
            justify-content: center;
            gap: 20px;
            margin-top: 0px;

        }
    }

    @media (min-width: 890px){
        & {
            gap: 66px
        }
    }

    @media (min-width: 1290px){
        & {        
            gap: 93px;

        }
    }
`