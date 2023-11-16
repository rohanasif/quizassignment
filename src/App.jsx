import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import InputDetails from "./routes/InputDetails";
import Question from "./routes/Question";
const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/quizapp" element={<InputDetails />} />
        <Route path="/quizapp/questions" element={<Question />} />
      </Routes>
    </div>
  );
};
export default App;
