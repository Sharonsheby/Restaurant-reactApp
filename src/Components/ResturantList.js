import {React,useState,useEffect} from 'react'
import RestCard from './RestCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ResturantList() {

    // state to hold data from api
    var [resturantList, setresturantList]=useState([])
    
    // function to call API
    const fetchData= async()=>{
       const result=await fetch('/restaurants.json')
       result.json().then(data=>{
        setresturantList(data.restaurants)
       })

    }
    console.log(resturantList);
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <Row>
      {
      resturantList.map(item=>(
        <Col  className ='p-5' lg={4} md={6}>
        <RestCard restData={item}/> 
        </Col>
        
      ))
      }
    </Row>
  )
}

export default ResturantList