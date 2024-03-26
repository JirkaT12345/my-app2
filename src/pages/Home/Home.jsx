import { Link } from "react-router-dom"
import CookieClicker from "../CookieClicker/CookieClicker"

export default function Home(){

    return(
        <>
        <h1>Home page</h1>
        <Link to={"/CookieClicker"}>
        <p>Go to cookie clicker</p>
        </Link>
        <Link to={"/Shop"}>
        <p>Go to shop</p>
        </Link>
        </>
    )
}