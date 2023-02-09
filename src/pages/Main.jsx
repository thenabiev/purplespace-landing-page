import React, { useState } from 'react'
import { Card, Col, Container, FormControl, Modal, Row } from 'react-bootstrap';
import {FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaLinkedin, FaPhone, FaEnvelope,  FaMapMarker} from 'react-icons/fa'
import lamp from '../assets/hero2.png';
import lam2 from '../assets/lamp.png';
import { portfolioItems } from '../data/Data';

import cardImg from '../assets/about.png'
import PortfolioItem from '../components/PortfolioItem';


const Main = () => {


  return (
    <>
    <Container>
        <Row id='main' className='main py-2' xs={1} md={2} g={4} style={{minHeight:'100vh'}} >
            <Col className='mainText text-left  align-center'>
                <h3>Sub Header</h3>
                <h1 className='text-purple'>Main Header</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sequi alias modi explicabo? Praesentium laborum, debitis doloribus quia eaque aspernatur cum explicabo enim modi earum voluptates suscipit odit voluptatem, obcaecati deserunt quos alias, magni ab quasi provident. Reiciendis culpa, illum nobis vero ipsum iure veritatis quae minima ratione natus. Quibusdam.</p>
                <div className='d-flex'>
                    
                        <a href='#portfolio' className='me-2 w-25 btn btn-outline-purple'>Portfolio</a>
                   
                        <a href='#contact' className='w-25 btn btn-purple'>Contact</a>
                </div>
            </Col>
            <Col id="mainImg">
                <img src={lamp}/>
            </Col>
        </Row>
        <h2 id='about' className='my-2 text-center sectionHeader'>About</h2>
        <Row  className='about  ' xs={1} md={2} g={4}  >
            <Col id="mainImg">
                <img src={cardImg}/>
            </Col>
            <Col className='aboutText text-left  align-center'>
                <h3 className='text-purple'>Sub Header</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sequi alias modi explicabo? Praesentium laborum, debitis doloribus quia eaque aspernatur cum explicabo enim modi earum voluptates suscipit odit voluptatem, obcaecati deserunt quos alias, magni ab quasi provident. Reiciendis culpa, illum nobis vero ipsum iure veritatis quae minima ratione natus. Quibusdam.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sequi alias modi explicabo? Praesentium laborum, debitis doloribus quia eaque aspernatur cum explicabo enim modi earum voluptates suscipit odit voluptatem, obcaecati deserunt quos alias, magni ab quasi provident. Reiciendis culpa, illum nobis vero ipsum iure veritatis quae minima ratione natus. Quibusdam.</p>
                <div className="d-flex align-items-center">
                  <FaFacebookF size='1.3rem' className=' pointer icon'/>
                  <FaInstagram size='1.3rem' className='ms-3 pointer icon'/>
                  <FaTwitter size='1.3rem' className='ms-3 pointer icon'/>
                  <FaGithub size='1.3rem' className='ms-3 pointer icon'/>
                  <FaLinkedin size='1.3rem' className='ms-3 pointer icon'/>
                </div>
                
            </Col>
            
        </Row>
        <br />
        <h2 id='services' className='my-2 text-center sectionHeader'>Services</h2>
        <Row  xs={1} md={2} lg={3} className='g-4 py-5'>
          <Col>
            <Card className='bg-dark'>
              <Card.Img className='cardImg' src={lamp}/>
              <Card.Body>
                <h4>Card header</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, esse.</p>
              <div className="btn btn-purple">Details</div>
              </Card.Body>

            </Card>
          </Col>
          <Col >
            <Card className='bg-dark'>
              <Card.Img className='cardImg' src={cardImg}/>
              <Card.Body>
              <h4>Card header</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, esse.</p>
              <div className="btn btn-purple">Details</div>
              </Card.Body>
              
            </Card>
          </Col>
          <Col>
            <Card className='bg-dark'>
              <Card.Img className='cardImg' src={lam2}/>
              <Card.Body>
              <h4>Card header</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, esse.</p>
              <div className="btn btn-purple">Details</div>
              </Card.Body>

              
            </Card>
          </Col>

        </Row>
        <h2 id='portfolio'  className='my-2 text-center sectionHeader'>Portfolio</h2>

        <Row xs={1} md={2} lg={4} className="portfolio py-3 my-4">
          {
            portfolioItems.map(item=>
              (
              <PortfolioItem key={item.id} item={item}/>
              )
            )
          }
        </Row>

        <h2 id='contact' className='my-2 text-center sectionHeader'>Contact</h2>
        <Row  xs={1} md={2} className="py-5">
          <Col>
            <h3>Adresses</h3>
            <br />
            <p className='my-3 me-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, culpa consectetur eum ducimus aperiam id voluptatibus, quaerat vel blanditiis facilis ab, corporis perferendis quibusdam. Aspernatur cum modi ratione! Commodi rem tenetur eaque cum qui, adipisci libero eligendi saepe doloremque. Aut.</p>
            <p className='my-4'><FaPhone size='1rem' className="me-1 text-purple"/> +994 70 255 1021</p>
            <p className='my-4'><FaEnvelope size='1rem' className="me-1 text-purple"/> thenabiev@gmail.com</p>
            <p className='my-4'><FaMapMarker size='1rem' className="me-1 text-purple"/> Sumqait, Somewhere st.13 , Azerbaijan</p>
            
            
          </Col>
          <Col >
          <h3>Let's Talk</h3>
          <br />
          <form>
            <FormControl className='bg-dark text-light my-3' placeholder="Name..." />
            <FormControl className='bg-dark text-light my-3' placeholder="E-mail..." />
            <FormControl className='bg-dark text-light my-3' placeholder="Title..." />
            <textarea name="" id="" cols="30" rows="5" className="form-control bg-dark text-light" placeholder='Message...'></textarea>
            <div className="btn btn-purple my-3 w-25 float-end">Send</div>
          </form>
          </Col>
        </Row>
    </Container>
    
    
    </>
  )
}

export default Main