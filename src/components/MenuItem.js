import React from "react";
import classes from './MenuItem.module.css'
function MenuItem({ title, category, price, img, desc }) {
    
  return <div className={classes.item}>
          <img src="https://random.imagecdn.app/500/150" className={classes.img} alt={title}/>
      <div className={classes.infoContainer}>
          <div className={classes.titleContainer}>
              <h4>{title}</h4>
              <span>${price}</span>
              </div>
              <span className={classes.category}>{category}</span>
          <div className={classes.info}>{desc}</div>
      </div>
  </div>;
}

export default MenuItem;
