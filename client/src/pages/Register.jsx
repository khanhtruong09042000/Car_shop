import { ArrowLeft } from "@material-ui/icons";
import styled from "styled-components";
import {Link} from "react-router-dom"
import { useState } from "react";
import { publicRequest } from "../requestMethod";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("https://images.pexels.com/photos/18296/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    font-family: 'League Gothic', sans-serif;
`
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    border: 1px solid #cfcece;
    border-radius: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    &:hover{
      filter: brightness(150%);
  }
`
const Box = styled.div`
position: absolute;
top: 50px;
left: 40px;
  background-color: white;
  font-family: 'League Gothic', sans-serif;
  letter-spacing: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 10px;
  color: black;
  cursor: pointer;
  &:hover{
    color: white;
    background-color: #858080;
  }
`
const Span = styled.div`
    color: red;
    margin-top: 20px;
    font-size: 20px;
`
const Register = () => {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cPassword, setCPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = async(e)=>{
    e.preventDefault()
    setError(false)
    try{
      const res = await publicRequest.post("/auth/register",
      {
        name,lastName,username,email,password,cPassword
      }
      )
     res.data && window.location.replace("/login")
    }catch(err){ 
      setError(true)
    } 
  }

  return (
      <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form onSubmit={handleSubmit}>
                    <Input placeholder="name" onChange={(e)=>setName(e.target.value)}/>
                    <Input placeholder="last name" onChange={(e)=>setLastName(e.target.value)}/>
                    <Input placeholder="username" onChange={(e)=>setUserName(e.target.value)}/>
                    <Input placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
                    <Input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
                    <Input type="password" placeholder="confirm password" onChange={(e)=>setCPassword(e.target.value)}/>
                    <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button type="submit">CREATE</Button>
                </Form>
                {
          error &&
          <Span>
            Something went wrong!
          </Span>
        }
            </Wrapper>
            <Link to="/" className="link">
            <Box>
          <ArrowLeft/>
          HOME
        </Box>
        </Link>
      </Container>
  )
};

export default Register;
