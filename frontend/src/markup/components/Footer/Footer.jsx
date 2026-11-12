import React from 'react'

function Footer() {
  return (
    <>
        <footer id="footer" className="footer light-background">
    <div className="container">
      <h3 className="sitename">Ferehan Ahmed</h3>
      <p>Building Ethiopia's Digital Future Through Intelligent Code | Founder of Fayra Tech. </p>
      <div className="social-links d-flex justify-content-center">
        <div className="social-links d-flex justify-content-center">
          <a href="https://github.com/Dev-ferehan" target="_blank"><i className="bi bi-github"></i></a>
          <a href="https://www.linkedin.com/in/ferehan-ahmed-bb001a323/" target="_blank"><i className="bi bi-linkedin"></i></a>
          <a href="https://t.me/FayraTech" target="_blank"><i className="bi bi-telegram"></i></a>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <span>Copyright</span> <strong className="px-1 sitename">Ferehan Ahmed</strong> <span>All Rights Reserved</span>
        </div>
        
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer
