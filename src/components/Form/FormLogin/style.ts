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
    p {
    display:inline;
    max-width: 200px;
    font-family: "Inter";
    font-weight: 500;
    font-size: var(--title-size-3);
    line-height: var(--text-size-default);

    color: rgb(300, 1, 1);
  }
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
            height: 42px;
            font-size:var(--text-size-default);
        }
        
    }
}
`