import styled from "styled-components";
import {mobile} from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgb(0 0 0 / 11%), rgb(0 0 0 / 72%)),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({backgroundPosition: 'center center'})}
`;

const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;

  &:focus-visible {
    outline: none;
    border: 1px solid teal;
    border-radius: 5px;
    transition: all .3s ease-in;
  }
`;

const Agreement = styled.span`
  font-size: 14px;
  line-height: 24px;
  margin: 20px 0px;
  font-weight: 500;
`;

const Button = styled.button`
  background: none;
  border: none;
  width: 25%;
  background-color: teal;
  color: #fff;
  padding: 15px 20px;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            velit quasi veniam sint, dolores architecto!
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
