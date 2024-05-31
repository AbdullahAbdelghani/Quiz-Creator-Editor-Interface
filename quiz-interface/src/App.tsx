import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quizzes from "./Quizzes";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Quizzes />} />
    </Routes>
  </BrowserRouter>
);
export default App;
