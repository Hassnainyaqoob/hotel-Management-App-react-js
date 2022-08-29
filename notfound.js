import { Link } from "react-router-dom";


export default function NOTFOUND() {

    return (

        <div>

            <h1>404 PAGE IS NOT FOUND</h1>

            <ul>
                <li>
                    <Link to="/">Go to the Website</Link>
                </li>
            </ul>

        </div>

    )

}