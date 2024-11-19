import Info from "../Info/Info"
import About from "../About/About"
import Interests from "../Interests/Interests"
import Footer from "../Footer/Footer"
import './Card.css'

export default function Card(){
    return(
        <div className="card">
            <Info/>
            <About/>
            <Interests/>
            <Footer/>
        </div>
    )
}