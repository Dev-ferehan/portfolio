import React from "react";
import profile from "../../../assets/img/profile-img.jpg";
function About() {
  return (
    <>
      <section id="about" className="about section">
        
        <div className="container section-title" data-aos="fade-up">
          <h2>About</h2>
          <p>
            I am a Full-Stack Developer aspiring to become a new hope in the
            Ethiopian technology sector. My highly focused and disciplined
            problem solving approach aims to solve complex social and business
            problems sustainably using modern AI technologies. Based on my
            potential to transform my country and the logic I have accumulated
            in technology, I will build a world-class technology company to
            create a bright digital future for Ethiopia.
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src={profile} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 content">
              <h2>Full-Stack Web Developer.</h2>
              <p className="fst-italic py-3"></p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Degree:</strong>{" "}
                      <span>B.Sc.in Software Engineering</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong> City:</strong> <span>Dessie, Ethiopia</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Email:</strong>{" "}
                      <span>ahmedferehan7@gmail.com </span>{" "}
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong> Freelance/Internship:</strong>{" "}
                      <span> Available Trainee Roles </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
