import React from 'react'
import { Container, Row, Col, Nav, Form, InputGroup } from 'react-bootstrap'
import { FaFacebookF, FaGithub, FaHeart, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const FooterComponent = () => {
  return (
    <footer className='p-4'>
        <Container>
            <Row xs={1} md={2} lg={4} className='g-4'>
                <Col>
                    <h6>Links</h6>
                    <Nav className='d-flex flex-column'>
                        <a href="" className="nav-link text-secondary">Link item</a>
                        <a href="" className="nav-link text-secondary">Link item</a>
                        <a href="" className="nav-link text-secondary">Link item</a>
                        <a href="" className="nav-link text-secondary">Link item</a>
                    </Nav>
                </Col>
                <Col>
                    <h6>Links</h6>
                    <Nav className='d-flex flex-column'>
                        <a href="" className="nav-link text-secondary">Link item</a>
                        <a href="" className="nav-link text-secondary">Link item</a>
                        <a href="" className="nav-link text-secondary">Link item</a>
                        <a href="" className="nav-link text-secondary">Link item</a>
                    </Nav>
                </Col><Col>
                    <h6>Links</h6>
                    <Nav className='d-flex flex-column'>
                        <a href="" className="nav-link text-secondary">Link item</a>
                        <a href="" className="nav-link text-secondary">Link item</a>
                        <a href="" className="nav-link text-secondary">Link item</a>
                        <a href="" className="nav-link text-secondary">Link item</a>
                    </Nav>
                </Col>
                <Col>
                    <h6>Contact</h6>
                    <br />
                    <div className="d-flex align-items-center">
                  <FaFacebookF size='1rem' className=' pointer icon'/>
                  <FaInstagram size='1rem' className='ms-3 pointer icon'/>
                  <FaTwitter size='1rem' className='ms-3 pointer icon'/>
                  <FaGithub size='1rem' className='ms-3 pointer icon'/>
                  <FaLinkedin size='1rem' className='ms-3 pointer icon'/>
                </div>
                <br /><br />
                    <Form className="d-flex my-1">
                  <InputGroup>
                  <Form.Control
                    placeholder="Say hi..."
                    className='bg-dark text-light'
                  />
                  <div className='btn btn-outline-purple'>Search</div>
                  </InputGroup>
                </Form>
                </Col>
            </Row>
            <h6 className='text-center mt-5'>Purple<span className='text-purple'>Space</span></h6>
            <p className='text-center mt-2'>Made With <FaHeart className='text-purple'/> by <a className='nav-link text-purple' href="http://github.com/thenabiev">webdevnabiev</a></p>
        </Container>
    </footer>
  )
}

export default FooterComponent