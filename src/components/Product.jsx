import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faSearch,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5fbfd;
  position: relative;
`;

const Circle = styled.div`
  background-color: #fff;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Info = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transition: all 0.8s ease;
  }
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #000000;
    color: #fff;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <FontAwesomeIcon icon={faCartShopping} />
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faSearch} />
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faHeart} />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
