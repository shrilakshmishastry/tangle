import React,{Component} from  'react';
import {Col,Row,Container,Button,Form,FormGroup,InputGroup,Input} from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
require('./../images/landing.png')
const siginStyle = {
  fontFamily:'Source Sans Pro sans-serif',
}
// Component for SIGNUP
class Signin extends React.Component{
  constructor(props){
   super(props);
   this.state = {
     name:'',
     password:'',
     email:''
   };
   this.handleChange=this.handleChange.bind(this);
   this.handleSubmit=this.handleSubmit.bind(this);

 }
 handleChange(event){
     this.setState({
     [event.target.name]:event.target.value,
     [event.target.name]:event.target.value,
     [event.target.name]:event.target.value
   });


 }
 handleSubmit(event){
     event.preventDefault();
     axios.post('/signin',
       {
         name:this.state.name,
         password:this.state.password,
         email:this.state.email
     })
     .then(response =>{
       if(response.data=='success')
       {
         this.props.history.push({
           pathname:'/'
         })
       }
       else{
         this.props.history.push({
           pathname:'/login'
         })
       }
     })
 }
  render(){
    return(
      <div style={siginStyle} >
      <Container className='mt-md-5'>
    <Row >
      <Col md={{size:4}} className='bg-white mt-md-5'>
        <img src='/home/shri/tangle/client/dist/landing_new.png' />
      </Col>
      <Col md={{size:5,offset:2}}  >
        <Row className="font-weight-light ml-3">
        <h2 >Open your account now</h2>
        </Row>
        <Row className='ml-3 mt-3'>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup >
          <InputGroup>
           <Input type='text' name='name' className='mr-3' placeholder="Full name" required='true' onChange={this.handleChange}/>
           <Input type='password' name='password' className="ml-3" placeholder="Password" required='true' onChange={this.handleChange}/>
         </InputGroup>
         <InputGroup className='mt-2'>
           <Input type='email' name='email' placeholder="Email"required='true' onChange={this.handleChange}/>
         </InputGroup>
           <InputGroup className='mt-3'>
             <Button color='primary' block>
             <small>
             CONTINUE TO SIGNUP
             </small>
           </Button>
         </InputGroup>
         </FormGroup>
        </Form>
        <small className='mt-3'>
        By clicking the button above, I agree and
        authorize Tangle to access my accounts on behalf.
        </small>
        </Row>
      </Col>
    </Row>
    </Container>
      </div>
    );
  }
}
export default Signin
