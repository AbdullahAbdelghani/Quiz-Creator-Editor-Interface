import data from "../data.json";

export const getQuiz = ({ quizId }: { quizId?: string }) => {
  const requestedQuiz = data.find((quiz) => String(quiz.id) === quizId);
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
