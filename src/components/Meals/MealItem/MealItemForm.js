import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
	return (
		<div className={classes.form}>
			<Input
				label='amount'
				input={{
					id: "amount" + props.id,
					type: "number",
					min: "1",
					max: "5",
					step: "1",
					defaultValue: "1",
				}}
			/>
			<button>+ Add</button>
		</div>
	);
};

export default MealItemForm;
