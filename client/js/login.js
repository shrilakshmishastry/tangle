import React,{Component,props} from 'react';
import {Row,Col,Container,FormGroup,InputGroup,Form,Input,Button} from 'reactstrap';
import axios from 'axios';
import {Link} from 'react-router-dom';
require('./../images/landing_new.png');
const loginStyle = {
  fontFamily:'Source Sans Pro sans-serif',
};
class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      password:'',
      email:'',
      login:''
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);

  }
  handleChange(event){
      this.setState({
      [event.target.name]:event.target.value,
      [event.target.name]:event.target.value
    });


  }
  handleSubmit(event){
      event.preventDefault();
      console.log(this.state.password);
      axios.post('/login',
        {
          password:this.state.password,
          email:this.state.email
      })
      .then(response =>{
          if(response.data=='sigin'){
            this.props.history.push({
              pathname:'/signin'
            })
          }
          else if (response.data=='logged in ') {
            this.props.history.push({
              pathname:'/',
              state:{
                login:this.state.login
              }
            })
          }
          else if (response.data=='exist') {
            this.setState({
              login:'true'
            });
            this.props.history.push({
              pathname:'/',
              state:{
                login:this.state.login
              }
            })
          }

      })

  }

  render(){
    return(
      <div style={loginStyle} className='mt-md-5'>
      <Container className='mt-md-5'>
        <Row >
          <Col md={{size:4}} className='bg-white '>
            <img src='/home/shri/tangle/client/dist/landing_new.png' />
          </Col>
          <Col md={{size:5,offset:2}}  >
            <Row className="font-weight-light ml-3">
            <h2  >Login to your account now</h2>
            </Row>
            <Row className='ml-3 mt-3'>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup >
              <InputGroup>
               <Input type='email' name='email' className='mr-3' placeholder="Email" required='true' onChange={this.handleChange}/>
               <Input type='password' name='password' className="ml-3" placeholder="Password" required='true' onChange={this.handleChange}/>
             </InputGroup>
               <InputGroup className='mt-4'>
                 <Button color='primary' block>
                 <small>
                 CONTINUE TO LOGIN
                 </small>
               </Button>
             </InputGroup>
              </FormGroup>
            </Form>
            <InputGroup className='justify-content-center'>
              or
            </InputGroup>
            <InputGroup className='justify-content-center'>
              <Link to='/signin'>
                <Button color='primary'>
                  <small className='text-white'>
                  CONTINUE TO SIGNIN
                  </small>
                  </Button>
              </Link>
          </InputGroup>
        </Row>
          </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Login
