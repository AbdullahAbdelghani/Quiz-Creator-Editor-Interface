import { Link } from "react-router-dom";
import embedUrl from "../../helpers/embedUrl";
import { Quiz } from "../../types";
import { styles } from "./styles";
import { styles as appStyles } from "../../styles";

export const QuizCard = ({ quiz, index }: { quiz: Quiz; index: number }) => {
  const { id, title, description, score, url } = quiz;
  const adjustedUrl = embedUrl(url);
  return (
    <div style={styles.cardContainer} key={id}>
      <h1 style={styles.title}>{title}</h1>
      <p style={styles.description}>Description: {description}</p>
      <p style={styles.description}>Score: {score}</p>
      <iframe title={String(id)} src={adjustedUrl}></iframe>
      <div>
        <Link
          style={styles.editButton}
          to={`/edit-quiz/${id}`}
          state={{ index }}
        >
          <button style={appStyles.button}>Edit Quiz</button>
        </Link>
      </div>
    </div>
  );
};
