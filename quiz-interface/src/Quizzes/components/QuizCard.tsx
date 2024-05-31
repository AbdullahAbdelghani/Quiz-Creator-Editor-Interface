import { Quiz } from "../types";

export const QuizCard = ({ quiz }: { quiz: Quiz }) => {
  return (
    <div key={quiz.id}>
      <h1>{quiz.title}</h1>
      <p>{quiz.description}</p>
      <p>Score: {quiz.score}</p>
      <iframe
        title={String(quiz.id)}
        src={quiz.url.replace("watch?v=", "embed/")}
      ></iframe>
    </div>
  );
};
