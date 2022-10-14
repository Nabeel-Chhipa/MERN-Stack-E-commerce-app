import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  text-align: center;
  font-weight: 400;
`;
const Top = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({flexDirection: 'column'})}
`;
const TopButton = styled.button`
  background: none;
  border: ${(props) => props.type === "filled" && "none"};
  width: 15%;
  background-color: ${(props) =>
    props.type === "filled" ? "teal" : "transparent"};
  color: ${(props) => props.type === "filled" && "#fff"};
  padding: 15px;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  ${mobile({ width: "70%", padding: "15px 10px" })}
`;
const TopTexts = styled.div`
  ${mobile({ margin: "10px 5px"})}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: 'column'})}
`;
const Info = styled.div`
  flex: 3;
  margin-right: 20px;
  ${mobile({margin: '20px 0px'})}
`;
const Summary = styled.div`
  flex: 1;
  border: 1px solid teal;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  ${mobile({margin: '20px 0px'})}
`;
const SummaryTitle = styled.h2`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "600"};
  font-size: ${(props) => props.type === "total" && "18px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  border: none;
  width: 50%;
  background-color: teal;
  color: #fff;
  padding: 15px;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const PriceDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const Image = styled.img`
  width: 150px;
  border: 2px dotted teal;
  border-radius: 50%;
  padding: 5px;
  ${mobile({width: '100px', height: '90px'})}
`;
const Details = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 20px;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 20px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 25px;
  font-weight: 400;
`;
const Hr = styled.hr`
  background-color: teal;
  margin: 20px 0px;
  height: 1px;
  border: none;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt="product-1 image"
                />
                <Details>
                  <ProductName>
                    <b>Product: </b> Shoe One{" "}
                  </ProductName>
                  <ProductId>
                    <b>Id: </b> 0123456789{" "}
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size: </b> 40{" "}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <FontAwesomeIcon icon={faMinus} />
                  <ProductAmount>2</ProductAmount>
                  <FontAwesomeIcon icon={faPlus} />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt="product-1 image"
                />
                <Details>
                  <ProductName>
                    <b>Product: </b> Shoe One{" "}
                  </ProductName>
                  <ProductId>
                    <b>Id: </b> 0123456789{" "}
                  </ProductId>
                  <ProductColor color="darkgray" />
                  <ProductSize>
                    <b>Size: </b> 40{" "}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <FontAwesomeIcon icon={faMinus} />
                  <ProductAmount>2</ProductAmount>
                  <FontAwesomeIcon icon={faPlus} />
                </ProductAmountContainer>
                <ProductPrice>$ 80</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Rate</SummaryItemText>
              <SummaryItemPrice>$ 10</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -4</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 90</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
