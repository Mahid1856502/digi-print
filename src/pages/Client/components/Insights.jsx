/* eslint-disable */
import { Button, Card, Col, Row } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import IMAGES from "../../../assets/images";

function Insights() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    // dotsClass: "dots-style",
    vertical: false,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => <div className="dots-style">{dots}</div>,
    customPaging: () => <div className="dots-style" />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="insights-wrapper mt-5 pt-5">
      <Row
        className="d-flex align-items-center justify-content-center w-100 "
        style={{ paddingBottom: "6rem" }}
      >
        <Col xs={22} sm={22} lg={22} xl={18}>
          <Row className="d-flex align-items-center justify-content-between w-100 py-5">
            <Col sm={14}>
              <h1 className="main-text">
                Fantasy Stories and Anime Post Specialized AI
              </h1>
            </Col>
            <Col sm={10}>
              <div className="text-secondary">
                Our artificial intelligence can complete, start, continue or
                make from scratch a good anime and fantasy story, a reddit post
                or an answer to a converation.
              </div>
            </Col>
          </Row>
          <Row className="d-flex align-items-start justify-content-between py-5">
            <Col xs={24} sm={12} lg={4} className="text-xs-center">
              <h1 className="fantasy-title fs-xl">20+</h1>
              <div className="text-secondary">
                AI and machine Learning Patterns
              </div>
            </Col>
            <Col xs={24} sm={12} lg={4} className="text-xs-center">
              <h1 className="fantasy-title fs-xl">76+</h1>
              <div className="text-secondary">
                Users approve and use regularly AI writing
              </div>
            </Col>
            <Col xs={24} sm={12} lg={4} className="text-xs-center">
              <h1 className="fantasy-title fs-xl">{`>96%`}</h1>
              <div className="text-secondary">Proven accuracy</div>
            </Col>
            <Col xs={24} sm={12} lg={4} className="text-xs-center">
              <h1 className="fantasy-title fs-xl">67</h1>
              <div className="text-secondary">Industry leading eNPS score</div>
            </Col>
          </Row>
          <Card className="gradient-bg-2">
            <Row className="d-flex align-items-center justify-content-between">
              <Col sm={9}>
                <h1 className="main-text fw-heavy text-white">
                  within the reach of any anime fan easy to use and effective
                </h1>
              </Col>
              <Col sm={13}>
                <div className="text-secondary text-white">
                  Our AI will enhance the quality of your fan fiction or your
                  post, it can create an interesting backstory or it can even
                  advise you on how to continue with your text and conversation
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex align-items-center justify-content-center w-100 testmonials-wrapper">
        <Col xs={22} sm={22} lg={22} xl={18} className="text-center">
          <h1 className="main-text fw-heavy pt-5 text-white">
            What they say about us
          </h1>
          <div className="py-4">
            <Slider {...settings} className="mt-4 product-carousel my-5">
              {[1, 2, 3, 4, 5, 6, 7].map(() => (
                <Card>
                  <Row gutter={10}>
                    <Col flex="none">
                      <img src={IMAGES.AVATAR} alt="sds" className="avatar" />
                    </Col>
                    <Col flex="auto" className="text-left">
                      <h4 className="fw-heavy text-black mb-0">
                        Lauren Andrews
                      </h4>
                      <h5 className="text-secondary">Unicorn Exchange</h5>
                    </Col>
                  </Row>
                  <div className="mt-2">
                    <img src={IMAGES.RATING} width="80" alt="dfdf" />
                  </div>
                  <h5 className="fw-bold text-left text-black mt-2">
                    A 2 week copy project finished in 2 days with jasper
                  </h5>
                  <h5 className="text-secondary text-left">
                    Use our improved availability feature to let buyers know
                    you&apos;re taking time off—without impacting your rankings
                    or performance. Let buyers know you&apos;re taking time
                    off—without impacting your rankings or performance.
                  </h5>
                </Card>
              ))}
            </Slider>
          </div>
          <Card className="gradient-bg-3 text-left w-100">
            <Row className="w-100 ">
              <Col xs={24} md={20} lg={16}>
                <h1 className="text-black fw-heavy try-text">
                  Try it for free right now!
                </h1>
                <h4 className="fw-bold text-secondary mt-3">
                  Text written by artificail intelligence
                  <br />
                  Immediate, easy and with amazing results
                </h4>
                <Button className="btn-ol mr-3 mt-sm-5 mt-3">
                  SIGN UP WITH EMAIL
                </Button>
                <Button className="btn-blue mt-md-5 mt-3">
                  SIGN UP WITH GOOGLE
                </Button>
              </Col>{" "}
            </Row>
          </Card>
        </Col>
      </Row>
      <div className="w-100 offer-bg" />
    </div>
  );
}

export default Insights;
