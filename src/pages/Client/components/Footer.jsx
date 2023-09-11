import { Col, Row } from "antd";

function Footer() {
  return (
    <>
      <Row
        className="d-flex justify-content-center bg-black "
        style={{ paddingTop: "10rem" }}
      >
        <Col xs={22} sm={22} lg={22} xl={18}>
          <Row className="my-4">
            <Col xs={24} md={12} lg={6}>
              <h2 className="text-white fw-bold mb-3">CLIENTS</h2>
              <h5 className="text-light-grey fw-light ">Login</h5>
              <h5 className="text-light-grey fw-light mb-3">Sign up </h5>
            </Col>

            <Col xs={24} md={12} lg={6}>
              <h2 className="text-white fw-bold mb-3">SOCIAL MEDIA</h2>
              <h5 className="text-light-grey fw-light ">Twitter</h5>
            </Col>

            <Col xs={24} md={12} lg={6}>
              <h2 className="text-white fw-bold mb-3">LEGAL INFO</h2>
              <h5 className="text-light-grey fw-light ">Legal Information</h5>
              <h5 className="text-light-grey fw-light ">Terms & Conditions </h5>
              <h5 className="text-light-grey fw-light mb-3">Privacy Policy </h5>
            </Col>

            <Col xs={24} md={12} lg={6}>
              <h2 className="text-white fw-bold mb-3">SUPPORT</h2>
              <h5 className="text-light-grey fw-light ">Helpdesk</h5>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center w-100 bg-black">
        <Col xs={24}>
          <hr />
        </Col>
        <Col xs={22} sm={22} lg={22} xl={18} className="py-4 text-xs-center">
          <h4 className=" fw-light text-light-grey">T22 All rights reserved</h4>
        </Col>
      </Row>
    </>
  );
}

export default Footer;
