import styled from "styled-components"
import StripeCheckout from 'react-stripe-checkout';
import { useEffect, useState } from "react";
import {useRoutes} from "react-router"
import axios from "axios";

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Button = styled.button`
    border: none;
    width: 120;
    border-radius: 5px;
    background-color: black;
    color: white;
    padding: 20px;
    font-weight: 600;
    cursor: pointer;
`
const KEY = "pk_test_51KNDGLFMs4KtlrW3rgS1OIxkLrprkUNGdmHvOt9VUxVjfHaWiacHfe9ZW4r3bQbtTgeYh5TGjWTDYjqYpZpfHGaB00LlobqrmG"

const Pay = () => {
    const [stripeToken,setStripeToken] = useState(null)
    // const history = useRoutes()
    const onToken = (token)=>{
       setStripeToken(token)
    }
    useEffect(()=>{
        const makeRequest = async()=>{
            try{
                const res = await axios.post(
                    // "http://localhost:5000/api/checkout/payment",
                    {
                        tokenId:stripeToken.id,
                        amount:2000
                    }
                )
                console.log(res.data);
            }catch(err){
                console.log(err);
            }
        }
        stripeToken && makeRequest()
    },[stripeToken])

  return (
      <Container>
          {stripeToken ? (
              <span>Processing. Please wait...</span>
          ) : (
          <StripeCheckout
            name="Cars Shop"
            image="https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            billingAddress
            shippingAddress
            description="Your total is $20"
            amount={2000}
            token={onToken}
            stripeKey= {KEY}
          >
          <Button>
              PAY NOW
          </Button>
          </StripeCheckout>
          )}
      </Container>
  )
};

export default Pay;
