import axios from "axios";

export const getTodosApi = () =>
  axios.get("https://jsonplaceholder.typicode.com/todos");

export const getCategoryApi = () =>
  axios.get("https://api.bmethod.grdev.pw/front/category");
