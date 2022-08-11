import axios from "axios";

export const getTodosApi = () =>
  axios.get("https://jsonplaceholder.typicode.com/todos");
