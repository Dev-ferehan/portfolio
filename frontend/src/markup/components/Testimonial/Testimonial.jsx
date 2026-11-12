import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';

import ahmedImg from '../../../assets/img/testimonials/testimonials-1.jpg';
import yonasImg from '../../../assets/img/testimonials/testimonials-2.jpg';
import nahomImg from '../../../assets/img/testimonials/testimonials-3.jpg';
import sarahImg from '../../../assets/img/testimonials/testimonials-4.jpg';
import zahraImg from '../../../assets/img/testimonials/testimonials-5.jpg';

function Testimonial() {
  return (
    <>
      <section id="testimonials" className="testimonials section">
        
        <div className="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            speed={600}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView="auto"
            pagination={{
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="init-swiper"
          >
       
            <SwiperSlide>
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>Ferehan is a true problem solver! The speed with which he turned our concept into a real-world application, combined with his modern approach to AI integration, was highly impressive. His focus and discipline throughout the project are exceptional</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <img src={ahmedImg} className="testimonial-img" alt="Ahmed Mohammed" />
                <h3>Ahmed Mohammed</h3>
                <h4>Tech Entrepreneur / E-commerce Manager</h4>
              </div>
            </SwiperSlide>

      
            <SwiperSlide>
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>Working with Ferehan on university lab sessions and group projects at Wollo University has been a great experience. His deep understanding of Full-Stack technologies and his ability to easily debug complex code were the main drivers behind our team's success.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <img src={yonasImg} className="testimonial-img" alt="Yonas Bekele" />
                <h3>Yonas Bekele</h3>
                <h4>Software Engineering Student (Project Partner)</h4>
              </div>
            </SwiperSlide>

          
            <SwiperSlide>
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>During his training sessions, Ferehan demonstrated immense coding consistency and an eagerness to learn. The dedication he showed while building functional clones of major platforms like Amazon and Netflix highlights his true passion for technology. He is an engineer with a bright future ahead.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <img src={nahomImg} className="testimonial-img" alt="Nahom Tesfaye" />
                <h3>Nahom Tesfaye</h3>
                <h4>Senior Full-Stack Developer (Mentor)</h4>
              </div>
            </SwiperSlide>

         
            <SwiperSlide>
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>Working with Ferehan remotely was incredibly seamless. The responsive user interface he built using Tailwind CSS is highly engaging and works flawlessly across all mobile and desktop devices. His communication skills and integrity are outstanding.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <img src={sarahImg} className="testimonial-img" alt="Sarah Jenkins" />
                <h3>Sarah Jenkins</h3>
                <h4>Startup Founder</h4>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>I closely follow Ferehan's daily coding consistency challenge and the growth of Fayra Tech on Telegram. The transparent way he documents his real-world project progress and his laser-focus on building problem-solving applications show that he is a rising talent to watch in the Ethiopian tech landscape.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <img src={zahraImg} className="testimonial-img" alt="Zahra Kedir" />
                <h3>Zahra Kedir</h3>
                <h4>Tech Enthusiast</h4>
              </div>
            </SwiperSlide>

      
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>

      </section>
    </>
  );
}

export default Testimonial;