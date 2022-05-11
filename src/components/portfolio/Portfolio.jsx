import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio.PNG";
import IMG2 from "../../assets/portfolio2.PNG";
import IMG3 from "../../assets/portfolio3.PNG"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="pharmeasy" />
          </div>
          <h3>Travelocity Clone</h3>
          <p className="details">
          Travelocity is a leading online travel website where travelers can make airline, hotel, and car rental reservations, book cruises and vacation packages, find information about destinations, and access a range of other travel-related services built by CSS,HTML,JavaScript.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/rameshgudivada9/Travelocity"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://determined-darwin-155a56.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="homedepot" />
          </div>
          <h3>AppleTv+ Clone</h3>
          <p className="details">
          Apple TV streams movies and TV shows to your HDTV.It is like OTT platform built over CSS,HTML,JavaScript.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/rameshgudivada9/AppleTv"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://chic-marigold-63d7ee.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="homedepot" />
          </div>
          <h3>AppleTv+[Full Stack] Clone</h3>
          <p className="details">
          Apple TV streams movies and TV shows to your HDTV.It is like OTT platform built over CSS,HTML,JavaScript,ExpressJs,NodeJs,MongoDB.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/rameshgudivada9/AppleTv-_Fullstack"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://chic-marigold-63d7ee.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="homedepot" />
          </div>
          <h3>YOOX.COM Clone</h3>
          <p className="details">
          YOOX is the world's leading online store for fashion, design and art that last a lifetime and beyond.New Arrivals Every Week to Reinvigorate your Wardrobe, Make the Most of it Now. Shop the Latest Designer Savings Now! A Wide Array of Brands. Secure Payment.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/rameshgudivada9/AppleTv-_Fullstack"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://chic-marigold-63d7ee.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
