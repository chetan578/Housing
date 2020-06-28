import React,{useState} from 'react'
import {Table, Button,Alert} from 'react-bootstrap'


const Notification=()=>{
    return (
    <Alert  variant='success'>
  <Alert.Heading>You have casted your vote</Alert.Heading>
  <p>Thank You!</p>
</Alert>
    )
}


const Vote=()=>{

    let people=[
        {
        'id':1,
        'firstname':'vivek',
        'lastname':'sharma',
        'votes':101
        },{
        'id':2,
        'firstname':'rajat',
        'lastname':'verma',
        'votes':200
        },{
         'id':3,
        'firstname':'shubham',
        'lastname':'mehrol',
        'votes':207
        },{
        'id':4,   
        'firstname':'priyansh',
        'lastname':'sharma',
        'votes':321
        },{
        'id':5,   
        'firstname':'Anmol',
        'lastname':'agarwal',
        'votes':154
        },{
         'id':6,   
        'firstname':'naman',
        'lastname':'joshi',
        'votes':127
        },{
        'id':7,    
        'firstname':'puru',
        'lastname':'bhatnagar',
        'votes':501
        },{
            'id':8,
        'firstname':'nischay',
        'lastname':'singh',
        'votes':289
        },{
        'id':9,
        'firstname':'paridhi',
        'lastname':'sharma',
        'votes':400
        }
    ]

const [persons,setPersons]=useState(people)
const [hasVoted,sethasVoted]=useState(false)

const incrementVote=(id)=>{
    if(hasVoted===false)
    {
    const personTovote=persons.find(x=>x.id===id)
    const changedPerson={...personTovote,votes:personTovote.votes+1}
    setPersons(persons.map(x=>x.id===id?changedPerson:x))
    }
    sethasVoted(true)
} 



return(
  <div>
    <h1>YOUR VOTE MATTERS </h1>
    {hasVoted===true?<Notification/>:''} 
    
  <Table striped bordered hover>
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Total Votes</th>
      <th>Cast your vote</th>
    </tr>
  </thead>
  <tbody>
  {persons.map((x,id)=>
    <tr key={id}>
        <td>
            {x.firstname}
        </td>
        <td>
            {x.lastname}
        </td>
        <td>
            {x.votes}
        </td>
        <td>
            <Button onClick={()=>incrementVote(x.id)}>
                Vote
            </Button>
        </td>
    </tr>
    )}
  </tbody>
</Table>
</div>
    )
}

export default Vote