import { Link } from "react-router-dom";
import embedUrl from "../../helpers/embedUrl";
import { Quiz } from "../../types";

export const QuizCard = ({ quiz }: { quiz: Quiz }) => {
  const { id, title, description, score, url } = quiz;
  const adjustedUrl = embedUrl(url);
  return (
    <div key={id}>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Score: {score}</p>
      <iframe title={String(id)} src={adjustedUrl}></iframe>
      <Link to={`/edit-quiz/${id}`}>Edit Quiz</Link>
    </div>
  );
};
