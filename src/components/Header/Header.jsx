import logo from "../../assets/images/amazon_PNG11.png";
import flag from "../../assets/images/flag.png";
import { SlLocationPin } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <section className={classes.fixed}>
      <section>
        <div>
          {/* logo */}
          <a href={logo} alt="amazon logo"></a>
          {/* delivery */}
          <span>
            <SlLocationPin />
          </span>
          <div>
            <p>Delived to</p>
            <span>Ethiopia</span>
          </div>
        </div>
        <div>
          {/* search */}
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="search product" />
        </div>
        {/* icons */}
        <FaSearch size={37} />

        <div>
          <div>
            <img src={flag} alt="" />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </div>
          {/* three components */}
          <a href="">
            <div>
              <p>Sign In</p>
              <span>Account and Lists</span>
            </div>
          </a>
          {/* orders */}
          <a href="">
            <div>
              <p>Returns</p>
              <span>& Orders</span>
            </div>
          </a>
          {/* cart */}
          <a to={"/cart"}>
            <LiaCartArrowDownSolid size={35} />
            <span>0</span>
          </a>
        </div>
      </section>
    </section>
  );
};

export default Header;
