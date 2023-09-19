import styled from "styled-components"
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: black;
    color: white;
`
const Left = styled.div`
flex: 1;
    padding: 20px;
`
const Logo = styled.h1`
    font-family: 'League Gothic', sans-serif;
    margin: 10px 0px 10px 10px;
    letter-spacing: 3px;
`
const Desc = styled.p`
    margin:0px 10px;
    text-align: justify;
`
const Icon = styled.div`
    display: flex;
    margin: 20px 0px 0px 10px;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
      <Container>
          <Left>
            <Logo>Cars Shop</Logo>
            <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ad tenetur laborum praesentium numquam commodi neque corrupti eos quibusdam eveniet omnis, rerum cum quas, necessitatibus amet ducimus dignissimos atque similique?</Desc>
            <Icon>
            <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest/>
                    </SocialIcon>
            </Icon>
          </Left>
          <Center>
          <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
          </Center>
          <Right>
          <Title>Contact</Title>
              <ContactItem><Room style={{marginRight:"10px"}}/> 622 Dixie Path , South TobinChester 98336</ContactItem>
              <ContactItem><Phone style={{marginRight:"10px"}}/> +1 234 56 78</ContactItem>
              <ContactItem><MailOutline style={{marginRight:"10px"}}/> Contact@KhanhTruong.com</ContactItem>
              <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
          </Right>
      </Container>
  )
};

export default Footer;
