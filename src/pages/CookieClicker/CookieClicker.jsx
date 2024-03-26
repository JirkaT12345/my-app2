import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

export default function CookieClicker(){
// [nazev_promenne, setter] = useState(hodnota pro cookies)
    const [cookies, setCookies] = useState(0);
// setter - funkce ktera prenastavuje pormennou - v nasem pripade
//          se setter jmenuje setCookies a prenastavuje promennou cookies

const handleClick = () => {
    setCookies(cookies +1);
}

useEffect(()=>{
document.title = "cookie clicker loaded"
},[])//pokud nechame [] prazdne - funguje jako window.onload

useEffect(()=>{
    document.title = cookies
    },[cookies])//pokud se promenna cookies zmeni, do document.title se vypise pocet susenek

    return(
        <>
        <h1>CookieClicker</h1>
        <p>Cookies: {cookies}</p>
        <button onClick={handleClick}>Cvak</button>
        <Link to={"/"}>
        <p>Go Home</p>
        </Link>
        </>
    )
}