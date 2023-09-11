import { Card, Col, Row } from "antd";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import IMAGES from "../../../assets/images";

function About() {
  return (
    <div className="about-wrapper mt-5">
      <Row className="d-flex align-items-center justify-content-center w-100">
        <Col xs={22} sm={22} lg={22} xl={18}>
          <Row className="d-flex align-items-center justify-content-between w-100 py-5">
            <Col xs={24} md={8} lg={6}>
              <h1 className="fw-heavy  main-text">
                Quality Content In just One click
              </h1>
            </Col>
            <Col xs={24} md={14} lg={16}>
              <h4 className="text-secondary">
                Weather you need it urgently or just don&apos;t like to wait,
                our AI takes just seconds to deliver a complete work, no more
                waiting in commision queue.{" "}
              </h4>
            </Col>
          </Row>
          <Row
            className="d-flex align-items-center justify-content-between w-100 py-5 m-0"
            // gutter={24}
          >
            <Col sm={8} className="pr-0 pr-sm-3">
              <Card className="gradient-bg text-black mb-5">
                <div className="icon-bg">
                  <img src={IMAGES.BOOK_ICON} width={20} alt="book icon" />
                </div>
                <h4 className="fw-heavy mt-3">Full Stories</h4>
                <div className="text-secondary mb-4">
                  Interesting and complex, with a good development and ending
                </div>
              </Card>
            </Col>
            <Col sm={8} className="pr-0 pr-sm-3">
              <Card className="gradient-bg text-black mb-5">
                <div className="icon-bg">
                  <img src={IMAGES.POST_ICON} width={20} alt="book icon" />
                </div>
                <h4 className="fw-heavy mt-3">Posting</h4>
                <div className="text-secondary mb-4">
                  For reddit or Quora, continue your conversation or post in
                  your blog
                </div>
              </Card>
            </Col>
            <Col sm={8}>
              <Card className="gradient-bg text-black mb-5">
                <div className="icon-bg">
                  <img src={IMAGES.THUMB_ICON} width={20} alt="book icon" />
                </div>
                <h4 className="fw-heavy mt-3">Feedback</h4>
                <div className="text-secondary mb-4">
                  In addition to writting, the AI can review texts and give tips
                  to improve them.
                </div>
              </Card>
            </Col>
          </Row>
          <Row className="d-flex">
            <Col xs={24} md={12}>
              <img
                src={IMAGES.NEON_STREET}
                alt="content"
                className="neon-street"
              />
            </Col>
            <Col xs={24} md={12} className="pl-0 pl-sm-4">
              <h1 className="try-text fw-heavy text-black lh-1 mt-5 mt-md-0">
                Anime text in ablink Automatic and immediate
              </h1>
              <div className="text-secondary py-3">
                The technology of our AI assure a great writting,
                <br /> without waiting, without creative block, instant
                <br /> content only
              </div>
              <div className="d-flex align-items-center my-3">
                <img src={IMAGES.CHECK_ICON} alt="check icon" width={27} />
                <h5 className="fw-bold mb-0 ml-3">
                  Powered by GPT-3 from OpenAI
                </h5>
              </div>

              <div className="d-flex align-items-center mb-3">
                <img src={IMAGES.CHECK_ICON} alt="check icon" width={27} />
                <h5 className="fw-bold mb-0 ml-3">
                  Different genres and tones
                </h5>
              </div>

              <div className="d-flex align-items-center">
                <img src={IMAGES.CHECK_ICON} alt="check icon" width={27} />
                <h5 className="fw-bold mb-0 ml-3">
                  To publish on networks or use them in your compaigns
                </h5>
              </div>
              <div className="read-more pt-5">
                Read More <HiMiniArrowLongRight className="ml-2" size={25} />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default About;
