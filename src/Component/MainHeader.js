import { NavLink } from "react-router-dom";


const MainHeader = () => {
  return (
    <header >
      <nav>
        <ul >
          <li>
            <NavLink to="/welcome">WelCome</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
