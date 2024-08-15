import axios from "axios";

const api = "http://localhost:3000/api";

export const getCartByUserid = async (id: string | null | undefined) => {
  try {
    const res = await axios.get(`${api}/carts/${id}`);
    return res.data;
  } catch (error:any) {
    return error.message;
  }
};

export const postCart = async (id: string | null | undefined, data:any) =>{
    try {
        const res = await axios.post(`${api}/carts/${id}`, data)
        return res.data;
    } catch (error:any) {
        return error.message
    }
}