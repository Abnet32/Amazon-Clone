import classes from "./category.module.css";
// import { Link } from "react-router-dom";
function CategoryCard({ title, imgLink}) {
  return (
    <div className={classes.category}>
      <a to="/">
        <span>
          <h2>{title}</h2>
          <img src={imgLink} alt={title} />
          <p>Shop Now</p>
        </span>
      </a>
    </div>
  );
}

export default CategoryCard;
