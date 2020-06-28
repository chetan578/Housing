import React from 'react'
import {CardDeck,Card,ListGroup} from 'react-bootstrap'


const Helpline =()=>{
return(
    <div>
        <h1>HELP SUPPORT STAFF</h1>
       <CardDeck  style={{margin:'20px auto'}}>
<Card className="text-center">
<Card.Header style={{fontSize:'20px',fontWeight:'bold'}}>Ramesh Lal</Card.Header>
 <Card.Img variant="top" src="https://4.imimg.com/data4/JL/XF/MY-5801075/electrical-wires-and-cables-250x250.jpg" />
 <Card.Body>
   <Card.Title>Electrician</Card.Title>
   <ListGroup variant="flush">
    <ListGroup.Item>CONTACT : 9876372672</ListGroup.Item>
  </ListGroup>
 </Card.Body>
</Card>
<Card className="text-center">
<Card.Header style={{fontSize:'20px',fontWeight:'bold'}}>Harun singh</Card.Header>
 <Card.Img variant="top" src="https://www.washingtonpost.com/resizer/QJtOkVvaYcxvBs1t5udwcZS8B0o=/arc-anglerfish-washpost-prod-washpost/public/4Q2EYRR2XMI6TMIL6BNCFZ2YMU.jpg" />
 <Card.Body>
   <Card.Title>Plumber</Card.Title>
   <ListGroup variant="flush">
    <ListGroup.Item>CONTACT : 9876372672</ListGroup.Item>
  </ListGroup>
 </Card.Body>
</Card>
<Card className="text-center">
<Card.Header style={{fontSize:'20px',fontWeight:'bold'}}>Ashok Kumar</Card.Header>
 <Card.Img variant="top" src="https://lh3.googleusercontent.com/proxy/0HUr45hAar_rFi-doIpxZQnaQ3GOaYAO79cczDMkHB1ZAaqwegT3PBUbHkxsN8BYF6o8iG2I03I3sb1BmPlfOmw" />
 <Card.Body>
   <Card.Title>Sweeper</Card.Title>
   <ListGroup variant="flush">
    <ListGroup.Item>CONTACT : 9873647921</ListGroup.Item>
  </ListGroup>
 </Card.Body>
</Card>
</CardDeck>
<CardDeck style={{margin:'20px auto'}}>
<Card className="text-center">
<Card.Header style={{fontSize:'20px',fontWeight:'bold'}}>Vivek Dahiya</Card.Header>
 <Card.Img variant="top" src="https://media.noria.com/sites/Uploads/2020/2/25/SME_Header_MaintenanceManagement.jpg" />
 <Card.Body>
   <Card.Title>Maintenance</Card.Title>
   <ListGroup variant="flush">
    <ListGroup.Item>CONTACT : 9991234672</ListGroup.Item>
  </ListGroup>
 </Card.Body>
</Card>
<Card className="text-center">
<Card.Header style={{fontSize:'20px',fontWeight:'bold'}}>Mahesh Agarwal</Card.Header>
 <Card.Img variant="top" src="https://3.imimg.com/data3/UL/YT/MY-10160686/kids-club-500x500.jpg" />
 <Card.Body>
   <Card.Title>Club Facilities</Card.Title>
   <ListGroup variant="flush">
    <ListGroup.Item>CONTACT : 8767895432</ListGroup.Item>
  </ListGroup>
 </Card.Body>
</Card>
<Card className="text-center">
<Card.Header style={{fontSize:'20px',fontWeight:'bold'}}>Madan Mohan</Card.Header>
 <Card.Img variant="top" src="https://thebridge.in/wp-content/uploads/2020/06/Gym-owners--696x364.jpg" />
 <Card.Body>
   <Card.Title>Gym</Card.Title>
   <ListGroup variant="flush">
    <ListGroup.Item>CONTACT : 9876372672</ListGroup.Item>
  </ListGroup>
 </Card.Body>
</Card>
</CardDeck>
    </div>
)

}

export default Helpline