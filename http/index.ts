import axios from "axios";

export const getTodosApi = () =>
  axios.get("https://jsonplaceholder.typicode.com/todos");

export const getCategoryApi = () =>
  axios.get("https://api.bmethod.grdev.pw/front/category");

export const getCurrentCategoryApi = (id: number | string) =>
  axios.get(`https://api.bmethod.grdev.pw/category/${id}`);

export const getUserApi = () =>
  axios.get("https://jsonplaceholder.typicode.com/users/1");
