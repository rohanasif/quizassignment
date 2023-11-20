import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOptions, selectQuestions, getQuestion } from "../actions";
import { useNavigate } from "react-router-dom";
const InputDetails = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Any Category");
  const [questionCount, setQuestionCount] = useState(1);
  const [difficulty, setDifficulty] = useState("Any Difficulty");
  const [type, setType] = useState("Any Type");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [timePerQuestion, setTimePerQuestion] = useState(
    hours * 3600 + minutes * 60 + seconds
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedQuestions = useSelector(
    (state) => state.questions.selectedQuestions
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      selectOptions({
        name,
        category,
        questionCount,
        difficulty,
        type,
        timePerQuestion,
      })
    );
    await dispatch(
      selectQuestions({
        name,
        category,
        questionCount,
        difficulty,
        type,
        timePerQuestion,
      })
    );
    await dispatch(getQuestion(selectedQuestions));
    navigate("/quizapp/questions");
  };
  return (
    <Container>
      <h1>Enter your name and select from the options below to start!</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="name">
          <Form.Label>Name: </Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="category">
          <Form.Label>Select a category: </Form.Label>
          <Form.Select
            aria-label="Category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="Any Category">Any Category</option>
            <option value="Entertainment: Film">Entertainment: Film</option>
            <option value="Entertainment: Video Games">
              Entertainment: Video Games
            </option>
            <option value="General Knowledge">General Knowledge</option>
            <option value="Geography">Geography</option>
            <option value="Entertainment: Japanese Anime & Manga">
              Entertainment: Japanese Anime & Manga
            </option>
            <option value="Entertainment: Books">Entertainment: Books</option>
            <option value="Mythology">Mythology</option>
            <option value="Animals">Animals</option>
            <option value="History">History</option>
            <option value="Science: Computers">Science: Computers</option>
            <option value="Entertainment: Music">Entertainment: Music</option>
            <option value="Entertainment: Comics">Entertainment: Comics</option>
            <option value="Science & Nature">Science & Nature</option>
            <option value="Entertainment: Television">
              Entertainment: Television
            </option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>How many questions do you want?</Form.Label>
          <Form.Select
            aria-label="questionCount"
            onChange={(e) => setQuestionCount(e.target.value)}
            value={questionCount}
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            How difficult do you want the questions to be?
          </Form.Label>
          <Form.Select
            aria-label="difficulty"
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <option value="Any Difficulty">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>What type of questions do you want?</Form.Label>
          <Form.Select
            aria-label="type"
            onChange={(e) => setType(e.target.value)}
            value={type}
          >
            <option value="Any Type">Any Type</option>
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True/False</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>How much time do you want per question?</Form.Label>
          <Form.Control
            type="number"
            min={0}
            max={99}
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            required
          />
          <Form.Control
            type="number"
            min={0}
            max={59}
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            required
          />
          <Form.Control
            type="number"
            min={0}
            max={59}
            value={seconds}
            onChange={(e) => setSeconds(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit">Play!</Button>
      </Form>
    </Container>
  );
};
export default InputDetails;
