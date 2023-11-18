import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({restData}) { //props
  return (
    <>
    <Link to={`/view_rest/${restData.id}`} style={{textDecoration:'none',color:'white'}}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={restData.photograph} />
      <Card.Body>
        <Card.Title>{restData.name}</Card.Title>
        <Card.Text>
            <p>{restData.address}</p>
            <p><strong>Cusine Type : </strong>{restData.cuisine_type}</p>
            <p><strong>Neighborhood : {restData.neighborhood}</strong></p>
         
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Link>
  
    </>
  )
}

export default RestCard