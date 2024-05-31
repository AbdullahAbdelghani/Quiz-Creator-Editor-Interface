import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quizzes from "./Quizzes";
import { QuizForm } from "./Quizzes/components/QuizForm";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Quizzes />} />
      <Route path="/create-quiz" element={<QuizForm />} />
      <Route path="/edit-quiz/:quizId" element={<QuizForm />} />
    </Routes>
  </BrowserRouter>
);
export default App;
