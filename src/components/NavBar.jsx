import { Navbar, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
const NavBar = () => {
  const state = useSelector((state) => state.options);
  const { options } = state;
  const { name } = options;
  console.log(name);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>QuizApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        text
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        {name && <Navbar.Text>Hi {name}!</Navbar.Text>}
      </Container>
    </Navbar>
  );
};
export default NavBar;
