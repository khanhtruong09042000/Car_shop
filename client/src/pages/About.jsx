import styled from "styled-components"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div`

`
const Wapper = styled.div`
    width: 100%;
    padding-top: 100px;
    height: 100%;
    display: flex;
    margin-bottom: 20px;
`
const Left = styled.div`
    flex: 1;
    padding: 0px 30px;
`
const Title = styled.h1`
 font-family: 'Oswald', sans-serif;
 font-size: 50px;
 margin-bottom: 10px;
`
const Desc = styled.div`
    text-align: justify;
    font-family: 'Merriweather', serif;
    color: #837c7c;
`
const Right = styled.div`
    flex: 1;
    padding-right: 30px;
`
const Image = styled.img`
    width: 100%;
    height: 100vh;
    object-fit: cover;
    border-radius: 10px;
`

const About = () => {
  return (
      <Container>
          <Navbar/>
          <Wapper>
              <Left>
                <Title>About Us</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, quaerat rerum beatae iste maxime laboriosam non quasi pariatur, eos, consequatur reprehenderit. Illo ipsam repellendus, at a quo repellat dolorum aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eius facere officia, vel sint repellat ipsam laboriosam, nihil iste temporibus quisquam saepe nam! Reprehenderit odio obcaecati quisquam, id ipsa illo.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, quaerat rerum beatae iste maxime laboriosam non quasi pariatur, eos, consequatur reprehenderit. Illo ipsam repellendus, at a quo repellat dolorum aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eius facere officia, vel sint repellat ipsam laboriosam, nihil iste temporibus quisquam saepe nam! Reprehenderit odio obcaecati quisquam, id ipsa illo.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, quaerat rerum beatae iste maxime laboriosam non quasi pariatur, eos, consequatur reprehenderit. Illo ipsam repellendus, at a quo repellat dolorum aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eius facere officia, vel sint repellat ipsam laboriosam, nihil iste temporibus quisquam saepe nam! Reprehenderit odio obcaecati quisquam, id ipsa illo.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, quaerat rerum beatae iste maxime laboriosam non quasi pariatur, eos, consequatur reprehenderit. Illo ipsam repellendus, at a quo repellat dolorum aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eius facere officia, vel sint repellat ipsam laboriosam, nihil iste temporibus quisquam saepe nam! Reprehenderit odio obcaecati quisquam, id ipsa illo.
                </Desc>
              </Left>
              <Right>
                <Image src="https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
              </Right>
          </Wapper>
          <Footer/>
      </Container>
  )
};

export default About;
