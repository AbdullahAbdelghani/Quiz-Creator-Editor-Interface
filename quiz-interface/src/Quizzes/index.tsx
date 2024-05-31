import { QuizCard } from "./components/QuizCard";
import data from "./data.json";

const Quizzes = () => {
  return (
    <div>
      {data.map((quiz) => (
        <QuizCard quiz={quiz} />
      ))}
    </div>
  );
};

export default Quizzes;
