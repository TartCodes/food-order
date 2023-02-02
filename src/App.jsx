import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import "./index.css";

function App() {
	return (
		<>
			<Cart />
			<Header />
			<main>
				<Meals />
			</main>
		</>
	);
}

export default App;
