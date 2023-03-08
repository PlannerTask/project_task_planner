import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root{
    --color-primary:#C5FF75;
    --color-primary-hover:#C5FF55;
    
    --color-secondary:#E20000;

    --color-white-:#FFFFFF;

    --color-grey-0:#F5F5F5;
    --color-grey-300:#4E5056;
    --color-grey-600:#252A34;
    --color-grey-800:#181A20;

    --color-success:#168821;
    --color-negative:#E60000;
    --color-warning:#FFCD07;
    --color-information:#155BCB;
    
    --font-text-default:'Inter', sans-serif;
    --title-size-1:2rem;
    --title-size-2:1.125rem;
    --title-size-3:0.875rem;
    
    --text-size-default:1rem;
    --text-size-small:0.875rem;
  }
`