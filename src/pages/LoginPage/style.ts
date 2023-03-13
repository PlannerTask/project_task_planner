import styled from "styled-components";

export const StyledLoginPage = styled.div`
display:flex;
flex-direction:column;
align-items:center;
    .form__container{
        display:block;
    }

    .bottom__container{
        display:flex;
        flex-direction:column;
        width:226px;
        align-items:center;
        justify-content:center;
        gap:20px;
        
        font-family:var(--font-text-default);
            p{
                color:var( --color-grey-300);
                font-weight:600;
                font-size:var( --title-size-3);
            }a{
                width:100%;
                height:33px;
                color:var(--color-grey-800);
                border-radius:var( --radius-default);
                border:none;
                font-family:var(--font-text-default);
                font-size:var(--title-size-3);
                font-weight:500;
                background-color:var( --color-white);
                text-decoration: none;
                display: flex;
                align-items: center;
                justify-content: center;
                
            }a:hover{
                background-color:var(--color-grey-300);
                color:var(--color-grey-0);
            }

    }
    @media (min-width: 769px){
        flex-direction:row;
        justify-content:space-around;
        align-items:center;
        gap:50px;
        height:100vh;
        .form__container {
            display:flex;
            flex-direction:column;
            border:1px solid var(--color-white);
            border-radius:var(--radius-default);
            width:405px;
            height:666px;
            margin-top:20px;
            padding:20px;
            gap:40px;
        }
        .bottom__container {
            width:100%;
            gap:31px;
                a{
                    width:333px;
                    height: 42px;
                    font-size:var(--text-size-default);
                }
        }
    }
`
export const StyledAsideLogin = styled.div`
display:none;

@media (min-width: 769px) {
    display:block;
    height:100vh;
    width: 297px;
    font-family:var(--font-text-default);
        .aside__container{
            display:flex;
            flex-direction:column;
            justify-content:center;
            gap:100px;
            height:100%;
                h2{
                font-size:1.75rem;
                color:var(--color-white);
                font-weight:600;
                }
                h3{
                    font-size:1.75rem;
                    font-weight:600;
                    color:var(--color-primary);
                }
                .lower__aside{
                    display:flex;
                    flex-direction:column;
                    gap:8px;
                    font-size:1.75rem;
                    font-weight:600;
                    color:#4A4B52;
                
                }
        }
  

    
}
`