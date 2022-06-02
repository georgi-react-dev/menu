import React from 'react'
import MenuItem from './MenuItem'
import classes from './MenuItems.module.css'
function MenuItems({items}) {
  return (
    <div className={classes.menuItems}>
        {items.map(item => <MenuItem key={item.id} {...item} /> )}
        
    </div>
  )
}

export default MenuItems