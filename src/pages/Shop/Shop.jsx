import { Link } from "react-router-dom"
import { useState } from "react"
import "./Shop.css"


export default function Shop(){
const [workforce, setWorkforce] = useState();

const submit = (e) => {
    e.preventDefault();

}

    return(
        <>
        <h1>Shop</h1>
        <form>
        <select name="worker">
            <option value="Tomáš">Tomáš</option>
            <option value="Emin">Emin</option>
            <option value="Ondra">Ondra</option>
        </select>
        <button onClick={submit} className="shop-order-button">ORDER</button>
        </form>
        <p>{workforce}</p>
        <Link to={"/"}>
        <p>Go Home</p>
        </Link>
        </>
    )
}