import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { portfolioSections, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        
        {portfolioSections.map((section, sectionIndex) => {
          // Only show section if it has projects
          if (!section.projects || section.projects.length === 0) {
            return null;
          }

          return (
            <div key={sectionIndex} className="portfolio-section mb-5">
              <Row className="mb-4">
                <Col lg="12">
                  <h2 className="section-title">{section.title}</h2>
                  <hr className="t_border my-3 ml-0 text-left" />
                </Col>
              </Row>
              <div className="po_items_ho">
                {section.projects.map((project) => {
                  const imagePath = `${process.env.PUBLIC_URL || ''}${project.img}`;
                  return (
                    <div key={project.id} className="po_item">
                      <img 
                        src={imagePath} 
                        alt={project.title}
                        onError={(e) => {
                          // Fallback to placeholder if image doesn't exist
                          e.target.src = "https://via.placeholder.com/400x300?text=Project+Image";
                        }}
                      />
                      <div className="content">
                        <h3 className="project-title">{project.title}</h3>
                        <p>{project.shortDescription}</p>
                        <Link 
                          to={`/portfolio/${project.id}`}
                          className="view-details-btn"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </Container>
    </HelmetProvider>
  );
};
