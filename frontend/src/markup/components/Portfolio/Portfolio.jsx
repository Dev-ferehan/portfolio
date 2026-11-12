import React,{useEffect} from 'react'
import blog from '../../../assets/img/masonry-portfolio/al-poweredapp-1.jpg'
import netflix from '../../../assets/img/masonry-portfolio/netflix-clone.jpg'
import amazon from '../../../assets/img/masonry-portfolio/amazon-clone.jpg'
import evangadiForum from '../../../assets/img/masonry-portfolio/evangadiForum.jpg'
import zoomClone from '../../../assets/img/masonry-portfolio/zoom-clone.jpg'
import './portfolio.module.css'
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import GLightbox from 'glightbox';

import 'glightbox/dist/css/glightbox.min.css';
function Portfolio() {
    useEffect(() => {
       
        const lightbox = GLightbox({
          selector: '.glightbox'
        });
    
   
        return () => {
          lightbox.destroy();
        };
      }, []);
    useEffect(() => {
   
        const isotopeContainer = document.querySelector('.isotope-container');
        
        if (isotopeContainer) {
        
          const imgLoad = imagesLoaded(isotopeContainer);
          
          imgLoad.on('always', () => {
            const iso = new Isotope(isotopeContainer, {
              itemSelector: '.isotope-item',
              layoutMode: 'masonry',
              filter: '*',
              sortBy: 'original-order'
            });
    
      
            const filterItems = document.querySelectorAll('.portfolio-filters li');
            filterItems.forEach((el) => {
              el.addEventListener('click', function () {
                document.querySelector('.portfolio-filters .filter-active')?.classList.remove('filter-active');
                this.classList.add('filter-active');
                const filterValue = this.getAttribute('data-filter');
                iso.arrange({ filter: filterValue });
              });
            });
          });
        }
      }, [])
  return (
    <>
      <section id="portfolio" className="portfolio section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
        </div>

        <div className="container">
          <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

            <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
              <li data-filter="*" className="filter-active">All Projects</li>
              <li data-filter=".filter-app">AI-Powered</li>
              <li data-filter=".filter-product">Full-Stack</li>
              <li data-filter=".filter-branding">E-Commerce</li>
            </ul>

            <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

              {/* 1. AI-Powered Blog Application */}
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                
                  <img src={blog} className="img-fluid" alt="AI-Powered Blog Application" />
                  <div className="portfolio-info">
                    <h4>AI-Powered Blog Application</h4>
                    <a href={blog} title="AI-Powered Blog Application" data-gallery="portfolio-gallery-app" className="glightbox preview-link">
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a href="/project-details?id=ai-blog" title="More Details" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
             
              </div>

              {/* 2. Netflix Clone */}
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
            
                  <img src={netflix} className="img-fluid" alt="Netflix Clone" />
                  <div className="portfolio-info">
                    <h4>Netflix Clone</h4>
                    <a href={netflix} title="Netflix Clone" data-gallery="portfolio-gallery-app" className="glightbox preview-link">
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a href='/project-details?id=netflix-clone' title="More Details" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
            
              </div>

              {/* 3. Amazon Website Clone */}
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
          
                  <img src={amazon} className="img-fluid" alt="Amazon Website Clone" />
                  <div className="portfolio-info">
                    <h4>Amazon Website Clone</h4>
                    <a href={amazon} title="Amazon Website Clone"  data-gallery="portfolio-gallery-app" className="glightbox preview-link">
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a href='/project-details?id=amazon-clone' title="More Details" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
              
                </div>
              </div>

              {/* 4. Evangadi Forum */}
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
            
                  <img src={evangadiForum} className="img-fluid" alt="Evangadi Forum" />
                  <div className="portfolio-info">
                    <h4>Evangadi Forum</h4>
                    <a href={evangadiForum} title="Evangadi Forum" data-gallery="portfolio-gallery-app" className="glightbox preview-link">
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a href="/project-details?id=evangadi-forum" title="More Details" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
           
              </div>

              {/* 5. Zoom Clone */}
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
          
                  <img src={zoomClone} className="img-fluid" alt="Zoom Clone" />
                  <div className="portfolio-info">
                    <h4>Zoom Clone</h4>
                    <a href={zoomClone} title="Zoom Clone" data-gallery="portfolio-gallery-product" className="glightbox preview-link">
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a href="/project-details?id=zoom-clone" title="More Details" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
        
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio