import React, { Component } from "react"
import { Container, Nav, Row, Tab, Col } from "react-bootstrap"

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="d-block w-100">
                <Nav.Item>
                  <Nav.Link eventKey={"first"}>Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey={"second"}>Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey={"third"}>Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey={"fourth"}>Frameworks</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey={"first"}>
                  <img
                    src="https://s3-alpha.figma.com/hub/file/1066609153/f972f018-5e41-44fe-bd67-2c9743717f50-cover.png"
                    width={"1000px"}
                    // height={"630px"}
                  ></img>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Numquam, vero. Deserunt aliquam repudiandae rem enim omnis
                    libero, consequuntur, ducimus harum illum eveniet iste,
                    earum impedit expedita assumenda temporibus perspiciatis
                    architecto?
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey={"second"}>
                  <img
                    src="https://blog.riseup.ai/hubfs/teamwork-1.jpg"
                    width={"980px"}
                    height={"590px"}
                  ></img>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Numquam, vero. Deserunt aliquam repudiandae rem enim omnis
                    libero, consequuntur, ducimus harum illum eveniet iste,
                    earum impedit expedita assumenda temporibus perspiciatis
                    architecto?
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey={"third"}>
                  <img
                    src="https://pomelnikov.com/images/obuchenie/Pomelnikov-htmlcss.jpg"
                    width={"1000px"}
                    // height={"630px"}
                  ></img>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Numquam, vero. Deserunt aliquam repudiandae rem enim omnis
                    libero, consequuntur, ducimus harum illum eveniet iste,
                    earum impedit expedita assumenda temporibus perspiciatis
                    architecto?
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey={"fourth"}>
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--Qhu3PUis--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y63ie8bmktwik5w3mhlg.png"
                    width={"1000px"}
                  ></img>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Numquam, vero. Deserunt aliquam repudiandae rem enim omnis
                    libero, consequuntur, ducimus harum illum eveniet iste,
                    earum impedit expedita assumenda temporibus perspiciatis
                    architecto?
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}
