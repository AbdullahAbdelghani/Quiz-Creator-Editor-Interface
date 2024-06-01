import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quizzes from "./Quizzes";
import { QuizForm } from "./Quizzes/components/QuizForm";
import QuizzesProvider from "./Quizzes/QuizzesProvider";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<QuizzesProvider />}>
        <Route index element={<Quizzes />} />
        <Route path="/create-quiz" element={<QuizForm />} />
        <Route path="/edit-quiz/:quizId" element={<QuizForm />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
export default App;
