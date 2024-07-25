
import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const MyFiles = () => {
    const image = [
        { src: 'https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg', name: 'Image 1' },
        { src: 'https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg', name: 'Image 2' },
        { src: 'https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg', name: 'Image 3' },
        { src: 'https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg', name: 'Image 4' },
      ];
      const video = [
        { src: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Video 1' },
        { src: 'https://www.w3schools.com/html/movie.mp4', name: 'Video 2' },
        { src: 'https://www.w3schools.com/html/mov_bbb.mp4', name: 'Video 3' },
        { src: 'https://www.w3schools.com/html/movie.mp4', name: 'Video 4' },
      ];

    const [images, setImages]=useState([]);
    const [videos, setVideos]=useState([]);
    const [allFiles, setAllFiles]=useState([]);
    const navigator=useNavigate()

    useEffect(()=>{
      setImages(image);
      setVideos(video);
      // const fetchData = async () => {
      //   try {
      //     const response = await axios.get("http://localhost:8080/api-file/getAll-image");
      //     console.log("response: ",response.data)
      //     setImages(response.data);
      //     console.log("images: ",images);
      //   } catch (error) {
      //     console.log(error.message);
      //   }
      // };
      // fetchData();
    },[])


    

  return (
    <div>
        <Header />
      <Container className="my-4" style={{minHeight:"500px"}}>
        <h1>All Image Files:</h1>
      <Row>
        {images.map((image, index) => (
          <Col md={4} lg={3} key={index} className="mb-4 d-flex align-items-stretch">
            <Card className="flex-fill">
              <Card.Img variant="top" src={image.src} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{image.name}</Card.Title>
                <Button variant="primary" href={image.src} target="_blank" className="mt-auto">
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
        {videos.map((video, index) => (
          <Col md={4} lg={3} key={index} className="mb-4 d-flex align-items-stretch">
            <Card className="flex-fill">
              <Card.Body className="d-flex flex-column">
                <video width="100%" height="auto" controls>
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <Card.Title className="mt-3">{video.name}</Card.Title>
                <Button variant="primary" href={video.src} target="_blank" className="mt-auto">
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
