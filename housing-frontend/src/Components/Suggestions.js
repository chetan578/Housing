import React, { useState } from 'react'
import { Form,Button,Alert} from 'react-bootstrap'

const Notification=({name})=>{
    return (
    <Alert variant="success">
  <Alert.Heading>Hey {name},Your suggestion has been recorded</Alert.Heading>
</Alert>
    )
}
const Suggestions =()=>{
const [name,setName]=useState('')
const [showAlert,setshowAlert]=useState(false)

const handleSubmit=(event)=>{
    event.preventDefault()
    setTimeout(()=>{
        setshowAlert(false)
    },3000)
    setshowAlert(true)
}
const handleChange=(event)=>{
    console.log(event.target.value)
    setName(event.target.value)
}
return(
    <div>
        <h1>SUGGESTIONS ARE WELCOME ! </h1>
        {showAlert===true?<Notification name={name} />: ''}
        <Form onSubmit={handleSubmit} >
        <Form.Group>
    <Form.Label>Name</Form.Label>
    <Form.Control value={name} onChange={handleChange} placeholder="Enter name" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="12-B, Apartment 4" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Suggestions you want to provide</Form.Label>
    <Form.Control as="textarea" rows="4" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
)

}

export default Suggestions