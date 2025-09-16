import logo from "../../assets/images/amazon_PNG11.png";
import flag from "../../assets/images/flag.png";
import { SlLocationPin } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { Link } from "react-router";

import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";

const Header = () => {
  return (
    <section className={classes.fixed}>
      <div className={classes.header__container}>
        {/* logo */}
        <div className={classes.logo__container}>
          <Link to="/">
            <img src={logo} alt="amazon logo" />
          </Link>
          <div className={classes.delivery}>
            {/* delivery */}
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        <div className={classes.search}>
          {/* search */}
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="Search Amazon" />
          {/* icon */}
          <FaSearch size={20} />
        </div>
        {/* rigth-side */}
        <div className={classes.order__container}>
          <Link
            to="
            "
            className={classes.language}
          >
            {/* flag */}
            <img src={flag} alt="" />
            <select>
              <option value="">EN</option>
            </select>
          </Link>
          <div>
            <div>
              <p>Hello, Sign In</p>
              <span>Account & Lists</span>
            </div>
          </div>
          <Link href="/orders">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>
          <Link href="/cart" className={classes.cart}>
            <LiaCartArrowDownSolid size={35} />
            <span>0</span>
          </Link>
        </div>
      </div>
      <LowerHeader />
    </section>
  );
};

export default Header;
