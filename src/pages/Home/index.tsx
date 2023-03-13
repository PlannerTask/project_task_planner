import { Link } from "react-router-dom"
import { CardListHome } from "../../components/CardsHome"
import Footer from "../../components/Footer"
import { HeaderHome } from "../../components/HeaderHome"
import { StyledHomePage } from "./home"

export const HomePage = () => {
    return (
        <>
            <HeaderHome/>
            <StyledHomePage>
                <div>
                    
                <section className="Container-home-title-btn-register">
                    <div>

                        <div>
                            <h2>Organize, plan and save time.</h2>

                            <div>
                                <h6>Manage your tasks without limits</h6>
                            </div>
                        </div>

                        <Link to='/register'>Get started for free</Link>
                    </div>
                </section>
                <section className="Container-home-cards-marketing">
                    <div>

                        <div className="container-title-home-cards">
                            <h2>Our history speaks for itself</h2>

                            <div>
                                <h6>Since 2023</h6>
                            </div>
                        </div>
                        
                        <CardListHome/>
                        
                    </div>
                </section>
                </div>
            </StyledHomePage>
            <Footer/>
        </>
    )
}