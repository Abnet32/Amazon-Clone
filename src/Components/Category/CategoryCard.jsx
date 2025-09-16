import classes from "./category.module.css";
// import { Link } from "react-router-dom";
function CategoryCard({ title, imgLink1, imgLink2, imgLink3, imgLink4, desc}) {
  return (
    <div className={classes.category}>
      <a to="/">
        <span>
          <h2>{title}</h2>
          <img src={imgLink1} alt={title} />
          <img src={imgLink2} alt={title} />
          <img src={imgLink3} alt={title} />
          <img src={imgLink4} alt={title} />
          <p>{desc}</p>
        </span>
      </a>
    </div>
  );
}

export default CategoryCard;
