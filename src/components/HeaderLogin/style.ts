import styled from "styled-components";

export const StyledHeaderLogin = styled.header`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
gap:16px;
font-family:var(--font-text-default);
height:30vh;
h1{
    font-size:var( --title-size-1);
    color:#fff;
    font-weight:bold;
    line-height:1.375rem;
}
p{
    font-size:var(--title-size-3);
    color:#4A4B52;
    line-height:1.063rem;
    font-weight:600;
}
@media (min-width: 769px){
    justify-content:flex-start;
    padding:25px;
    height:20%;
}
`