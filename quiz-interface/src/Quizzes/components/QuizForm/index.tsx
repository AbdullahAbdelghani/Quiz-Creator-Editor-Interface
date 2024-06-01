import {
  Link,
  useLocation,
  useOutletContext,
  useParams,
} from "react-router-dom";
import InputTextField from "../InputTextField";
import { useState } from "react";
import { Question, Quiz } from "../../types";
import QuestionView from "../QuestionView";
import { getQuiz } from "../../services/getQuiz";

export const QuizForm = () => {
  let location = useLocation();
  let { state } = useLocation();
  const isEdit = location.pathname.includes("edit");
  const { onSubmit } = useOutletContext<{
    onSubmit: (newQuiz: Quiz, index?: number) => void;
  }>();
  let { quizId } = useParams();
  const currentQuiz = getQuiz({ quizId });

  const [title, setTitle] = useState(
    isEdit && currentQuiz[0] === "success" ? currentQuiz[1].title : ""
  );
  const [description, setDescription] = useState(
    isEdit && currentQuiz[0] === "success" ? currentQuiz[1].description : ""
  );
  const [score, setScore] = useState<number | null>(
    isEdit && currentQuiz[0] === "success" ? currentQuiz[1].score : null
  );
  const [link, setLink] = useState(
    isEdit && currentQuiz[0] === "success" ? currentQuiz[1].url : ""
  );
  const [questions, setQuestions] = useState<Question[]>(
    isEdit && currentQuiz[0] === "success"
      ? currentQuiz[1].questions_answers
      : []
  );
  const [error, setError] = useState<{ [x: string]: string | undefined }>({});

  if (isEdit && currentQuiz[0] === "error") {
    return (
      <div>
        <h3>{currentQuiz[1].errorMessage}</h3>
        <Link to={"/"}>Return to homepage</Link>
      </div>
    );
  }

  return (
    <div>
      <h3>Quiz Form</h3>
      <InputTextField
        name={"Title"}
        state={title}
        onChange={(value) => {
          setTitle(value);
          setError((prev) => ({ ...prev, title: undefined }));
        }}
      />
      {error.title && <p>{error.title}</p>}
      <InputTextField
        name={"Description"}
        state={description}
        onChange={(value) => {
          setDescription(value);
          setError((prev) => ({ ...prev, description: undefined }));
        }}
        height={150}
      />
      {error.description && <p>{error.description}</p>}
      <InputTextField
        name={"Quiz Score"}
        state={score || undefined}
        onChange={(value) => setScore(Number(value))}
      />
      <InputTextField
        name={"Youtube Link"}
        state={link}
        onChange={(value) => {
          setLink(value);
          setError((prev) => ({ ...prev, link: undefined }));
        }}
      />
      {error.link && <p>{error.link}</p>}
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
              onChange={(updatedQuestion) => {
                setQuestions((prev) =>
                  prev.map((question, ind) =>
                    index === ind ? updatedQuestion : question
                  )
                );
                setError((prev) => ({
                  ...prev,
                  questionAnswer: undefined,
                  answerBody: undefined,
                }));
              }}
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
            {error.answerBody && <p>{error.answerBody}</p>}
            {error.questionAnswer && <p>{error.questionAnswer}</p>}
            <br />
          </>
        ))}
      </div>
      <div>
        <button
          onClick={() => {
            if (title === "")
              setError((prev) => ({ ...prev, title: "title is required" }));
            if (description === "")
              setError((prev) => ({
                ...prev,
                description: "description is required",
              }));
            if (link === "")
              setError((prev) => ({ ...prev, link: "link is required" }));
            questions.forEach((question) => {
              if (!question.answers.every((answer) => answer.text)) {
                setError((prev) => ({
                  ...prev,
                  answerBody: "all answers must have a text",
                }));
              }
              if (
                !(
                  question.answers.filter((answer) => answer.is_true).length ===
                  1
                )
              ) {
                setError((prev) => ({
                  ...prev,
                  questionAnswer: "all questions must have a correct answer",
                }));
              }
            });
            for (const err in error) {
              if (typeof error[err] === "string") return;
            }
            const dateUpdate = isEdit
              ? {
                  modified: Date.now().toString(),
                  created:
                    currentQuiz[0] === "success" ? currentQuiz[1].created : "",
                  id: currentQuiz[0] === "success" ? currentQuiz[1].id : "",
                }
              : { created: Date.now().toString(), id: "" };
            onSubmit(
              {
                title,
                description,
                score,
                url: link,
                questions_answers: questions,
                ...dateUpdate,
              },
              isEdit ? state.index : undefined
            );
          }}
        >
          {isEdit ? "Save Changes" : "Create Quiz"}
        </button>
      </div>
    </div>
  );
};
