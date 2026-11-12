import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { projectsData } from '../../data/projectData.js'; 

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function ProjectDetail() {
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get('id');

  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="container text-center py-5">
        <h2>Project Not Found</h2>
        <p>The project you are looking for does not exist.</p>
        <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
      </div>
    );
  }

  const projectImages = project.images || [];

  return (
    <div className="portfolio-details-page">
      {/* Page Title */}
      <div className="page-title light-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Project Details</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li className="current">Project Details</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Portfolio Details Section */}
      <section id="portfolio-details" className="portfolio-details section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">

            {/* Slider Column - Dynamic Images */}
            <div className="col-lg-8">
              <div className="portfolio-details-slider">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  loop={true}
                  speed={600}
                  autoplay={{ delay: 5000 }}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                >
                  {projectImages.map((imgSrc, index) => (
                    <SwiperSlide key={index}>
                      <img src={imgSrc} className="img-fluid" alt={`Project Slide ${index + 1}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            {/* Info Column */}
            <div className="col-lg-4">
              <div className="portfolio-info" data-aos="fade-up" data-aos-delay="200">
                <h3>Project information</h3>
                <ul>
                  <li><strong>Category</strong>: <span>{project.category}</span></li>
                  <li><strong>Developer</strong>: Ferehan Ahmed</li>
                  <li><strong>Tech Stack</strong>: <span>{project.techStack}</span></li>
                  <li>
                    <strong>Project URL</strong>:{' '}
                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </li>
                </ul>
              </div>

              <div className="portfolio-description" data-aos="fade-up" data-aos-delay="300">
                <h2>{project.title}</h2>
                <p>{project.desc}</p>
                <p>{project.desc2}</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;
