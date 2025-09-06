import ChatBot from 'react-simple-chatbot';
import './App.css';
import { Link } from 'react-router-dom';
import image1 from './mainlogo/WhatsApp Image 2024-02-13 at 10.25.33 PM (1).jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import homeimage from './images/home image2.jpg';
import homeimage2 from './images/homeimage1.jpg'
import Lastdiv from './pagers/Lastdiv';
import React from 'react'
import ReactPlayer from 'react-player'


function App() {
  return (
    <div>
      <>
        <ChatBot
          steps={[
            {
              
              id: '1',
              message: 'welocme to Feathers Badminton Academy , What is your name?',
              trigger: '2',
            },
            {
              id: '2',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: 'Hi {previousValue}, I hope you will enjoy This!',
             trigger:'4'
            },
            {
              id: '4',
              message: 'should i navigate you to register page or contuctus page?',
              trigger: '5',
            },
            {
              id: '5',
              options: [
                { value: 1, label: 'academy timing ', trigger: '6' },
                { value: 2, label: 'contact number', trigger: '7' },
                { value: 3, label: 'EXIT', trigger: '8' },
              ],
            },
            {
              id:'7',
              message:'+919677289131',
              trigger:'5'
            },
            {
              id: '8',
              message: 'Thankyou For Choosing Feathers Badminton Academy',
              end:true,
            },
            {
              id: '6',
              message: 'morning 8am to evening 6pm',
              trigger:'5'
            },
          ]}
          floating={true}
        />
      </>
      <div className="App">
        <div id="navbar">
          <img src={image1} id="logo" />
          <ul>
            <li><Link className='navbarcolor' to={"/"}>HOME</Link></li>
            <li> <Link className='navbarcolor' to={"Register"}>REGISTER</Link></li>
            <li> <Link className='navbarcolor' to={"Achievements"}>ACHIEVEMENTS</Link></li>
            <li><Link className='navbarcolor' to={"Signin"}>ABOUT</Link></li>
            <li><Link className='navbarcolor' to={"Contactus"}>CONTACT US</Link></li>
            <li><Link className='navbarcolor' to={"Gallery"}>GALLERY</Link></li>
          </ul>
        </div>
        <br>
        </br>
        <Container>
          <Row>
            <Col ig={8}>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require('./images/feathers2 (1).jpg')}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require('./images/feathers image 2.jpg')}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require('./images/feathers image4.jpg')}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
        <br>
        </br>
        <div id='afterbooststap'>
          <h1> FEATHERS BADMINTON ACADEMY </h1>
        </div>
        <div id='headingtag'>
          <img src={homeimage} id='homeimage' />
          <p> Expert Coaching :   Our team of experienced coaches are here to guide you every step of the way, whether you're a beginner or a seasoned player. Benefit from personalized instruction tailored to your skill level and goals.<br></br> <br></br> Step onto our meticulously crafted badminton court, where every detail is designed to enhance your playing experience. The court boasts sleek flooring that ensures optimal traction, allowing you to move swiftly and confidently across the surface with every step.

          </p>
        </div>
        <br>
        </br>
        <div id='secondimage'>
          <p>Surrounded by walls adorned with inspirational quotes and images of badminton legends, our court exudes an atmosphere of passion and determination. The spacious layout allows ample room for players to maneuver, fostering intense rallies and strategic gameplay.<br></br><br></br> Under the guidance of our world-class coaches, unlock your full potential and elevate your game to unprecedented levels. From fundamental techniques to advanced strategies, our comprehensive programs cater to every aspect of your development.</p>
          <img src={homeimage2} />
        </div>
        <br></br>
        <div id='videodiv'>
          <div id='sumavideo'>
            <ReactPlayer url='https://youtu.be/50TrFb_KZns?si=WIrfet_hshGwrlK0' width='1300px' height='600px' />
          </div>
        </div>
        <br>
        </br>
        <Lastdiv />
      </div>
    </div>
  );
}

export default App;
