import { useState } from "react";
import styled from "styled-components"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { publicRequest } from "../requestMethod";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`

`
const Wapper = styled.div`
    width: 100%;
    padding-top: 100px;
    display: flex;
    margin-bottom: 20px;
    align-items: center;
`
const Left = styled.div`
    flex: 1;
    padding-left: 30px;
`
const Image = styled.img`
    width: 100%;
    border-radius: 10px;
`
const Right = styled.div`
    flex: 1;
`
const Title = styled.h1`
    margin-left: 50px;
    font-family: 'League Gothic', sans-serif;
    font-size: 50px;
    letter-spacing: 3px;
`
const Form = styled.form`
    margin: 20px 60px 0px 50px ;
    display: flex;
    flex-direction: column;
    border-top: 1px solid black;
`
const Desc = styled.h2`
    font-family: 'Lobster', cursive;
    margin: 10px 0px;
`
const Input = styled.input`
    padding: 10px 0px 10px 5px;
`
const TextArea = styled.textarea`
    height: 120px;
    resize: none;
    margin-bottom: 20px;
    font-size: 20px;
    padding-left: 5px;
`
const Button = styled.button`
    width: 40%;
  border: 1px solid teal;
  padding: 10px 15px;
  background-color: white;
  color: teal;
  cursor: pointer;
    font-size: 20px;
  &:hover{
    background-color: teal;
  color: white;
  }
`

const Contact = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [comment,setComment] = useState("")
    const [success, setSuccess] = useState(false)

    const handleSubmit = async(e)=>{
        e.preventDefault()
        setSuccess(true)
        try{
          const res = await publicRequest.post("/email",
          {
            name,email,comment
          }
          )
         console.log(res.data);
        }catch(err){  
            console.log(err);
        } 
        toast.success(" Email has been sent...!",{
            position: "bottom-center"
        });
      }

  return (
      <Container>
          <Navbar/>
          <Wapper>
              <Left>
                  <Image src="https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
              </Left>
              <Right>
                 <Title>Have any questions?</Title>
                  <Form onSubmit={handleSubmit}>
                      <Desc>Full Name:</Desc>
                      <Input placeholder="Enter name..." onChange={(e)=>setName(e.target.value)}/>
                      <Desc>Email Address:</Desc>
                      <Input placeholder="Enter email..." onChange={(e)=>setEmail(e.target.value)}/>
                      <Desc>Comment:</Desc>
                      <TextArea placeholder="Enter comment..." onChange={(e)=>setComment(e.target.value)}/>
                      <Button type="submit">Send Message</Button>
                  </Form>
                  {
          success &&
          <ToastContainer />
        }
              </Right>
          </Wapper>
          <Footer/> 
      </Container>
  )
};

export default Contact;
