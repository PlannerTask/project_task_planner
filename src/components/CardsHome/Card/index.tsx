import { StyledCard } from "./card"

interface ICard {
    img: string;
    children: string;
}
export const Card = ({img, children}:ICard) => {
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