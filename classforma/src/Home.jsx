import Page1 from "./Page1.jsx";
import Page2 from "./Page2.jsx";
import Page3 from "./Page3.jsx"
import {Outlet, Link } from "react-router-dom"
function Home() {
    return ( 
        <>
            <ul>
                <li>
                    <Link to="/page_1">Sample Document 1</Link>
                </li>
                <li>
                    <Link to="/page_2">Sample Document 2</Link>
                </li>
                <li>
                    <Link to="/page_3">Sample Document 3</Link>
                </li>
            </ul>
        </>
     );
}

export default Home;