import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { publicRequest } from "../requestMethod"
import { ArrowRight } from "@material-ui/icons"

const Container = styled.div`
width: 100%;
height: 100%;
  text-align: center;
`
const Title = styled.div`
  font-family: 'Oswald', sans-serif;
  font-size: 50px;
`
const Box = styled.div`
  padding: 40px 35px 40px 40px;
  border-top: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const List = styled.div`
width: 100%;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.div`
  width: 23.65%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 15px 15px 0px;
  text-align: center;
  border: 1px solid #b8b7b7;
  border-radius: 10px;
`
const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`
const Button = styled.button`
  width: 100%;
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  &:hover{
    filter: brightness(150%);
  }
`
const Desc = styled.h3`
  margin: 20px 0px 30px;
  font-family: 'Lobster', cursive;
`
const Box1 =styled.div`
width: 100%;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 25px;
  font-family: 'League Gothic', sans-serif;
  margin-top: 15px;
  cursor: pointer;
  &:hover{
    background-color: wheat;
    color: black;
  }
`

const Products = () => {
  const [products,setProducts] = useState([])

  useEffect(()=>{
    const fetchProducts = async()=>{
      const res = await publicRequest.get("/product/find")
      const ress = res.data.slice(0,8)
      setProducts(ress)
  }
    fetchProducts()
  },[])

  return (
      <Container>
        <Title>Products</Title>
          <Box>
            <List>
              {products.map((item)=>(
              <ListItem>
                <Image src={item.img}/>
                <Desc>Name: {item.title}</Desc>
                <Link to={`/product/${item._id}`} className="link">
                <Button>BUY NOW</Button>
                </Link>
              </ListItem>
              ))}
            </List>
            <Link to="/products" className="link">
            <Box1>
              View More
              <ArrowRight/>
            </Box1>
            </Link>
          </Box>
      </Container>
  )
};

export default Products;
