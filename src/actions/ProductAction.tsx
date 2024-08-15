"use server";
import axios from "axios";

const api = "http://localhost:3000/api";

export const getProducts = async () => {
  try {
    const res = await axios.get(`${api}/products`);
    return res.data;
  } catch (error:any) {
    return error.message;
  }
};
export const getProductById = async ({id}:{id:string}) => {
  try {
    const res = await axios.get(`${api}/products/${id}`);
    return res.data;
  } catch (error:any) {
    return error.message;
  }
};
