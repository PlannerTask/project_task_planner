import styled from "styled-components";

export const StyledFormLogin = styled.div`
width:100%;
display:flex;
justify-content:center;
form{
    width:226px;
    display:flex;
    flex-direction:column;
    padding-bottom:16px;  
    gap:20px;
    button{
        height:33px;
        width:100%;
        border-radius:8px;
        border:none;
        font-family:var(--font-text-default);
        font-size:var(--title-size-3);
        font-weight:500;
        color:var(--color-grey-800);
        background-color:var(--color-primary);
        
    }
    button:hover{
        background-color:var(--color-primary-hover);
    }
}
@media (min-width: 769px){
    form{
        width:400px;
        align-items:center;
        gap:25px;
        button{
            width:333px;
        }
        
    }
}
`