import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {useState } from "react";
import { useHistory } from 'react-router-dom'
import axios from 'axios';

export default function Signup() {
const [email,setEmail]=useState('')
const [pwd,setPwd]=useState('')
const history = useHistory();
 const handleSubmit= (e) =>{
    e.preventDefault();
    let user = {email, pwd}
    console.log(user)
        axios.post('http://localhost:4000/api/users/add', user)
        .then(res => {
          console.log(res.data)
          history.push('/');
        })
        .catch(err=>console.log(err,'error'));
  
}
    return (
        <div>
            <Form className="form" onSubmit={handleSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e)=>setPwd(e.target.value)}/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Signin
  </Button>
</Form>
        </div>
    )
}
