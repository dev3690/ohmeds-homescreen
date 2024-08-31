import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/ReviewsCarousel.css';

const ReviewsCarousel = () => {
  const reviews = [
    {
      text: "Perfect. The more I use this app, the more I fall in love with it. Doctors are very professional and customer friendly.",
      author: "Subhash Sehgal",
      title: "Doctors are very professional and customer friendly"
    },
    {
      text: "Excellent app. Have used this regularly and found it very easy to use. All info is readily available and the response after order placement for validation of medicines required was prompt.",
      author: "Snehal Shah",
      title: "Used the app and found it easy to use"
    },
    {
      text: "Truemeds is the best... during the Lockdown, this app does not reduce the discount, which shows the customer-friendly nature of the TrueMeds. Thank You!!",
      author: "Laksh Kankariya",
      title: "Best, Very customer friendly app by nature"
    },
    {
      text: "Great service and competitive prices. The app is user-friendly and the delivery is always on time. Highly recommended!",
      author: "Priya Patel",
      title: "Reliable service with competitive prices"
    },
    {
      text: "I've been using this app for months now. The customer support is outstanding, and they always have the medications I need in stock.",
      author: "Rahul Sharma",
      title: "Outstanding customer support and stock availability"
    },
    {
      text: "The consultation feature is a game-changer. I can get professional advice without leaving my home. Thank you for this amazing service!",
      author: "Anita Desai",
      title: "Convenient online consultations"
    },
    {
      text: "I appreciate the reminders for refills. It helps me stay on top of my medication schedule. The app is truly designed with the user in mind.",
      author: "Vikram Singh",
      title: "Helpful medication reminders"
    },
    {
      text: "The discounts are real and significant. I've saved a lot of money using this app for my regular prescriptions. Kudos to the team!",
      author: "Meera Reddy",
      title: "Genuine discounts on prescriptions"
    }
  ];

  return (
    <section className="my-4 reviews-section">
      <h2 className="text-center mb-4">What our customers have to say</h2>
      <p className="text-center text-muted mb-5">Customer Testimonials</p>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <Card className="review-card h-100">
              <Card.Body className="d-flex flex-column">
                <h5 className="review-title mb-3">{review.title}</h5>
                <Card.Text className="review-text flex-grow-1">
                  {review.text}
                </Card.Text>
                <footer className="blockquote-footer mt-auto">
                  {review.author}
                </footer>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ReviewsCarousel;
