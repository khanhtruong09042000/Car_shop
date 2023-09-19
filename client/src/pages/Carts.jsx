import styled from "styled-components"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Delete } from "@material-ui/icons";
import { removeProducts } from "../context/cartsRedux";
import { userRequest } from "../requestMethod";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
    width: 100%;
    text-align: center;
`
const Title = styled.h1`
    padding-top: 100px;
    font-family: 'League Gothic', sans-serif;
    margin-bottom: 20px;
    font-size: 50px;
`
const Wapper = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 50px;
    border-top: 1px solid black;
    padding-top: 15px;
`
const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
`
const Boxs = styled.div`
    position: relative;
    background-color: white;
    border-bottom: 1px solid black;
`
const Item = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 60%;
    object-fit: cover;
    border-radius: 10px;
`
const Info = styled.div`
     flex: 1;
     display: flex;
     flex-direction: column;
     margin-right: 20px;
`
const Name = styled.h2`
    font-family: 'Lobster', cursive;
    margin: 0px 0px 10px;
`
const Box = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0px ;
`
const Id = styled.div`
    font-family: 'Oswald', sans-serif;
`
const AddContainer = styled.div`
      display: flex;
    align-items: center;
    font-weight: 700;
`
const Mount = styled.div`
    font-family: 'Oswald', sans-serif;
`
const Box1 = styled.div`
    display: flex;
    justify-content: space-between;
`
const Fillter = styled.div`
    display: flex;
    align-items: center;
`
const FillterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.direction};
    margin: 0px 5px;
    cursor: pointer;
`
const Color = styled.div`
      font-size: 20px;
    font-weight: 200;
`
const Price = styled.div`
    font-size: 25px;
`
const Right = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  margin-right: 10px;
`
const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 70%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
  &:hover{
      filter: brightness(150%);
  }
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin-bottom: 10px;
`;
const Icon = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
`
const Emty = styled.div`
    width: 62%;
    background-color: #dad1d1;
    padding: 50px 0px;
    font-size: 30px;
    font-family: 'Oswald', sans-serif;
    border-radius: 10px;
    z-index: -1;
    position: absolute;
    margin-left: 10px;
`

const Carts = () => {
    const cart = useSelector((state)=>state.cart)
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);
    const userId = user._id
    const products = cart.products

    const handleClick = (product)=>{
        dispatch(
            removeProducts(product)
        )
    }

    const handleSub = async()=>{
        try{
            const res = await userRequest.post("/cart",{
                userId,products
            })
            console.log(res.data);
        }catch(err){
            console.log(err);
        }
    }
    console.log(products);
  return (
      <Container>
            <Navbar/>
            <Title>MY CARTERGORY</Title>
            <Wapper>
                <Left>
                    {cart.products.map((p)=>(
                    <Boxs>
                    <Item>
                        <ImgContainer>
                            <Image src={p.img}/>
                        </ImgContainer>
                        <Info>
                            <Name>Product: {p.title}</Name>
                            <Box>
                                <Id>ID:{p._id}</Id>
                                <AddContainer>
                        <Mount>Quantity: {p.quanity}</Mount>
                    </AddContainer>
                            </Box>
                            <Box1>
                            <Fillter>
                    <Color>Color:</Color>
                    <FillterColor direction={p.color}/>
                    </Fillter>
                            <Price>$ {p.price * p.quanity}</Price>
                            </Box1>
                        </Info>
                    </Item>
                    <Hr />
                    <Icon >
                        < Delete onClick={()=>handleClick(p)}/>
                    </Icon>
                    </Boxs>
                    ))}
                    <Emty>
                        Your Cart is Empty
                    </Emty>
                </Left>
                <Right>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <Button onClick={handleSub}>CHECKOUT NOW</Button>
                </Right>
            </Wapper>
            <ToastContainer />
            <Footer/>
      </Container>
  )
};

export default Carts;
