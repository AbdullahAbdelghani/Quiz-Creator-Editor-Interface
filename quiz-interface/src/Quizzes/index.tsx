import { Link, useOutletContext } from "react-router-dom";
import { QuizCard } from "./components/QuizCard";
import { Quiz } from "./types";
import { styles } from "./styles";

const Quizzes = () => {
  const { quizzes } = useOutletContext<{ quizzes: Quiz[] }>();

  return (
    <div>
      <div>
        <Link to={"/create-quiz"}>
          <button style={styles.button}>Create Quiz</button>
        </Link>
      </div>
      <div>
        {quizzes.map((quiz, index) => (
          <QuizCard quiz={quiz} key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Quizzes;
