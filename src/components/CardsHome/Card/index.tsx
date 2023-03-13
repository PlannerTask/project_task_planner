import { StyledCard } from "./card"

export const Card = ({img, children}:any) => {
    return (
        <>
        <StyledCard>
            <div className="container-img-card">
                <img src={img} alt="imagem do card" />
            </div>
            <div className="container-text-card">
                <p>
                    {children}
                </p>
            </div>
        </StyledCard>
        </>
    )
}