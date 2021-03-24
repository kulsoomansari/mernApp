import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

export default function PostUI({item, index}) {
    return (
        <div>
            <Card class="card" key={index} style={{ width: '18rem' }}>
                   <Card.Img class="card-img" variant="top" src={item.img} />
                   <Card.Body>
                     <Card.Title>{item.title}</Card.Title>
                     <Card.Text>
                       {item.description}
                     </Card.Text>
                     <Button variant="success"
                     size="sm"
                     as={Link}
                     to={"/update-post/" + item._id}
                     >
                       read post
                     </Button>
                   </Card.Body>
                 </Card>
        </div>
    )
}
