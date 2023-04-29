import React, { Component } from "react"
import Carousel from "react-bootstrap/Carousel"
import financeImg1 from "../assets/images/finance3.jpg"
import financeImg2 from "../assets/images/finance4.jpg"

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={financeImg1} alt="Finance1" />
          <Carousel.Caption>
            <h3>Finance Image</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elip.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={financeImg2} alt="Finance2" />
          <Carousel.Caption>
            <h3>Finance Image</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elip.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
