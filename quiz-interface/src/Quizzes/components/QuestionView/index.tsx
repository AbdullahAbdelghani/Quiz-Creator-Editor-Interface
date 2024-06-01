import { Question } from "../../types";
import InputTextField from "../InputTextField";
import Choice from "../QuizForm/Choice";
import { styles } from "./styles";

const QuestionView = ({
  question,
  onChange,
  addNewAnswer,
  questionIndex,
}: {
  question: Question;
  onChange: (value: Question) => void;
  addNewAnswer: () => void;
  questionIndex: number;
}) => {
  return (
    <div>
      <InputTextField
        name="Question Body"
        state={question.text}
        onChange={(questionBody) =>
          onChange({ ...question, text: questionBody })
        }
      />
      <button style={styles.button} onClick={addNewAnswer}>
        Add Answer
      </button>
      {question.answers.map((answer, index) => (
        <Choice
          key={`${questionIndex}${index}`}
          isTrue={answer.is_true}
          answerBody={answer.text}
          onChange={(value) => {
            if (typeof value === "boolean") {
              onChange({
                ...question,
                answers: question.answers.map((answer, ind) =>
                  index === ind
                    ? { ...answer, is_true: true }
                    : { ...answer, is_true: false }
                ),
              });
            } else {
              onChange({
                ...question,
                answers: question.answers.map((answer, ind) =>
                  index === ind ? { ...answer, text: value } : answer
                ),
              });
            }
          }}
        />
      ))}
      <InputTextField
        name="Correct Answer Feedback"
        state={question.feedback_true}
        onChange={(questionFeedback) =>
          onChange({ ...question, feedback_true: questionFeedback })
        }
      />
      <InputTextField
        name="Incorrect Answer Feedback"
        state={question.feedback_false}
        onChange={(questionFeedback) =>
          onChange({ ...question, feedback_false: questionFeedback })
        }
      />
    </div>
  );
};

export default QuestionView;
