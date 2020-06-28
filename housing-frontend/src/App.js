import React,{useState,useEffect} from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import {Form,Button,Alert} from 'react-bootstrap'
import Suggestions from './Components/Suggestions'
import Helpline from './Components/Helpline'
import Home from './Components/Home'
import Complaints from './Components/Complaints'
import loginService from './services/login' 
import Vote from './Components/Vote'
import './index.css'

const Notification=(props)=>{
  if(props.message===null)
  return null
  return(
    <div>
      <Alert variant="danger">
    {props.message}
  </Alert>
    </div>
  )
  }

const LoginForm=({user,setUser})=>{
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 
  const [message,setMessage]=useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [setUser])


  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })
      setUser(user)
      window.localStorage.setItem(
        'loggedappUser', JSON.stringify(user)
      )
    setUsername('')
    setPassword('') 
    }catch (exception) {
      setMessage(`Wrong username or password`)
      setUsername('')
      setPassword('')
      setTimeout(()=>{
        setMessage(null)
      },5000)
    }
    }

return(
      <div>
        <h1>LOGIN TO APPLICATION</h1>
        <Notification message={message}/>
        <Form onSubmit={handleLogin}> 
  <Form.Group>
    <Form.Label>Username</Form.Label>
    <Form.Control type="text"  placeholder="Enter username" 
    value={username}
    name="Username"
    onChange={({ target }) => setUsername(target.value)}
    />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" 
    value={password}
    name="Password"
    onChange={({ target }) => setPassword(target.value)}
    />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
    )

}

const App=()=>{
const padding = {
  paddingRight: 5,
  fontSize:20
}
const [user, setUser] = useState(null)

const handleLogout=()=>{
  window.localStorage.removeItem('loggedappUser')
  setUser(null)
}

  return(
    <div className='container'> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>   
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light"  sticky="top" >
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as="span">
        <Link style={padding} to="/">HOME</Link>
      </Nav.Link>
      <Nav.Link  as="span">
        <Link style={padding} to="/suggestions">SUGGESTIONS</Link>
      </Nav.Link>
      <Nav.Link  as="span">
        <Link style={padding} to="/helpline">HELPLINE</Link>
      </Nav.Link>
      <Nav.Link  as="span">
        <Link style={padding} to="/complaints">COMPLAINT</Link>
      </Nav.Link>
      <Nav.Link  as="span">
        <Link style={padding} to="/vote">VOTE</Link>
      </Nav.Link>
      <Nav.Link  as="span">
        <Link  style={padding}  to='/' onClick={handleLogout}>LOGOUT</Link>
      </Nav.Link>
      </Nav>
  </Navbar.Collapse>
</Navbar>

<Switch>
<Route path='/suggestions'>
  <Suggestions/>
</Route>
<Route path='/complaints'>
  <Complaints/>
</Route>
<Route path='/helpline'>
  <Helpline/>
</Route>
<Route path='/vote'>
  <Vote/>
</Route>

<Route path='/'>
{user===null ? <LoginForm user={user} setUser={setUser}/> : <Home/>}
</Route>
</Switch>
</Router>
</div>
  )
}



export default App;
