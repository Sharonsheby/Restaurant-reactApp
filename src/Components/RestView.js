import React, { useState,useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'


function RestView() {
    var[allrestView,setRestView] = useState([])
    const fetchView= async()=>{
        const result=await fetch('/restaurants.json')
        result.json().then(data=>{
            setRestView(data.restaurants)
        })

    }
    const params=useParams()
    console.log(params.id);
    console.log(allrestView);

    const restResult=allrestView.find(item=>item.id==params.id)
    console.log(restResult);

    useEffect(()=>{
        fetchView()
    },[])
   
  return (
    <Row>
        <Col lg={6} md={6}>

        </Col>
        <Col lg={6} md={6}>
        </Col>
        
    </Row>
  )
}

export default RestView