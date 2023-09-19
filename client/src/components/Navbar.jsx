import styled from "styled-components"
import {AccountCircle, ExitToApp, HowToReg, ShoppingCartOutlined, VpnKey} from "@material-ui/icons"
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../context/apiCall"
import { Badge } from "@material-ui/core"

const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: white;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 5px rgb(187, 187, 187);
    position: fixed;
    z-index: 99;
`
const Logo = styled.div`
    flex: 1;
    text-align: center;
    font-family: 'League Gothic', sans-serif;
    font-size: 50px;
`
const Menu = styled.div`
    flex: 1;
    display: flex;
`
const MenuItem = styled.div`
    font-family: 'Oswald', sans-serif;
    margin-right: 60px;
    color: #afa7a7;
    cursor: pointer;
    &:hover{
        color: black;
    }
`
const Info = styled.div`
   flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`
const List = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: 0px 15px;
padding: 5px 12px;
border: 2px solid black;
cursor: pointer;
color: black;
&:hover{
    background-color: black;
    color: white;
}
`
const Name = styled.div`
margin: 0px 10px 0px 20px;
    width: 25px;
  height: 25px;
  font-size: 20px;
  border: 1px solid;
  border-radius: 50%;
  color: #e75757;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const Navbar = () => {
    const user = useSelector((state) => state.user.currentUser);
    const quanity = useSelector((state)=> state.cart.quanity)
    const dispatch = useDispatch()
    const handleClick = ()=>{
        logout(dispatch)
      }

  return (
      <Container>
         <Logo>CARS SHOP</Logo>
         <Menu>
             <Link to="/" className="link">
             <MenuItem>Home</MenuItem>
             </Link>
             <Link to="/products" className="link">
             <MenuItem>Products</MenuItem>
             </Link>
             <Link to="/about" className="link">
             <MenuItem>About</MenuItem>
             </Link>
             <Link to="/contact" className="link">
             <MenuItem>Contact</MenuItem>
             </Link>
         </Menu>
         {user ? (
         <Info>
             <Name>< AccountCircle/></Name>
             <Link to={`/cartergory/${user._id}`} className="link">
             <List>
                 Cart
                 <Badge badgeContent={quanity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
             </List>
             </Link>
             <List onClick={handleClick}>
                 Logout
                 <ExitToApp/>
             </List>
         </Info>
         ) : (
         <Info>
         <Link to="/register" className="link">
             <List>
                 <HowToReg/>
                 Register
             </List>
             </Link>
             <Link to="/login" className="link">
             <List>
                 <VpnKey/>
                 Login
             </List>
             </Link>
         </Info>
         )}
      </Container>
  )
};

export default Navbar;
