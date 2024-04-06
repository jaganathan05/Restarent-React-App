import React from "react";
import  classes from "./Header.module.css";
import MealsImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Jack Meals</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes['main-image']}>
        <img src={MealsImg} alt="A Table full of delicious foods!"></img>
      </div>
    </React.Fragment>
  );
}

export default Header;
