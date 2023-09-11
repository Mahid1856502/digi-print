// import { Col, Row } from "antd";
import { Button, Col, Row } from "antd";
import { AiOutlineClose } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";
import IMAGES from "../../../assets/images";

function Home() {
  return (
    <div className="home-wrapper">
      <img src={IMAGES.MAIN_BG} alt="main background" className="home-bg" />
      <Header />
      <Row className="d-flex align-items-center justify-content-center home-header-content w-100">
        <Col xs={22} sm={22} lg={22} xl={18}>
          <Row className="w-100 d-flex justify-content-between">
            <Col xs={20} sm={18} md={16}>
              <h1>Fast and Automatic Anime and Fantasy Writing</h1>
              <h4 className="fw-normal text-white mt-3 mt-lg-5 text-sec">
                Text written by artificail intelligence
                <br />
                Immediate, easy and with amazing results
              </h4>
              <Button className="btn-purple mr-3 mt-3 mt-lg-5">
                FREE TRAIL
              </Button>
              <Button className="btn-blue mt-3 mt-lg-5">
                SIGN UP WITH GOOGLE
              </Button>
            </Col>
            <Col md={7} className="d-none d-md-block">
              <div className="d-flex align-items-center highlighted-bg mb-2 mb-lg-4">
                <img src={IMAGES.CHECK_ICON} alt="check icon" width={27} />
                <h5 className="fw-bold text-white mb-0 ml-3">
                  Develop Publications
                </h5>
              </div>

              <div className="d-flex align-items-center highlighted-bg mb-2 mb-lg-4">
                <img src={IMAGES.CHECK_ICON} alt="check icon" width={27} />
                <h5 className="fw-bold text-white mb-0 ml-3">
                  Perfect for Fan fiction
                </h5>
              </div>

              <div className="d-flex align-items-center highlighted-bg mb-2 mb-lg-4">
                <img src={IMAGES.CHECK_ICON} alt="check icon" width={27} />
                <h5 className="fw-bold text-white mb-0 ml-3">
                  Write, Review and Fix Text
                </h5>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Home;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Row className="home-header w-100 d-flex align-items-center justify-content-center mt-1">
      <Col xs={22} sm={22} lg={22} xl={18} className="d-none d-sm-block">
        <Row className="w-100 d-flex align-items-center justify-content-between">
          <Col>
            <img src={IMAGES.MAIN_LOGO} alt="logo" width={70} />
          </Col>
          <Col className="d-flex align-items-center">
            <div className="mr-4 nav-item">Solution</div>
            <div className="mr-4 nav-item">Pricing</div>
            <div className="mr-4 nav-item">Blog</div>
            <div className="mr-4 nav-item">About</div>
          </Col>
          <Col className="d-flex align-items-center">
            <div className="mr-4 nav-item">Login</div>
            <Button type="primary" className="header-btn">
              Get Started
            </Button>
          </Col>
        </Row>
      </Col>
      <div className="d-flex justify-content-between align-items-center w-100 px-3 d-sm-none">
        <img src={IMAGES.MAIN_LOGO} alt="logo" width={70} />
        <button className="toggle-button" type="button" onClick={toggleSidebar}>
          <HiBars3 size={20} />
        </button>
      </div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li className="w-100 pr-3 d-flex align-items-center justify-content-between py-3">
            <img src={IMAGES.LOGO} alt="logo" width={70} />
            <AiOutlineClose size={25} onClick={toggleSidebar} />
          </li>
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Services</li>
          <li className="nav-item">Contact</li>
          <li className="w-100 pr-3 d-flex align-items-center justify-content-between py-3">
            <Button type="primary" className="header-btn">
              Login
            </Button>{" "}
          </li>
        </ul>
      </div>
    </Row>
  );
}
