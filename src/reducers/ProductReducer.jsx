const initialState = {
  cartProducts: [],
  allProducts: [],
  sortProducts: "popular",
};

const ProductReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_CART": {
      const product = action.payload;
      const found = state.cartProducts.find((p) => p.id === product.id);

      if (!found) {
        return {
          ...state,
          cartProducts: [...state.cartProducts, { ...product, quantity: 1 }],
          allProducts: state.allProducts.map((item) =>
            item.id === product.id ? { ...item, stock: item.stock - 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          cartProducts: state.cartProducts.filter(
            (item) => item.id !== product.id
          ),
          allProducts: state.allProducts.map((item) =>
            item.id === product.id
              ? { ...item, stock: item.stock + found.quantity }
              : item
          ),
        };
      }
    }

    case "UPDATE_COUNT": {
      const { type, productId } = action.payload;
      const cartItem = state.cartProducts.find((item) => item.id === productId);
      const stockItem = state.allProducts.find((item) => item.id === productId);
      if (type === "increment" && stockItem.stock > 0) {
        return {
          ...state,
          cartProducts: state.cartProducts.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          allProducts: state.allProducts.map((product) =>
            product.id === productId
              ? { ...product, stock: product.stock - 1 }
              : product
          ),
        };
      }

      if (type === "decrement" && cartItem.quantity > 1) {
        return {
          ...state,
          cartProducts: state.cartProducts.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
          allProducts: state.allProducts.map((product) =>
            product.id === productId
              ? { ...product, stock: product.stock + 1 }
              : product
          ),
        };
      }

      return state;
    }

    case "SET_SORT":
      return { ...state, sortType: action.payload };

    default:
      return state;
  }
};

export { initialState, ProductReducer };
