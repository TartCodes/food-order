import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef } from "react";

const MealItemForm = (props) => {
	const amountInputRef = useRef();
	const submitHandler = (e) => {
		e.preventDefault();
	};

	return (
		<form className={classes.form}>
			<Input
				ref={amountInputRef}
				label="Amount"
				input={{
					id: `amount ${props.id}`,
					type: "number",
					min: "1",
					max: "5",
					step: "1",
					defaultValue: "1"
				}}
				type="number"
				id={props.id}
			/>
			<button>+ Add</button>
		</form>
	);
};

export default MealItemForm;
