import { Card } from "./Card"
import { StyledCardlist } from "./CardsHome"
import imagefirst from "../../assets/image/trophy.png"
import imagesecond from "../../assets/image/map.png"
import imagethird from "../../assets/image/smile.png"

export const CardListHome = () => {
    return (
        <StyledCardlist>
            <Card  img={imagefirst} children='Over 2.000 active users'/>
            <Card  img={imagesecond} children='+ 50 countries'/>
            <Card  img={imagethird} children='100% satisfation guaranteed'/>
        </StyledCardlist>
    )
}