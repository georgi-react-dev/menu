import { useState, useEffect, useCallback } from "react";
import "./App.css";
import menuItems from './data'
import Categories from './components/Categories'
import MenuItems from './components/MenuItems'
function App() {

  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('all');
  const [filteredMenuItems, setFilteredMenuItems] = useState([]);

  const getCategories = () => {
    const categoriesItems = ["all", ...new Set(menuItems.map(item => item.category))]

    setCategories(categoriesItems);
  }
  const filteredItems = () => {
    const pr =  menuItems.filter(item => {
      if(currentCategory === 'all') {
        return item
      }
      return item.category === currentCategory
    });
    setFilteredMenuItems(pr);
  }
  useEffect(() => {
    getCategories();
    filteredItems();
  }, [currentCategory])
  
  
  return (
    <div className="App">
      <div className="container">
        <h1 className="app-title">
          Our menu
        </h1>
        <hr className="title-underline" />
        <div className="app-container">
          <Categories categories={categories} currentCategory={currentCategory} filterCategory={(category) => setCurrentCategory(category)}/>
          <MenuItems items={filteredMenuItems}/>
        </div>
      </div>
    </div>
  );
}

export default App;
