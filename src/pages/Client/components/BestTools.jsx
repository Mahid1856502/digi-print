// import { Col, Row } from "antd";
import { Col, Row } from "antd";
import IMAGES from "../../../assets/images";

function BestTools() {
  return (
    <div className="best-tools-wrapper mt-5">
      <Row className="d-flex align-items-center justify-content-center w-100">
        <Col xs={22} sm={22} lg={22} xl={18}>
          <Row className="w-100 d-flex align-items-center justify-content-center mt-3">
            <Col md={3}>
              <hr className="mr-3" />
            </Col>
            <Col>
              <h1 className="main-text">The best tool for</h1>
            </Col>
            <Col md={3}>
              <hr className="ml-3" />
            </Col>
            <Col sm={24} className="mt-5">
              <img
                src={IMAGES.REDDIT}
                alt="reddit"
                height={42}
                className="mx-3 mb-4 mb-lg-0"
              />
              <img
                src={IMAGES.WRITE_AS}
                alt="reddit"
                height={30}
                className="mx-3 mb-4 mb-lg-0"
              />
              <img
                src={IMAGES.QUORA}
                alt="reddit"
                height={38}
                className="mx-3 mb-4 mb-lg-0"
              />
              <img
                src={IMAGES.GHOST}
                alt="reddit"
                width={130}
                className="mx-3 mb-4 mb-lg-0"
              />
              <img
                src={IMAGES.ASK_FM}
                alt="reddit"
                height={38}
                className="mx-3 mb-4 mb-lg-0"
              />
              <img
                src={IMAGES.JUPITER}
                alt="reddit"
                width={80}
                className="mx-3 mb-4 mb-lg-0"
              />
              <img
                src={IMAGES.WIKI_HOW}
                alt="reddit"
                height={28}
                className="mx-3 mb-4 mb-lg-0"
              />
              <img
                src={IMAGES.STACK}
                alt="reddit"
                height={43}
                className="mx-3 mb-4 mb-lg-0"
              />
              <img
                src={IMAGES.ANS}
                alt="reddit"
                height={33}
                className="mx-3 mb-4 mb-lg-0"
              />
              <img
                src={IMAGES.MAL}
                alt="reddit"
                height={27}
                className="mx-3 mb-4 mb-lg-0"
              />
              <img
                src={IMAGES.STACK_OF}
                alt="reddit"
                height={50}
                className="mx-3 mb-4 mb-lg-0"
              />
              <img
                src={IMAGES.MEDIUM}
                alt="reddit"
                height={38}
                className="mx-3 mb-4 mb-lg-0"
              />
              <img
                src={IMAGES.ASK_COM}
                alt="reddit"
                height={50}
                className="mx-3 mb-4 mb-lg-0"
              />
            </Col>
            <Col sm={24} className="text-center mt-4">
              <h5 className="text-black fw-bold">And many more</h5>
            </Col>
          </Row>
          <Row className="para-wrapper mt-5 ">
            <Col sm={12}>
              <h1 className="fw-heavy try-text text-black lh-1 mt-5">
                Anime text in ablink Automatic and immediate
              </h1>
              <div className="text-secondary py-3">
                The technology of our AI assure a great writting,
                <br /> without waiting, without creative block, instant
                <br /> content only
              </div>
            </Col>
            <Col sm={12}>
              <img src={IMAGES.GRADIENT_BG} alt="cjk" className="para-bg" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default BestTools;
