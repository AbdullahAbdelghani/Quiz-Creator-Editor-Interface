import { Link } from "react-router-dom";
import { QuizCard } from "./components/QuizCard";
import data from "./data.json";

const Quizzes = () => {
  return (
    <div>
      <div>
        <Link to={"/create-quiz"}>
          <button>Create Quiz</button>
        </Link>
      </div>
      <div>
        {data.map((quiz, index) => (
          <QuizCard quiz={quiz} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Quizzes;
