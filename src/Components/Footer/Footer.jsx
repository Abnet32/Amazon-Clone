import clases from "./Footer.module.css";
import logo from "../../assets/images/amazon_PNG11.png";
import flag from "../../assets/images/flag.png";
const Footer = () => {
  return (
    <div className={clases.footer__container}>
      <section className={clases.footer__backToTop}>
        <a href="">Back to top</a>
      </section>

      <section className={clases.footer__links}>
        <div>
          <h3>Get to Know Us</h3>
          <ul>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About Amazon</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Amazon Devices</a>
            </li>
            <li>
              <a href="#">Amazon Science</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Make Money with Us</h3>
          <ul>
            <li>
              <a href="#">Sell products on Amazon</a>
            </li>
            <li>
              <a href="#">Sell on Amazon Business</a>
            </li>
            <li>
              <a href="#">Sell apps on Amazon</a>
            </li>
            <li>
              <a href="#">Become an Affiliate</a>
            </li>
            <li>
              <a href="#">Advertise Your Products</a>
            </li>
            <li>
              <a href="#">Self-Publish with Us</a>
            </li>
            <li>
              <a href="#">Host an Amazon Hub</a>
            </li>
            <li>
              <a href="#">See More Make Money with Us</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Amazon Payment Products</h3>
          <ul>
            <li>
              <a href="#">Amazon Business Card</a>
            </li>
            <li>
              <a href="#">Shop with Points</a>
            </li>
            <li>
              <a href="#">Reload Your Balance</a>
            </li>
            <li>
              <a href="#">Amazon Currency Converter</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Let Us Help You</h3>
          <ul>
            <li>
              <a href="#">Amazon and COVID-19</a>
            </li>
            <li>
              <a href="#">Your Account</a>
            </li>
            <li>
              <a href="#">Your Orders</a>
            </li>
            <li>
              <a href="#">Shipping Rates & Policies</a>
            </li>
            <li>
              <a href="#">Returns & Replacements</a>
            </li>
            <li>
              <a href="#">Manage Your Content and Devices</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>
      </section>
      {/* <hr className={clases.hr} /> */}
      <section className={clases.footer__bottom}>
        <section className={clases.logo}>
          <a href="">
            <img src={logo} alt="" />
          </a>
        </section>
        <div>
          <a href="">English</a>
        </div>
        <div>
          <a href=""></a>$ USD - U.S. Dollar
        </div>
        <div>
          <a href="">
            <img src={flag} alt="" className={clases.flag} />
            United States
          </a>
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default Footer;
