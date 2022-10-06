import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
  padding: 10px 0px;
`;

const Announcement = () => {
  return (
    <Container>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      officia?
    </Container>
  );
};

export default Announcement;
