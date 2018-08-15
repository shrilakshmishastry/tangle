import React,{Component} from 'react';
import {Row,Col,Container,InputGroup,Input,Button} from 'reactstrap';
require('./../images/landing_new.png');
const loginStyle = {
  fontFamily:'Source Sans Pro sans-serif',
};
class Login extends React.Component{

  render(){
    return(
      <div style={loginStyle} className='mt-md-5'>
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
              <InputGroup>
                <Input className='mr-3' placeholder="Full name" required/>
                <Input className="ml-3" placeholder="Password" required/>
              </InputGroup>
              <InputGroup className='mt-2'>
                <Input placeholder="Email"/>
              </InputGroup>
              <InputGroup className='mt-3'>
                <Button color='primary' block>
                  <small>
                  CONTINUE TO SIGNUP
                  </small>
                </Button>
              </InputGroup>
              <InputGroup className='justify-content-center'>
              <h5>or</h5>
              </InputGroup>
              <InputGroup className="text-white ">
                <Button style={{background:'rgb(99, 179, 239)'}} block>
                  <h5 className="pl-md-4 fa fa-twitter">{'  '}Login in with Twitter</h5>
                </Button>
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
