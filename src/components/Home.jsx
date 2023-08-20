import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Home = () => {
  const [animate, setAnimate] = useState(true);
  const [sideBar, setSideBar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  };

  return (
    <>
      <Container fluid className="top-container">
        {sideBar ? (
          <StaticExample sideBar={sideBar} setSideBar={setSideBar} />
        ) : null}
        <Row>
          <Col md={{ span: 2 }}>
            <div className="logo">
              <img
                src="http://wisptv.com/images/logo-w.png"
                alt="wisptv Logo"
                width="150px"
                height="80px"
              />
            </div>
          </Col>
          <Col md={{ span: 4 }} className="top-heading">
            <h1>Bring TV to your customers. Let us handle the rest.</h1>
            <p>
              WISPTV<small>TM</small> will increase your subscribers’ happiness
              and loyalty with a relevant TV add on service that maximizes their
              value while minimizing their churn.
            </p>
            <div>
              <button
                onClick={() => setSideBar(true)}
                className="boot-btn"
                style={{ marginBottom: "150px" }}
              >
                SCHEDULE A DEMO
              </button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* next Section */}
      <Container fluid className="section-two">
        <div className="section-two-head">
          <h1>
            The White Label TV Services for <br /> Internet Service Providers
          </h1>
          <p>
            All your subscribers' favorite TV content anywhere, any <br /> time,
            on any device.
          </p>
        </div>
        <Row>
          <Col md={{ span: 4, offset: 1 }}>
            <div className={`box ${animate ? "animate" : ""}`}>
              <img
                className="shadow"
                src="images/baby2.jpg"
                style={{
                  height: "500px",
                  width: "100%",
                  borderRadius: "10px",
                }}
              />
            </div>
          </Col>
          <Col
            md={{ span: 4, offset: 1 }}
            className={`box ${animate ? "animate " : ""}`}
          >
            <h1>Your Brand. Your TV Addon.</h1>
            <p>
              Add a new revenue stream, maximize subscriber value, and minimize
              churn by offering your subscribers a relevant and affordable TV
              addon service using your own brand. Our service is not a cable
              replacement (who watches cable these days anyway?). Instead of
              competing with the big boys, you can offer your subscribers
              something they are easily able to afford and enjoy alongside their
              Netflix, Hulu and Amazon subscriptions.
            </p>
            <div>
              <button
                onClick={() => setSideBar(true)}
                className="boot-btn"
                style={{ marginTop: "15px" }}
              >
                SCHEDULE A DEMO
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      {/* next section */}
      <Container fluid className="section-three">
        <div
          className={`section-three-head ${animate ? "animate2 " : ""}`}
          style={{ paddingTop: "100px" }}
        >
          <h1>
            The Best TV Experience. <br /> Guaranteed
          </h1>
          <p>
            Transform your business model by becoming a leading <br />{" "}
            entertainment provider and giving customers everything <br /> they
            want in one place.
          </p>
        </div>
        <Row>
          <Col
            md={{ span: 3, offset: 1 }}
            className={`box ${animate ? "animate3" : ""}`}
          >
            <h1>TV is Personal, WISPTV is Personalized.</h1>
            <p>
              We can build a fully white-labeled and customized TV service for
              your business in less than 24 hours. Our platform is trusted by
              millions of happy customers. Your customers already have the best
              internet - why not give them all of their favorite TV content all
              in one place? <br /> Your customers will be able to record live
              programs and play them on our cloud DVR at their convenience
              without taxing your infrastructure . <br /> Works on internet
              connected devices with a browser and Roku.
            </p>
          </Col>
          <Col md={{ span: 4 }}>
            <div>
              <img
                style={{ height: "500px", width: "100%", borderRadius: "10px" }}
                src="images/remote.jpg"
                alt=""
                className={`box ${animate ? "animate3" : ""}`}
              />
            </div>
          </Col>
          <Col className={`column-3 ${animate ? "animate3" : ""}`}>
            <div>
              <div className="div-1">
                <h5>Made for all</h5>
                <p>
                  Live TV + DVR made for rural and wireless Internet Providers
                </p>
              </div>
              <div className="div-1">
                <h5>All things TV!</h5>
                <p>News, Top Shows, Sports, Free Classics and More!</p>
              </div>
              <div className="div-1">
                <h5>The best movies</h5>
                <p>Latest Pay Per View Movies on Demand!</p>
              </div>
              <div className="div-1">
                <h5>Updated daily</h5>
                <p>
                  Fresh & Live Content Added Daily: Shows, Sports, News,
                  Weather, Movies
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <div style={{ textAlign: "center" }}>
          <button onClick={() => setSideBar(true)} className="boot-btn">
            SCHEDULE A DEMO
          </button>
        </div>
      </Container>
      {/* next section */}
      <div>
        <Container className="section-four">
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <div className="section-four-head">
                <h1>FAQ</h1>
              </div>
              <Accordion defaultActiveKey="0" className="shadow-lg accordion">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="accordion-heading">
                    <h5>
                      What's WISPTV<small>tm</small>?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    WISPTVTM is an OTT service which can be augmented with IPTV
                    channels created by a WISPTM for WISPs.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="accordion-heading">
                    <h5>Do you offer locals channels?</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    We offer a do-it-yourself kit for your customers to obtain
                    the locals if they are in the coverage area that seamlessly
                    integrates with their OTT device guide. Alternatively we are
                    able to help you obtain the local rights on a case by case
                    basis but we won’t charge you for it.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="accordion-heading">
                    <h5>how are you different from all the other guys?</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    WISPs have to look out for each other against Big Cable
                    Companies, Big Phone Companies, Starlink, Dish, Direct TV,
                    Werewolves and Vampires. That is why we developed a way for
                    you to add a revenue stream to your business with online
                    video with: YOUR EXISTING LOGO YOUR EXISTING DOMAIN NO CAPEX
                    NO OPEX Your Job is just to promote the service to your
                    customers and we take care of the rest: billing support,
                    paying for content and sending you a check at the end of the
                    month.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <div style={{ textAlign: "center" }}>
                <button onClick={() => setSideBar(true)} className="boot-btn">
                  SCHEDULE A DEMO
                </button>
              </div>
            </Col>
          </Row>
        </Container>
        <div>
          <Container fluid style={{ textAlign: "center" }} className="footer">
            <div className="logo">
              <img
                src="http://wisptv.com/images/logo-w.png"
                alt="wisptv Logo"
                width="150px"
                height="80px"
                style={{ background: "black" }}
              />
            </div>
            <p>
              Copyrights © 2021 All Rights Reserved WISPTV - a TeleUP Inc.
              service | <a href="">Terms of Use</a> |
              <a href="">Privacy Policy</a> WISPTV is a registered trademark of
              TeleUP inc.
            </p>
          </Container>
        </div>
      </div>
    </>
  );
};

