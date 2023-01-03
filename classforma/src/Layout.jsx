import { Outlet, Link } from "react-router-dom";
import Home from "./Home.jsx"
import Page1 from "./Page1.jsx";
import Page2 from "./Page2.jsx";
import Page3 from "./Page3.jsx"
const Layout = function (){
  return (
    <>
      <nav>
        <ul>
          {/* <li>
            <Link to="/"><Home/></Link>
          </li> */}
          <li>
            <Link to="/page_1"><Page1/></Link>
          </li>
          <li>
            <Link to="/page_2"><Page2/></Link>
          </li>
          <li>
            <Link to="/page_3"><Page3/></Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;