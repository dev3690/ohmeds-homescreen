// import React from 'react';
// import { Carousel, Container, Row, Col } from 'react-bootstrap';
// import offer1 from '../Assets/Offers/offer1.avif';
// import offer2 from '../Assets/Offers/offer2.avif';
// import '../Styles/OfferCarousel.css';

// const OfferCarousel = () => {
//   return (
//     <section className="offer-section my-4">
//       <Container>
//         <Row>
//           <Col>
//             <Carousel
//               indicators={true} // Enable indicators
//               controls={true}
//               interval={4000}
//               className="offer-carousel"
//             >
//               <Carousel.Item>
//                 <img
//                   className="d-block w-100 rounded"
//                   src={offer1}
//                   alt="Offer 1"
//                 />
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   className="d-block w-100 rounded"
//                   src={offer2}
//                   alt="Offer 2"
//                 />
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   className="d-block w-100 rounded"
//                   src={offer1}
//                   alt="Offer 3"
//                 />
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   className="d-block w-100 rounded"
//                   src={offer2}
//                   alt="Offer 4"
//                 />
//               </Carousel.Item>
//               {/* Add more items as needed */}
//             </Carousel>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default OfferCarousel;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../Styles/OfferCarousel.css';

import { Pagination } from 'swiper/modules';

import offer1 from '../Assets/Offers/offer1.avif';
import offer2 from '../Assets/Offers/offer2.avif';

const OfferCarousel = () => {
  return (
    <section className="offer-section my-4">
      <Swiper
        slidesPerView={2} // Default to showing 2 slides at a time on desktop
        spaceBetween={10}  // Space between slides
        pagination={{
          clickable: true,
        }}
        breakpoints={{
        0: {
          slidesPerView: 1, // Show 1 review on mobile view
        },
          640: {
            slidesPerView: 1, // Show 1 slide at a time on mobile
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2, // Show 2 slides at a time on tablet and above
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="d-block w-100 rounded"
            src={offer1}
            alt="Offer 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="d-block w-100 rounded"
            src={offer2}
            alt="Offer 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="d-block w-100 rounded"
            src={offer1}
            alt="Offer 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="d-block w-100 rounded"
            src={offer2}
            alt="Offer 4"
          />
        </SwiperSlide>
        {/* Add more SwiperSlide components as needed */}
      </Swiper>
    </section>
  );
};

export default OfferCarousel;