export const StaticExample = ({ sideBar, setSideBar }) => {
  const [information, setInformation] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInformation({ ...information, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const sendgridAPIKey = "YOUR_API_KEY_HERE";
    const sendgridEndpoint = "https://api.sendgrid.com/v3/mail/send";

    const data = {
      personalizations: [
        {
          to: "",
          subject: "contact through Email",
        },
      ],
      from: {
        email: information.email,
      },
      content: [
        {
          type: "text/plain",
          value: `hi i am ${information.name} my phone Number is ${information.phone} and company name is ${information.company}`,
        },
      ],
    };

    axios
      .post(sendgridEndpoint, data, {
        headers: {
          Authorization: `Bearer ${sendgridAPIKey}`,
        },
      })
      .then((response) => {
        console.log("Email sent successfully!", response.data);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  return (
    <div className="modal show">
      <Modal show={sideBar} onHide={() => setSideBar(false)}>
        <Modal.Header>
          <div style={{ float: "right" }}>
            <FontAwesomeIcon
              onClick={() => setSideBar(false)}
              icon={faTimes}
              style={{ float: "right", margin: "30px" }}
              size="2x"
              color="red"
            />
          </div>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form style={{ padding: "50px" }} onSubmit={handleInputChange}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={information.name}
                  onChange={(e) => setInformation(e.target.value)}
                  name="name"
                  className="form-field"
                  type="text"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={information.emal}
                  onChange={(e) => setInformation(e.target.value)}
                  name="email"
                  className="form-field"
                  type="email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  value={information.phone}
                  onChange={(e) => setInformation(e.target.value)}
                  name="phone"
                  className="form-field"
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  value={information.company}
                  onChange={(e) => setInformation(e.target.value)}
                  name="company"
                  className="form-field"
                  type="text"
                />
              </Form.Group>
              <div>
                <button
                  onClick={(event) => handleFormSubmit()}
                  className="boot-btn"
                  style={{ marginBottom: "150px" }}
                >
                  SCHEDULE A DEMO
                </button>
              </div>
            </Form>
          </div>
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
