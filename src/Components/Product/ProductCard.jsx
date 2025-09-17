import Rating from "@mui/material/Rating";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";

function ProductCard({ product, flex }) {
  const { id, image, title, price, rating, description } = product;
  return (
    <div className={`${classes.card} ${flex && classes.product__fixed}`}>
      <Link to={`/product/${id}`} className={classes.link}>
        <img src={image} alt={title} className={classes.productImage} />
        <h3 className={classes.title}>{title}</h3>
      </Link>
      <p className={classes.desc}>{description?.substring(0, 70)}...</p>

      <div className={classes.rating}>
        <Rating value={rating?.rate || 0} precision={0.1} readOnly />
        <span>({rating?.count || 0})</span>
      </div>

      <div className={classes.price}>${price}</div>

      <button className={classes.button}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
