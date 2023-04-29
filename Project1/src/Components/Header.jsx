import React, { Component } from "react"
import {
  Navbar,
  Nav,
  FormControl,
  Container,
  Form,
  Button,
} from "react-bootstrap"
import logo from "../assets/fhlogo3rm.png"
import { Link } from "react-router-dom"
export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          sticky="top"
          collapseOnSelect
          expand="md"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand>
              <img
                src={logo}
                width="45"
                height="40"
                className="d-inline-block align-top"
                alt="Logo"
              />{" "}
              FinanceH
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsiv-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/invest">
                  Invest
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About us
                </Nav.Link>
                <Nav.Link as={Link} to="/contacts">
                  Contacts
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                ></FormControl>
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
}
