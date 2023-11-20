import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import { getQuestion } from "../actions";
import { Form, Button } from "react-bootstrap";
import { useEffect } from "react";

const Question = () => {
  const dispatch = useDispatch();
  const currentQuestion = useSelector(
    (state) => state.questions.currentQuestion
  );
  const selectedQuestions = useSelector(
    (state) => state.questions.selectedQuestions
  );

  useEffect(() => {
    if (selectedQuestions.length > 0 && currentQuestion.question) {
      dispatch(getQuestion(selectedQuestions));
    }
  }, [dispatch, selectedQuestions, currentQuestion]);

  const handleNext = (e) => {
    e.preventDefault();
    dispatch(getQuestion(selectedQuestions));
  };
  return (
    <Container>
      <Form onSubmit={(e) => handleNext(e)}>
        <h3>{currentQuestion.question}</h3>
        {/* {currentQuestion.answers.map((answer, i) => (
          <Form.FormCheck
            key={i}
            type="radio"
            label={answer.option}
            id={answer.option}
          />
        ))} */}
        <Button type="submit">Next Question</Button>
      </Form>
    </Container>
  );
};
export default Question;
