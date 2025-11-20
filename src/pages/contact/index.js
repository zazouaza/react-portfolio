import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "../../content_option";

export const ContactUs = () => {
  const bookingWebsiteUrl = "https://zazou-booking.vercel.app/";

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="8" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <div className="contact-info">
              <p className="contact-message mb-4">
                If you'd like to get in touch with me, you can either:
              </p>
              
              <div className="contact-options">
                <div className="contact-option mb-4">
                  <h4 className="mb-3">
                    <strong>📧 Send me an email</strong>
                  </h4>
                  <p>
                    <a 
                      href={`mailto:${contactConfig.YOUR_EMAIL}`}
                      className="contact-link"
                    >
                      {contactConfig.YOUR_EMAIL}
                    </a>
                  </p>
                </div>

                <div className="contact-option mb-4">
                  <h4 className="mb-3">
                    <strong>📅 Book a consultation</strong>
                  </h4>
                  <p>
                    Book a consultation through my booking website:
                  </p>
                  <a 
                    href={bookingWebsiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn ac_btn booking-btn"
                  >
                    Book Consultation
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4" className="mb-5">
            <div className="contact-sidebar">
              <address>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                  {contactConfig.YOUR_EMAIL}
                </a>
                <br />
                <br />
                {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                  <p>
                    <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                  </p>
                ) : (
                  ""
                )}
              </address>
              <p>{contactConfig.description}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
