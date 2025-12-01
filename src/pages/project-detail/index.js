import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { portfolioSections, meta } from "../../content_option";
import "./style.css";

export const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    // Find the project across all sections
    let foundProject = null;
    for (const section of portfolioSections) {
      foundProject = section.projects.find((p) => p.id === projectId);
      if (foundProject) break;
    }

    if (foundProject) {
      setProject(foundProject);
      // Set main image as first image or use img if images array is empty
      if (foundProject.images && foundProject.images.length > 0) {
        setSelectedImage(0);
      }
    } else {
      // Project not found, redirect to portfolio
      navigate("/portfolio");
    }
  }, [projectId, navigate]);

  if (!project) {
    return null;
  }

  return (
    <HelmetProvider>
      <Container className="About-header project-detail-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{project.title} | {meta.title}</title>
          <meta name="description" content={project.shortDescription} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="12">
            <Link to="/portfolio" className="back-link">
              ← Back to Portfolio
            </Link>
            <h1 className="display-4 mb-4 mt-3">{project.title}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row>
          <Col lg="8" className="mb-4">
            {/* Show YouTube video embed for final year project, microservices app, and use videoLink for residence management */}
            {((project.id === "final-year-project" || project.id === "microservices-app") && project.demoLink) || (project.id === "residence-management" && project.videoLink) ? (
              <div className="project-video-container">
                <div className="video-wrapper">
                  <iframe
                    width="100%"
                    height="500"
                    src={(project.id === 'residence-management' ? project.videoLink : project.demoLink).replace('watch?v=', 'embed/').split('&')[0]}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="video-note mt-3">
                  <a href={project.id === 'residence-management' ? project.videoLink : project.demoLink} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    Watch on YouTube ↗
                  </a>
                </p>
              </div>
            ) : (
              <>
                <div className="project-main-image">
                  <img
                    src={`${process.env.PUBLIC_URL || ''}${project.images && project.images.length > 0 ? project.images[selectedImage] : project.img}`}
                    alt={project.title}
                    onError={(e) => {
                      // Fallback to main image if gallery image doesn't exist
                      const fallbackPath = `${process.env.PUBLIC_URL || ''}${project.img}`;
                      if (e.target.src !== fallbackPath) {
                        e.target.src = fallbackPath;
                      } else {
                        e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found";
                      }
                    }}
                  />
                </div>

                {project.images && project.images.length > 1 && (
                  <div className="project-image-gallery">
                    {project.images.map((image, index) => (
                      <div
                        key={index}
                        className={`gallery-thumb ${selectedImage === index ? 'active' : ''}`}
                        onClick={() => setSelectedImage(index)}
                      >
                        <img
                          src={`${process.env.PUBLIC_URL || ''}${image}`}
                          alt={`${project.title} - Image ${index + 1}`}
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </Col>

          <Col lg="4">
            <div className="project-info">
              <div className="project-meta">
                <div className="meta-item">
                  <strong>Category:</strong> {project.category}
                </div>
                <div className="meta-item">
                  <strong>Status:</strong> {project.hosted ? "Hosted" : "Demo Only"}
                </div>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="meta-item">
                    <strong>Technologies:</strong>
                    <div className="tech-tags">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="project-description">
                <h3>About This Project</h3>
                <p>{project.description}</p>
              </div>

              <div className="project-actions">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo-btn"
                  >
                    {project.hosted ? "View Live Demo" : "Watch Demo Video"}
                  </a>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

