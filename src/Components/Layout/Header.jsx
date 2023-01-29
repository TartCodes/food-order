import meals from "/src/assets/images/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
	return (
		<>
			<header className={classes.header}>
				<h1>ManyMeals</h1>
				<HeaderCartButton onClick={props.onToggleCart} />
			</header>
			<div className={classes["main-image"]}>
				<img
					src={meals}
					alt="A table full of lots of food!"
				></img>
			</div>
		</>
	);
};

export default Header;
