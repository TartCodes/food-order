import classes from "./Header.module.css";
import meals from "/src/assets/images/meals.jpg";

const Header = (props) => {
	return (
		<>
			<header className={classes.header}>
				<h1>ManyMeals</h1>
				<button>Cart</button>
			</header>
			<div className={classes["main-image"]}>
				<img
					className={classes.img}
					src={meals}
				></img>
			</div>
		</>
	);
};

export default Header;
