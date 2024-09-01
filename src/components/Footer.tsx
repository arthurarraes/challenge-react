import "../styles/Footer.module.css"
import "../styles/global.module.css"

import logo from "../assets/logo.svg"

export default function Footer(){
    return(<footer>
        <figure>
            <img src={logo} alt=""/>
        </figure>
        <div>
            <p>Challenge FIAP - 2024</p>
            <p>Arthur Arraes</p>
            <p>Iago Victor</p>
            <p>Willian Moreira</p>
        </div>
    </footer>)
    
}