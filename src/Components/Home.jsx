// import React from 'react';
// import { Container, Row, Col, Button, Carousel, Card } from 'react-bootstrap';
// import offer1 from '../Assets/Offers/offer1.avif';
// import logo from '../Assets/ohmeds-logo.jpg';

// const YourComponent = () => {
//   return (
//     <Container fluid style={{ backgroundColor: '#f8f9fa' }}>
      
//       <header className="d-flex justify-content-between align-items-center p-3" style={{ backgroundColor: '#1abc9c' }}>
//         <img src={logo} alt="Logo" style={{ height: '40px' }} />
//         <div className="d-flex align-items-center">
//           <Button variant="light" className="me-2">Login</Button>
//           <Button variant="light"><i className="bi bi-cart"></i> Cart (2)</Button>
//         </div>
//       </header>

//       <section className="my-4">
//         <Container>
//           <Row>
//             <Col>
//               <input type="text" placeholder="Search for medicine" className="form-control mb-4" />
//               <Carousel>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100"
//                     src={offer1}
//                     alt="Offer 1"
//                   />
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100"
//                     src={offer1}
//                     alt="Offer 2"
//                   />
//                 </Carousel.Item>
//               </Carousel>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       <section className="my-4">
//         <Container>
//           <Row>
//             <Col xs={12} md={6} className="d-flex align-items-center">
//               <img src={offer1} alt="Contact" className="img-fluid" />
//             </Col>
//             <Col xs={12} md={6}>
//               <Card>
//                 <Card.Body>
//                   <Card.Title>Call us and Order</Card.Title>
//                   <Card.Text>
//                     Working hours 9am to 9pm
//                   </Card.Text>
//                   <Button variant="primary">Call us</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       <section className="my-4">
//         <Container>
//           <h3 className="text-center">What our customers have to say</h3>
//           <Carousel>
//             <Carousel.Item>
//               <Card className="text-center">
//                 <Card.Body>
//                   <Card.Text>
//                     "Provides doorstep delivery. Can order from anywhere and anytime."
//                     "Provides doorstep delivery. Can order from anywhere and anytime."
//                     "Provides doorstep delivery. Can order from anywhere and anytime."
//                   </Card.Text>
//                   <footer className="blockquote-footer">Subhash Sehgal</footer>
//                 </Card.Body>
//               </Card>
//             </Carousel.Item>
//             <Carousel.Item>
//               <Card className="text-center">
//                 <Card.Body>
//                   <Card.Text>
//                     "Amazing service and timely delivery."
//                     "Amazing service and timely delivery."
//                     "Amazing service and timely delivery."
//                   </Card.Text>
//                   <footer className="blockquote-footer">Anita Sharma</footer>
//                 </Card.Body>
//               </Card>
//             </Carousel.Item>
//           </Carousel>
//         </Container>
//       </section>

//       <footer className="text-center py-4" style={{ backgroundColor: '#2c3e50', color: '#fff' }}>
//         &copy; 2024 YourCompany. All rights reserved.
//       </footer>
//     </Container>
//   );
// };

// export default YourComponent;



import React from 'react';
import Navbar from './Navbar';
import OfferCarousel from './OfferCarousel';
import Text1 from './Text1';
import Text2 from './Text2';
import ContactUs from './ContactUs';
import ReviewsCarousel from './ReviewsCarousel';
import Footer from './Footer';
// import { Title } from 'reasct-bootstrap';
const Home = () => {
  return (
    <div style={{ backgroundColor: '#f8f9fa' }}>
      {/* <Navbar /> */}
      <Text2 />
      <OfferCarousel />
      <ContactUs />
      <Text1 />
      <ReviewsCarousel />
      <Footer />
    </div>
  );
};

export default Home;
