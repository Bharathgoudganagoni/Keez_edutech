import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const reviews = [
    { name: 'Sarah Jenkins', course: 'Full Stack Web Dev', text: 'The curriculum is top-notch and the mentorship helped me land my first tech job at a Fortune 500 company within 3 months of graduation.', rating: 5 },
    { name: 'Michael Chen', course: 'AI & Prompt Engineering', text: 'I loved the practical approach. Building real-world AI applications gave me the confidence to ace my interviews.', rating: 5 },
    { name: 'Priya Patel', course: 'Data Science Pro', text: 'The internship opportunity provided by KeeZ-Edutech was the game-changer for my career. Highly recommend their programs!', rating: 4 },
    { name: 'David Smith', course: 'UI/UX Design', text: 'Amazing platform with clear, structured learning paths. The community and the instructors are incredibly supportive.', rating: 5 },
  ];

  return (
    <section className="section-padding" style={{ background: '#F1F5F9' }}>
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Success <span className="gradient-text">Stories</span></h2>
          <p className="section-subtitle">Hear from our alumni who have successfully transitioned into fulfilling tech careers.</p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{ paddingBottom: '3rem' }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div className="client-info">
                  <div className="client-img">{review.name.charAt(0)}</div>
                  <div className="client-details">
                    <h4>{review.name}</h4>
                    <p>{review.course}</p>
                  </div>
                </div>
                <div className="stars">
                  {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
                </div>
                <p className="testimonial-text">"{review.text}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
