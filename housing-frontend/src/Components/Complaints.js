import React, { useState } from 'react'
import { Form,Button,Alert} from 'react-bootstrap'

const Notification=({name})=>{
    return (
    <Alert variant='danger'>
  <Alert.Heading>Hey {name},Your Complaint has been recorded</Alert.Heading>
  <p>We will get back to you at the earliest.</p>
</Alert>
    )
}
const Complaints =()=>{
const [name,setName]=useState('')
const [showAlert,setshowAlert]=useState(false)

const handleSubmit=(event)=>{
    event.preventDefault()
    setTimeout(()=>{
        setshowAlert(false)
    },4000)
    setshowAlert(true)

}
const handleChange=(event)=>{
    console.log(event.target.value)
    setName(event.target.value)
}
return(
    <div>
        <h1>TELL US HOW WE CAN HELP?  </h1>
        {showAlert===true?<Notification name={name} />: ''}
        <Form onSubmit={handleSubmit} >
        <Form.Group>
    <Form.Label>Name</Form.Label>
    <Form.Control value={name} onChange={handleChange} placeholder="Enter name" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="12-B, Apartment 4" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your Complaint</Form.Label>
    <Form.Control as="textarea" rows="4" />
  </Form.Group>
  <Form.Group controlId="formBasicRange">
    <Form.Label>Urgency </Form.Label>
    <Form.Control type="range" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
)

}

export default Complaints