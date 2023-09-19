import styled from "styled-components"
import Navbar from "../components/Navbar";
import { Add, Remove } from "@material-ui/icons";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { addProducts } from "../context/cartsRedux";
import { publicRequest } from "../requestMethod";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
    
`
const Wapper = styled.div`
    width: 100%;
    display: flex;
    padding-top: 100px;
    margin-bottom: 50px;
`
const ImgContainer = styled.div`
    flex: 1;
    margin:0px 50px;
`
const Image = styled.img`
    width: 100%;
`
const Info = styled.div`
    flex: 1;
    margin-right: 50px;
`
const Title = styled.h1`
    font-family: 'Oswald', sans-serif;
    font-size: 40px;
    margin:0px 0px 20px 20px;
`
const Desc = styled.p`
     font-family: 'Lobster', cursive;
     font-size: 20px;
`
const Price = styled.div`
    margin: 10px ;
    font-size: 40px;
    color: #d6d1d1;
`
const Fillter = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0px;
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
const Box = styled.div`
      width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AddContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    cursor: pointer;
`
const Mount = styled.div`
     width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
      padding: 15px;
    border: 2px solid teal;
    background-color: white;
    font-weight: 500;
    cursor: pointer;
    &:hover{
        background-color: #f8f4f4;
    }
`

const Product = () => {
    const [product,setProduct] = useState([])
    const location = useLocation()
    const Path = location.pathname.split("/")[2]
    const dispatch = useDispatch();
    const [quanity, setQuanity] = useState(1);

    useEffect(()=>{
        const fetchProduct = async()=>{
            const res = await publicRequest.get("/product/find/" + Path)
            setProduct(res.data)
        }
        fetchProduct()
    },[Path])

    const handleQuanity = (type)=>{
        if(type === "desc"){
            quanity > 1 && setQuanity(quanity - 1)
        }else{
            setQuanity(quanity + 1)
        }
    }

    const handleClick = async()=>{
        dispatch(
            addProducts({...product,quanity})
        )
    }

  return (
      <Container>
          <Navbar/>
          <Wapper>
                <ImgContainer>
                    <Image src={product.img}/>
                </ImgContainer>
                <Info>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>$ {product.price}</Price>
                    <Fillter>
                    <Color>Color</Color>
                    <FillterColor direction={product.color}/>
                    </Fillter>
                    <Box>
                    <AddContainer>
                        <Remove onClick={()=> handleQuanity("desc")}/>
                        <Mount>{quanity}</Mount>
                        <Add onClick={()=> handleQuanity("inc")}/>
                    </AddContainer>
                    <Button onClick={handleClick}>ADD TO CART</Button>
                    </Box>
                </Info>
          </Wapper>
          <ToastContainer />
          <Footer/>
      </Container>
  )
};

export default Product;
