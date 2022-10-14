import { faPaperPlane } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  background-color: #fcf5f5;
  ${mobile({height: '30vh', textAlign: 'center'})}
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({fontSize: '45px'})}
`;

const Description = styled.div`
  margin-bottom: 15px;
  font-size: 22px;
  line-height: 32px;
  font-weight: 300;
  ${mobile({fontSize: '18px', lineHeight: '28px'})}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({width: '80%'})}
`;

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 15px;
    padding-right: 15px;

    &:focus-visible {
        outline: none;
    }
`;

const Button = styled.button`
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: teal;
    color: #fff;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Description>
      <InputContainer>
        <Input placeholder="your email" />
        <Button>
          <FontAwesomeIcon icon={faPaperPlane} />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
