import axios from "axios";
import { Quiz } from "../types";

export const getQuizzes = async () => {
  const { data } = await axios.get("http://localhost:8080/");
  console.log(data);
  return !data ? [] : (data as Quiz[]);
};
