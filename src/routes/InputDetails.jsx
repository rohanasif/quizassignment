import { Form, Button } from "react-bootstrap";
import { useState } from "react";
const InputDetails = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Any Category");
  const [questionCount, setQuestionCount] = useState(0);
  const [difficulty, setDifficulty] = useState("Any Difficulty");
  const [timePerQuestion, setTimePerQuestion] = useState(0);
  const [hours, setHours] = useState(Math.floor(timePerQuestion / 3600));
  const [minutes, setMinutes] = useState(
    Math.floor((timePerQuestion % 3600) / 60)
  );
  const [seconds, setSeconds] = useState(timePerQuestion % 60);
  const handleSubmit = async (e) => {
    e.preventDefault();
    
  };
  return (
    <div>
      <h1>Enter your name and select from the options below to start!</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="name">
          <Form.Label htmlFor="name">Name: </Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="category">
          <Form.Label htmlFor="category">Select a category: </Form.Label>
          <Form.Select
            aria-label="Category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="Any Category">Any Category</option>
            <option value="General Knowledge">General Knowledge</option>
            <option value="Science">Science</option>
            <option value="History">History</option>
            <option value="Geography">Geography</option>
            <option value="Sports">Sports</option>
            <option value="Technology">Technology</option>
            <option value="Movies">Movies</option>
            <option value="Music">Music</option>
            <option value="History">History</option>
            <option value="Politics">Politics</option>
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
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>How many questions do you want?</Form.Label>
          <Form.Select
            aria-label="difficulty"
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <option value="Any Difficulty">Any Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
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
          />
          <Form.Control
            type="number"
            min={0}
            max={59}
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
          />
          <Form.Control
            type="number"
            min={0}
            max={59}
            value={seconds}
            onChange={(e) => setSeconds(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Play!</Button>
      </Form>
    </div>
  );
};
export default InputDetails;
