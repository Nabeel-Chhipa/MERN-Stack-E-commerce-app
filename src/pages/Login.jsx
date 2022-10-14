import styled from "styled-components";
import {mobile} from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgb(0 0 0 / 11%), rgb(0 0 0 / 72%)),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({backgroundPosition: '80% center'})}
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #fff;
  ${mobile({width: '80%'})}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;

  &:focus-visible {
    outline: none;
    border: 1px solid teal;
    border-radius: 5px;
    transition: all 0.3s ease-in;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  width: 25%;
  background-color: teal;
  color: #fff;
  padding: 10px 20px;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px 0px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
