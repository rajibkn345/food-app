import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = () => {
	return (
		<div className={classes.button}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your cart</span>
			<span className={classes.badge}>3</span>
		</div>
	);
};

export default HeaderCartButton;
