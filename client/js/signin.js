import React,{Component} from  'react';
import {Col,Row,Container,Button,Card,CardBody,CardText} from 'reactstrap';
import {Link} from 'react-router-dom';
require('./../images/landing.png')
const siginStyle = {
  fontFamily:'Source Sans Pro sans-serif',
}
// Component for SIGNUP
class Signin extends React.Component{
  render(){
    return(
      <div className={siginStyle} >
      <Container className='mt-5'>
        <Row>
          <Col md={{size:5,offset:4}} className='bg-black mt-md-5'>
          <Card>
          <CardBody>
          <CardText className='mt-md-3 '>

              By clicking the button below, I agree and 
             authorize Tangle to access my accounts on behalf.
          </CardText>
          <Link to='/' >
            <Button className='bg-primary mt-md-2' block>
            <small>  Agree and Create Account
            </small>
            </Button>
          </Link>
          </CardBody>
          </Card>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}
export default Signin
