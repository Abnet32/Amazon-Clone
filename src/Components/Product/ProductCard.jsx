import Rating from "@mui/material/Rating";
import classes from "./product.module.css";

function ProductCard({ product }) {
  const { image, title, price, rating, description } = product;

  return (
    <div className={classes.card}>
      <img src={image} alt={title} className={classes.productImage} />
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.desc}>{description.substring(0, 100)}...</p>
      <div className={classes.rating}>
        <Rating value={rating?.rate} precision={0.1} readOnly />
        <span>({rating?.count})</span>
      </div>
      <div className={classes.price}>${price}</div>
      <button className={classes.button}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
