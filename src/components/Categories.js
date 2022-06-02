import React from "react";
import classes from "./Categories.module.css";
function Categories({ categories, filterCategory, currentCategory }) {
  return (
    <div className={classes.categories}>
      <ul>
        {categories.map((category) => (
          <li key={category} onClick={() => filterCategory(category)} className={`${currentCategory  === category && classes.active}`}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
