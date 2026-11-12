import React from 'react'

function Services() {
  return (
    <>
      
    <section id="services" className="services section">

   
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Delivering cutting-edge, AI-powered software solutions and robust full-stack applications tailored to solve real-world problems and elevate digital experiences.</p>
      </div>

      <div className="container">

        <div className="row gy-4">

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi-braces-asterisk icon "></i></div>
              <h4><a href="" className="stretched-link">AI Integration</a></h4>
              <p>Making applications intelligent by connecting them to modern artificial intelligence APIs</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi-code-slash icon"></i></div>
              <h4><a href="" className="stretched-link">Full-Stack Web Development</a></h4>
              <p>Creating fast and reliable websites built with React, Node.js.</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-database-fill icon"></i></div>
              <h4><a href="" className="stretched-link">Database Management</a></h4>
              <p>Designing secure MySQL and MongoDB databases.</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi-window-sidebar icon"></i></div>
              <h4><a href="" className="stretched-link">UI/UX Responsive Design</a></h4>
              <p>Create beautiful pages that work equally well on any phone or computer with Tailwind CSS and Bootstrap.</p>
            </div>
          </div>

        </div>

      </div>

    </section>
    </>
  )
}

export default Services
