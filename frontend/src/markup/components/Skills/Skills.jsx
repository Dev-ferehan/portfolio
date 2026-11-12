import React from 'react'

function Skills() {
  return (
    <>
      <section id="skills" className="skills section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Skills</h2>
          <p>A disciplined and solution-driven Software Engineering student dedicated to bridging full-stack web development with intelligent AI solutions, transforming complex problems into clean, high-performance code.</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row skills-content skills-animation">
            <div className="col-lg-6">

              <div className="progress">
                <span className="skill"><span>HTML</span> <i className="val">100%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill"><span>TailWind CSS / Bootstrap CSS</span> <i className="val">95%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{ width: '95%' }}></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill"><span>Node.js / JavaScript</span> <i className="val">85%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: '85%' }}></div>
                </div>
              </div>

            </div>

            <div className="col-lg-6">

              <div className="progress">
                <span className="skill"><span>Node js</span> <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill"><span>MongoDB / MySQL</span> <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill"><span>JWT</span> <i className="val">75%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '75%' }}></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills