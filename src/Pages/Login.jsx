import styled from "styled-components";
import Heading from "../ui/Heading";
import LoginForm from "../Features/authentication/LoginForm";
import Header from "../ui/Header";
import Nav from "../ui/Nav";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: clamp(1fr, 48rem);
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color:rgb(253 186 116);
`;

function Login() {
  return (
    <LoginLayout>
      <Header />
      <Nav />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
