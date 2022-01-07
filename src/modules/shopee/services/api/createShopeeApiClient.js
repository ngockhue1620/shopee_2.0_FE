import jwt_decode from "jwt-decode";

export const createShopeeApiClient = (api) => {
  return {
    login: login(api),
    getCategory: getCategory(api),
    getProducts: getProducts(api),
    getProductById: getProductById(api),
    getCart: getCart(api),
    removeProductOutCart: removeProductOutCart(api),
    updateQtyOfProductInCart: updateQtyOfProductInCart(api),
    addProductToCart: addProductToCart(api),
    checkout: checkout(api),
    checkoutOnlyOneProduct: checkoutOnlyOneProduct(api),
    registerUser: registerUser(api),
  };
};

const login = (api) => async (data) => {
  try {
    const res = await api.post("/api_oauth2/login", data, {
      headers: { "content-type": "multipart/form-data" },
    });

    return res.data;
  } catch (error) {}
};

const getCategory = (api) => async () => {
  try {
    const res = await api.get("/categories");

    return res.data;
  } catch (error) {}
};
const getProducts = (api) => async (params) => {
  try {
    const res = await api.get("/products", { params });

    return res.data;
  } catch (error) {}
};
const getProductById = (api) => async (id) => {
  try {
    const res = await api.get(`/products/${id}`);

    return res.data;
  } catch (error) {}
};

const getCart = (api) => async (id) => {
  try {
    const token = localStorage.getItem("access_token");

    const res = await api.get(`/users/cart/${jwt_decode(token).user?.id}`);

    return res.data;
  } catch (error) {
    return [];
  }
};

const addProductToCart = (api) => async (data) => {
  try {
    const token = localStorage.getItem("access_token");

    const res = await api.post(`/users/cart/`, {
      user: parseInt(jwt_decode(token).user?.id),
      ...data,
    });

    return res.data;
  } catch (error) {}
};

const updateQtyOfProductInCart = (api) => async (data) => {
  try {
    const res = await api.patch(`/users/cart/${data.id}/`, {
      quantity: data.quantity,
    });

    return res.data;
  } catch (error) {}
};

const removeProductOutCart = (api) => async (id) => {
  try {
    const res = await api.delete(`/users/cart/${id}`);

    return true;
  } catch (error) {}
};

const checkout = (api) => async (data) => {
  try {
    const res = await api.post(`/order/`, data);

    return true;
  } catch (error) {}
};
const checkoutOnlyOneProduct = (api) => async (data) => {
  try {
    const res = await api.post(`/products/${data.id}/checkout/`, data.body);

    return true;
  } catch (error) {}
};

const registerUser = (api) => async (data) => {
  console.log(data)
  try {
    const result = await api.post('https://shopee20.herokuapp.com/api/v1/users/', data);
    return true
  } catch (error) {
    if(error.mess){
      return error.mess
    } else {
      return error.username[0]
    }
    
  }
}