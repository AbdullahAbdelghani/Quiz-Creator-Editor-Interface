import data from "../data.json";
import { Quiz } from "../types";

export const getQuiz = ({ quizId }: { quizId?: string }) => {
  const quizzes = data as Quiz[];
  const requestedQuiz = quizId
    ? quizzes.find((quiz) => quiz.id === quizId)
    : undefined;
  if (!quizId || !requestedQuiz)
    return [
      "error",
      {
        errorMessage: !quizId
          ? "error: Quiz id is missing"
          : "error: No quiz with this id exists",
      },
    ] as const;
  return ["success", requestedQuiz] as const;
};
