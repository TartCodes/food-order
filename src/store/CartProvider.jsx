import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
	items: [],
	totalAmount: 0
};

const cartReducer = (state, action) => {
	if (action.type === "ADD") {
		//use .concat() instead of .push() bc push edits the old array while concat creates a new one, you want your state to be immutable
		const updatedItems = state.items.concat();
	}

	return defaultCartState;
};

const CartProvider = (props) => {
	const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);
	const addItem = (item) => {
		dispatchCart({ type: "ADD", item: item });
	};
	const removeItem = (id) => {
		dispatchCart({ type: "REMOVE", id: id });
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItem,
		removeItem: removeItem
	};
	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
