import React from 'react'
import {Badge,Jumbotron,Container,Button,Carousel,Card,CardDeck} from 'react-bootstrap'

const Home=()=>{
    return(
        <div>
<Jumbotron>
<Container>
<h1>Focus Realtors Housing Society <Badge variant="secondary">New</Badge></h1>
 <p>
   This is the official housing management website for Focus Realtors.
   All the information provided on the website is regularly updated by concerned authorities and is completely 
   validated.
   In case of any queries, click the link below.
 </p>
 <p>
 <Button variant="primary" href='/contact'>Learn more</Button>
</p>
</Container>
</Jumbotron>
<Carousel>
<Carousel.Item>
 <img
   className="d-block w-100"
   src="https://static.squareyards.com/resources/images/noida/project-image/gulshan-ikebana-project-large-image1.jpg?d=751x376"
   alt="First slide"
 />
 <Carousel.Caption>
   <h3>Building project</h3>
   <p>20 storey spacious buildings</p>
 </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
 <img
   className="d-block w-100"
   src="https://i.ytimg.com/vi/b_krDvUyfeM/maxresdefault.jpg"
   alt="second slide"
 />
 <Carousel.Caption>
   <h3>Exclusive Club</h3>
   <p>with spa,gym and other facilties</p>
 </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
 <img
   className="d-block w-100"
   src="https://www.99acres.com/microsite/gulshan-homz-gulshan-ikebana-sector143-noida/files/2018/07/ikebana1.jpg"
   alt="Third slide"
 />

 <Carousel.Caption>
   <h3>Building views</h3>
   <p>Best affordable society</p>
 </Carousel.Caption>
</Carousel.Item>
</Carousel>

<h1>Member Committee</h1>
<CardDeck >
<Card>
<Card.Header style={{fontSize:'20px',fontWeight:'bold'}}>Mrs Priya Saxena</Card.Header>
 <Card.Img variant="top" src="https://randomuser.me/api/portraits/women/15.jpg" />
 <Card.Body>
   <Card.Title>President</Card.Title>
   <Card.Text>
   Mrs Priya is a hardworking women and displays high leadership qualities.
   She has been with the society for 10+ years and knows how to handle the issues of the society.
   </Card.Text>
 </Card.Body>
 <Card.Footer>
   <small className="text-muted">In power since 2017</small>
 </Card.Footer>
</Card>
<Card>
<Card.Header style={{fontSize:'20px',fontWeight:'bold'}}>Mr Avinash Sharma</Card.Header>
 <Card.Img variant="top" src="https://randomuser.me/api/portraits/men/14.jpg" />
 <Card.Body>
   <Card.Title>Vice President</Card.Title>
   <Card.Text>
   Mr Avinash is a Software developer at a leading IT Company.
   He handles this responsibilty with utmost gratitude and has exceptional managerial capibilities. 
   </Card.Text>
 </Card.Body>
 <Card.Footer>
   <small className="text-muted">In power since 2017</small>
 </Card.Footer>
</Card>
<Card>
<Card.Header style={{fontSize:'20px',fontWeight:'bold'}}>Mr Vivek Singh</Card.Header>
 <Card.Img variant="top" src="https://randomuser.me/api/portraits/men/5.jpg" />
 <Card.Body>
   <Card.Title>Treasurer</Card.Title>
   <Card.Text>
   Mr Vivek is a working employee at PNB bank and has been handling matters of money for the society since the
   last 2 years. He is skilled at maintaining accounts and feasible utilization of society funds.
   </Card.Text>
 </Card.Body>
 <Card.Footer>
   <small className="text-muted">In power since 2018</small>
 </Card.Footer>
</Card>
</CardDeck>
</div>
    )
}

export default Home