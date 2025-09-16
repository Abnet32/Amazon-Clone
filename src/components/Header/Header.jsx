import logo from "../../assets/images/amazon_PNG11.png";
import flag from "../../assets/images/flag.png";
import { SlLocationPin } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import { LiaCartArrowDownSolid } from "react-icons/lia";

import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";

const Header = () => {
 
  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header__container}>
          <div className={classes.logo__container}>
            {/* logo */}
            <div to="/">
              <img src={logo} alt="amazon logo" />
            </div>
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
            <input type="text" name="" id="" placeholder="search product" />
            {/* icon */}
            <FaSearch size={37} />
          </div>
          {/* rigth-side */}
          <div className={classes.order__container}>
            <div
              to="
            "
              className={classes.language}
            >
              {/* flag */}
              <img src={flag} alt="" />
              <select>
                <option value="">EN</option>
              </select>
            </div>
            <div to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello, {user?.email?.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>Sign out</span>
                  </>
                ) : (
                  <>
                    <p>Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </div>
            <div to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </div>
            <div to="/cart" className={classes.cart}>
              <LiaCartArrowDownSolid size={35} />
              <span></span>
            </div>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;
