import React,{Component} from 'react';
import {Row,Col,Container,InputGroup,Input,Button} from 'reactstrap';
import {Link} from 'react-router-dom';
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
            <form>
              <InputGroup>
                <Input className='mr-3' placeholder="Full name" required='true'/>
                <Input className="ml-3" placeholder="Password" required='true'/>
              </InputGroup>
              <InputGroup className='mt-2'>
                <Input placeholder="Email"required='true'/>
              </InputGroup>
                <InputGroup className='mt-3'>
                  <Button color='primary' block>
                  <small>
                  CONTINUE TO SIGNUP
                  </small>
                </Button>
              </InputGroup>
              </form>
            </Row>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}
export default Login
