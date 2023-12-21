import React, { useState, useEffect } from "react";
import axios from "axios";
import {Router, useNavigate} from 'react-router-dom';
import { Card, Container, Row, Col, Button } from "react-bootstrap";
 
const Posts = () => {
  var Navigate = useNavigate();
  const [posts, setPosts] = useState([]);
 
  useEffect(() => {
    // Fetch posts when the component mounts
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  function handleClick(id){
    
    Navigate(`/Post/` + id)
  }
 
  return (
    <Container className="mt-4">
      <Row>
        {posts.map((post) => (
          <Col key={post.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
                <Button id={post.id} onClick={() => handleClick(post.id)}>Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
 
export default Posts;