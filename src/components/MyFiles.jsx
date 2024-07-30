
import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const MyFiles = () => {

    const [images, setImages]=useState([]);
    const [videos, setVideos]=useState([]);
    const [allFiles, setAllFiles]=useState([]);
    const navigator=useNavigate()

    useEffect(()=>{
        axios.get("http://localhost:8080/api-file/getAll-image")
        .then((response)=>{
            setAllFiles(response.data);
        })
        .catch(error =>{
            console.log(error)
        })
    },[])

    console.log(allFiles);
    

  return (
    <div>
      <Container className="my-4" style={{minHeight:"500px"}}>
        <h1>All Image Files:</h1>
      <Row>
        {allFiles && allFiles.map((image, index) => image.fileType==='image' && (
          <Col md={4} lg={3} key={index} className="mb-4 d-flex align-items-stretch">
            <Card className="flex-fill">
              <Card.Img variant="top" src={image.url} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{image.fileName}</Card.Title>
                <Button variant="primary" href={image.url} target= "_blank" className="mt-auto">
                  View Image
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <Container className="my-4">
    <h1>All Video Files:</h1>
      <Row>
        {allFiles && allFiles.map((video, index) => video.fileType==='video' && (
          <Col md={4} lg={3} key={index} className="mb-4 d-flex align-items-stretch">
            <Card className="flex-fill">
              <Card.Body className="d-flex flex-column">
                <video width="100%" height="auto" controls>
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <Card.Title className="mt-3">{video.fileName}</Card.Title>
                <Button variant="primary" href={video.url} target="_blank" className="mt-auto">
                  View Video
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  )
}

export default MyFiles
