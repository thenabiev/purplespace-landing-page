import React from 'react'
import { Card, Col } from 'react-bootstrap'

const PortfolioItem = ({item}) => {

  return (
    <>
    <Col className='mb-2' >
        <Card className='bg-dark'>
            <Card.Img src={item.image} alt={item.title}/>
            <Card.Body>
            <h5>{item.title}</h5>
            <div className="btn btn-purple float-end"
            >Details</div>
            </Card.Body>
        </Card>
    </Col>
    
    </>
  )
}

export default PortfolioItem