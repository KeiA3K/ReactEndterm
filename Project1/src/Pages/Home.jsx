import React, { Component } from "react"
import CarouselBox from "../Components/CarouselBox"
import { Button, Card, CardGroup, Container } from "react-bootstrap"

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className="text-center m-4">Our Achievments</h2>
          <CardGroup className="m-4">
            <Card border="dark">
              <Card.Img
                variant="top"
                src="https://freedom24.com/data/blogs/users/1069415/1590159839_2.2.jpg"
              />
              <Card.Body>
                <Card.Title>Staff</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </Card.Text>
                <Button
                  variant="light"
                  href="https://bankffin.kz/ru/page/about"
                >
                  About Staffs
                </Button>
              </Card.Body>
            </Card>
            <Card border="dark">
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </Card.Text>
                <Button variant="light" href="https://kaspi.kz/">
                  About Team
                </Button>
              </Card.Body>
              <Card.Img
                variant="top"
                src="https://the-steppe.com/pictures/files/leila/IMG_4312.jpg"
              />
            </Card>
            <Card border="dark">
              <Card.Img
                variant="top"
                src="https://www.gazeta.uz/media/img/2022/05/irYtSX16535707238283_b.jpg"
              />
              <Card.Body>
                <Card.Title>Investors</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </Card.Text>
                <Button variant="light" href="https://halykbank.kz/about">
                  About Investors
                </Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </>
    )
  }
}
