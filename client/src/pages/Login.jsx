import styled from "styled-components";
import { ArrowLeft } from "@material-ui/icons"
import {Link} from "react-router-dom"
import { useState } from "react";
import { login } from "../context/apiCall";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("https://images.pexels.com/photos/1397751/pexels-photo-1397751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  font-family: 'League Gothic', sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover{
      filter: brightness(150%);
  }
`;

const Link1 = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  font-family: 'Lobster', cursive;
  &:hover{
      color: green;
  }
`;
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

const Login = () => {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const { isFetching,error } = useSelector((state) => state.user);

  const handleClick = (e)=>{
    e.preventDefault()
    login(dispatch, {username,password})
  }


  return (
      <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" onChange={(e)=>setUserName(e.target.value)}/>
          <Input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
          <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
          <Link1>DO NOT YOU REMEMBER THE PASSWORD?</Link1>
          <Link to="/register" className="link">
          <Link1>CREATE A NEW ACCOUNT</Link1>
          </Link>
        </Form>
        {
          error &&
          <ToastContainer />
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

export default Login;
