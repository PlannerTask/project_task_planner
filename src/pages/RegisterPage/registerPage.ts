import styled from "styled-components";

export const StyledContainerRegister = styled.main`
    & {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container-form-register {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    };

    .container-section-words {
        display: none;
    }

@media (min-width: 769px){

    & {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
.container-form-register {
    width: 405px;
    height: 796px;
    border: 1px solid var(--color-white);
    border-radius: 8px;
};

.container-section-words {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 34px;
    width: 297px;
}

.title-word-first {
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    color: var(--color-white);
}

.title-word-second {
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    color: var(--color-primary);
}

.title-word-third {
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    color: var(--color-grey-300);
}
}
`
