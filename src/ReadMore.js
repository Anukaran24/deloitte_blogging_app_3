import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { Card, Container, Row, Col, Button } from "react-bootstrap";

import axios from 'axios';

export default function ReadMore() {

    let {id} = useParams();
    const [comments, setcomments] = useState([])

    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/posts/"+ id +"/comments")
        .then((response) => {
            // const res = response.data.filter((item) => item.postId === id );
            setcomments(response.data)
            console.log(response.data)
        })
        .catch((error) => {
            console.error("Error fetching comments:", error);
          });
      }, []);

    
      useEffect(() => {
        // Fetch posts when the component mounts
        axios
          .get("https://jsonplaceholder.typicode.com/posts/" + id)
          .then((response) => {
            setPosts(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.error("Error fetching posts:", error);
          });
      }, []);


    

  return (
    <Container className="mt-2">
        <Row key={posts.id} md={1}>
            <Card>
                <Card.Title>{posts.title}</Card.Title>
                <Card.Body>{posts.body}</Card.Body>
            </Card>
        </Row>
        <br/> Comments:
        <br/>
        <Col>
            {comments.map((comment) => (
                <Row key={comment.id} md={1}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{comment.name}</Card.Title>
                            <Card.Subtitle>{comment.email}</Card.Subtitle>
                            <Card.Body>{comment.body}</Card.Body>
                        </Card.Body>
                    </Card>
                </Row>
            ))}
        </Col>

    </Container>
  )
}
