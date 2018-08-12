// component for home view
import React,{Component} from 'react';
require('/home/shri/tangle/client/images/download.png');
import {Jumbotron,Container,Row,Col} from 'reactstrap';
// css class for home component
const homeStyle ={
  backgroundImage:'url('+ '/home/shri/tangle/client/dist/download.png'+')',
  backgroundRepeat:'no-repeat',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize:'contain',
  height:'300px',
  fontFamily:'Source Sans Pro sans-serif',

};

class Home extends React.Component{
  render(){
    return(
      <div className='mt-md-5'>
      <Jumbotron className='bg-white'
       style={homeStyle}>
      </Jumbotron>
      <Container style={{fontFamily:'Source Sans Pro sans-serif'}}>
        <Row>
          <Col md={{size:'auto',offset:2}}>
            <h1>A better way to manage your social media.</h1>
          </Col>
        </Row>
        <Row className=''>
          <Col  md={{offset:1}}>
            <h5 ><small>Fully manage all of your social media accounts in one place.
            No more wasting time,
             no more logging into multiple social accounts.</small></h5>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }

}

export default Home
