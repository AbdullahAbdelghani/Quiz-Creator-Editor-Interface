import { useEffect, useState } from "react";
import axios from "axios";

import { Quiz } from "./types";
import { Outlet, useNavigate } from "react-router-dom";
import { getQuizzes } from "./services/getQuizzes";

const QuizzesProvider = () => {
  let navigate = useNavigate();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    const getAllQuizzes = async () => {
      const data = await getQuizzes();
      setQuizzes(data);
    };
    getAllQuizzes();
  }, []);

  const onSubmit = (newQuiz: Quiz, index?: number) => {
    let tempQuizzes =
      index === undefined
        ? [...quizzes, newQuiz]
        : quizzes.map((quiz, ind) => (ind === index ? newQuiz : quiz));
    setQuizzes(tempQuizzes);
    axios.post("http://localhost:8080/", JSON.stringify(tempQuizzes), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return navigate("/");
  };
  return <Outlet context={{ quizzes, onSubmit }} />;
};

export default QuizzesProvider;
