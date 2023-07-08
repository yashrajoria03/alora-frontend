import axios from "axios";
import { useContext } from "react";
import CartContext from "../context/cartContext";

const WEBLINK = "https://alora.onrender.com/";
export const getCart = (id) => (dispatch) => {
  axios
    .get(`${WEBLINK}api/cart/${id}`)
    .then((res) =>
      dispatch({
        type: "GET_CART",
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const updateCart = (userId, productId, qty) => (dispatch) => {
  axios
    .put(`${WEBLINK}api/cart/${userId}`, {
      productId,
      qty,
    })
    .then((res) =>
      dispatch({
        type: "GET_CART",
        payload: res.data,
      })
    )
    .catch((err) => {
      console.log("Error in update cart:", err);
    });
};

export const addToCart = (id, productId, quantity) => (dispatch) => {
  axios
    .post(`${WEBLINK}api/cart/${id}`, {
      productId,
      quantity,
    })
    .then((res) =>
      dispatch({
        type: "ADD_TO_CART",
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const deleteFromCart = (userId, itemId) => (dispatch) => {
  axios
    .delete(`${WEBLINK}api/cart/${userId}/${itemId}`)
    .then((res) =>
      dispatch({
        type: "DELETE_FROM_CART",
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};
