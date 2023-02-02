import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import { useState } from "react";
import "./index.css";
import CartProvider from "./store/CartProvider";

function App() {
	const [showCart, setShowCart] = useState(false);
	const cartHandler = () => {
		setShowCart(true);
	};
	const hideCartHandler = () => {
		setShowCart(false);
	};

	return (
		<CartProvider>
			{showCart && <Cart onClose={hideCartHandler} />}
			<Header onToggleCart={cartHandler} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
