import React,{Component} from 'react';
import {Row,Col,Container} from 'reactstrap';
require('./../images/landing_new.png');

class Login extends React.Component{

  render(){
    return(
      <div className='mt-md-5'>
      <Container className='mt-md-5'>
        <Row className='bg-success'>
          <Col md={{size:5,offset:1}} className='bg-white mt-md-5'>
            <img src='/home/shri/tangle/client/dist/landing_new.png' />
          </Col>
          <Col md={{size:5, offset:1}}>
            hhhkjkhkjhyjgy
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}
export default Login
