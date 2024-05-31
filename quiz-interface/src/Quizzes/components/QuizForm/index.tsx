// import { useLocation, useParams } from "react-router-dom";
import InputTextField from "../InputTextField";
import { useState } from "react";
import { Question } from "../../types";
import QuestionView from "../QuestionView";

export const QuizForm = () => {
  // let location = useLocation();
  // // const isEdit = location.pathname.includes("edit");
  // // let { quizId } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [score, setScore] = useState<number>();
  const [link, setLink] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);

  return (
    <div>
      <h3>Quiz Form</h3>
      <InputTextField
        name={"Title"}
        state={title}
        onChange={(value) => setTitle(value)}
      />
      <InputTextField
        name={"Description"}
        state={description}
        onChange={(value) => setDescription(value)}
        height={150}
      />
      <InputTextField
        name={"Quiz Score"}
        state={score}
        onChange={(value) => setScore(Number(value))}
      />
      <InputTextField
        name={"Youtube Link"}
        state={link}
        onChange={(value) => setLink(value)}
      />
      <hr />
      <button
        onClick={() =>
          setQuestions((prev) => [
            ...prev,
            {
              answers: [],
              feedback_false: "",
              feedback_true: "",
              text: "",
              answer_id: null,
            },
          ])
        }
      >
        Add Question
      </button>
      <div>
        {questions.map((question, index) => (
          <>
            <QuestionView
              key={index}
              question={question}
              onChange={(updatedQuestion) =>
                setQuestions((prev) =>
                  prev.map((question, ind) =>
                    index === ind ? updatedQuestion : question
                  )
                )
              }
              addNewAnswer={() =>
                setQuestions((prev) =>
                  prev.map((question, ind) =>
                    index === ind
                      ? {
                          ...question,
                          answers: [
                            ...question.answers,
                            { is_true: false, text: "" },
                          ],
                        }
                      : question
                  )
                )
              }
              questionIndex={index}
            />
            <br />
          </>
        ))}
      </div>
    </div>
  );
};
