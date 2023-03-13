import styled from "styled-components";

export const StyledHomePage = styled.main`

@media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    align-items: center;
}

    .Container-home-title-btn-register {

        margin-top: 76px;
         div {

            display: flex;
            flex-direction: column;
            gap: 41px;
            align-items: center;

            & div {
                width: 228px;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 21px;
    
                & h2 {
                    color: var(--color-white);
                    font-weight: 700;
                    font-size: var(--title-size-1);
                    line-height: 39px;
                }
    
                & div {
                    width: 150px;
    
                    & h6 {
                        color: var(--color-grey-300);
                        font-weight: 500;
                        font-size: var(--text-size-default);
                        line-height: 19px;
                    }
                }
            }
        }


        & a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 205px;
            height: 33px;
            color: var(--color-grey-800);
            background: var(--color-primary);
            border-radius: 8px;
            font-weight: 500;
            font-size: var(--text-size-small);
            text-decoration: none;
            padding: 5px 8px;

            &:hover {
                background: var(--color-primary-hover);
            }

            @media (min-width: 769px) {

                & {
                    width: 208px;
                    height: 42px;
                    font-size: 16px;
                    padding: 8px 15px;
                }
            }
        }

        
        @media (min-width: 769px) {

            & {
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-top: 70px;

                & div {

                    width: 700px;
                    display: flex;
                    flex-direction: row;
                    gap: 41px;
                    align-items: center;
                    justify-content: space-between;

                    & div {
                    
                        gap: 25px;
            
                        & h2 {
                            color: var(--color-white);
                            font-weight: 700;
                            font-size: var(--title-size-1);
                            line-height: 39px;
                        }
            
                        & div {
                            width: 150px;
            
                            & h6 {
                                color: var(--color-grey-300);
                                font-weight: 500;
                                font-size: var(--text-size-default);
                                line-height: 19px;
                            }
                        }
                    }
                }

            }

        }
    }

    .Container-home-cards-marketing {

        @media (min-width: 769px) {

            & {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-evenly;
                margin-top: 200px;

                & div {

                    display: flex;
                    flex-direction: row;
                    gap: 41px;
                    align-items: center;
                    justify-content: space-between;

                    & div {
                        width: 100%;
                        max-width: 340px;
                        flex-direction: column;
                        gap: 25px;

                        & h2 {
                            color: var(--color-white);
                            font-weight: 700;
                            font-size: var(--title-size-1);
                            line-height: 39px;
                        }
            
                        & div {
                            width: 150px;
            
                            & h6 {
                                color: var(--color-grey-300);
                                font-weight: 500;
                                font-size: var(--text-size-default);
                                line-height: 19px;
                            }
                        }
                    }
                }

            }
            
        }

    }

    .container-title-home-cards {
        display: none;
    }
`